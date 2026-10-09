import { describe, expect, it } from 'vitest';
import { registrationSchema } from '@/types/registration';
import { guardarRegistro } from '@/lib/registro';

const valid = { email: 'persona@example.com', edad: '45-49', genero: 'mujer', busca: 'hombres', intencion: 'estable', ciudad: 'madrid', ciudad_otra: null, acepta_edad: true, acepta_lista: true, acepta_genero_buscado: true, variante: 'a', utm_source: null, utm_medium: null, utm_campaign: null, utm_content: null };
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
  it('simulates registration without sending data', async () => {
    const data = registrationSchema.parse(valid);
    await expect(guardarRegistro(data)).resolves.toEqual({ ok: true });
  });
});