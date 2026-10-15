import { afterEach, describe, expect, it, vi } from 'vitest';
import { registrationSchema } from '@/types/registration';
import { guardarRegistro } from '@/lib/registro';

const valid = { email: 'persona@example.com', edad: '45-49', genero: 'mujer', busca: 'hombres', intencion: 'estable', ciudad: 'madrid', ciudad_otra: null, codigo_postal: null, acepta_edad: true, acepta_lista: true, acepta_genero_buscado: true, variante: 'a', utm_source: null, utm_medium: null, utm_campaign: null, utm_content: null };
describe('Heartfirst registration', () => {
  it('accepts the exact required payload', () => expect(registrationSchema.safeParse(valid).success).toBe(true));
  it('rejects invalid emails and missing consent', () => {
    expect(registrationSchema.safeParse({ ...valid, email: 'invalid' }).success).toBe(false);
    for (const key of ['acepta_edad', 'acepta_lista', 'acepta_genero_buscado']) expect(registrationSchema.safeParse({ ...valid, [key]: false }).success).toBe(false);
  });
  it('requires a bounded city when another city is chosen', () => {
    expect(registrationSchema.safeParse({ ...valid, ciudad: 'otra' }).success).toBe(false);
    expect(registrationSchema.safeParse({ ...valid, ciudad: 'otra', ciudad_otra: 'x'.repeat(81) }).success).toBe(false);
  });
  it('accepts an optional Spanish postal code and rejects malformed ones', () => {
    expect(registrationSchema.safeParse({ ...valid, codigo_postal: '28013' }).success).toBe(true);
    for (const cp of ['2801', '280130', '99001', '00123', 'abcde']) expect(registrationSchema.safeParse({ ...valid, codigo_postal: cp }).success).toBe(false);
  });
  describe('guardarRegistro', () => {
    afterEach(() => vi.unstubAllGlobals());
    const conRespuesta = (status: number) => {
      const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status }));
      vi.stubGlobal('fetch', fetchMock);
      return fetchMock;
    };

    it('envía solo inserción, normaliza el email y recorta UTM', async () => {
      const fetchMock = conRespuesta(201);
      const data = registrationSchema.parse({ ...valid, email: ' Persona@Example.com ', utm_source: 'x'.repeat(150) });
      await expect(guardarRegistro(data)).resolves.toEqual({ ok: true });
      const [url, init] = fetchMock.mock.calls[0]!;
      expect(url).toMatch(/\/rest\/v1\/registros$/);
      expect(init.method).toBe('POST');
      expect(init.headers.Prefer).toBe('return=minimal');
      const cuerpo = JSON.parse(init.body);
      expect(cuerpo.email).toBe('persona@example.com');
      expect(cuerpo.utm_source).toHaveLength(100);
      expect(cuerpo.ciudad_otra).toBeNull();
    });
    it('envía el código postal solo si existe y reintenta sin él si falta la columna', async () => {
      const fetchMock = vi.fn()
        .mockResolvedValueOnce(new Response(JSON.stringify({ code: 'PGRST204' }), { status: 400 }))
        .mockResolvedValueOnce(new Response(null, { status: 201 }));
      vi.stubGlobal('fetch', fetchMock);
      await expect(guardarRegistro(registrationSchema.parse({ ...valid, codigo_postal: '28013' }))).resolves.toEqual({ ok: true });
      expect(JSON.parse(fetchMock.mock.calls[0]![1].body).codigo_postal).toBe('28013');
      expect(JSON.parse(fetchMock.mock.calls[1]![1].body)).not.toHaveProperty('codigo_postal');
    });
    it('no envía el campo si el código postal está vacío', async () => {
      const fetchMock = conRespuesta(201);
      await guardarRegistro(registrationSchema.parse(valid));
      expect(JSON.parse(fetchMock.mock.calls[0]![1].body)).not.toHaveProperty('codigo_postal');
    });
    it('trata un email repetido como éxito sin revelarlo', async () => {
      conRespuesta(409);
      await expect(guardarRegistro(registrationSchema.parse(valid))).resolves.toEqual({ ok: true, duplicado: true });
    });
    it('devuelve error ante fallo del servidor o de red', async () => {
      conRespuesta(500);
      await expect(guardarRegistro(registrationSchema.parse(valid))).resolves.toEqual({ ok: false });
      vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('offline')));
      await expect(guardarRegistro(registrationSchema.parse(valid))).resolves.toEqual({ ok: false });
    });
  });
});