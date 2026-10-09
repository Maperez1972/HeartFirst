import type { RegistrationData } from '@/types/registration';

// Proyecto propio de Supabase (Frankfurt). La clave publicable está pensada para
// usarse en el navegador: la seguridad la dan las políticas de la tabla
// (solo inserción, sin lectura pública). Esquema en db/migrations/.
const SUPABASE_URL = 'https://eersduqqmwqqyiukxfap.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_zZJqfHxtaiO13NW7bwQPWA_36yr0fAw';

const recortar = (valor: string | null, max: number): string | null => {
  if (valor === null) return null;
  const limpio = valor.trim();
  return limpio ? limpio.slice(0, max) : null;
};

export async function guardarRegistro(datos: RegistrationData): Promise<{ ok: boolean; duplicado?: boolean }> {
  const cuerpo = {
    email: datos.email.trim().toLowerCase(),
    edad: datos.edad,
    genero: datos.genero,
    busca: datos.busca,
    intencion: datos.intencion,
    ciudad: datos.ciudad,
    ciudad_otra: datos.ciudad === 'otra' ? recortar(datos.ciudad_otra, 80) : null,
    variante: datos.variante,
    utm_source: recortar(datos.utm_source, 100),
    utm_medium: recortar(datos.utm_medium, 100),
    utm_campaign: recortar(datos.utm_campaign, 100),
    utm_content: recortar(datos.utm_content, 100),
    acepta_edad: datos.acepta_edad,
    acepta_lista: datos.acepta_lista,
    acepta_genero_buscado: datos.acepta_genero_buscado,
  };

  try {
    const respuesta = await fetch(`${SUPABASE_URL}/rest/v1/registros`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(cuerpo),
    });

    if (respuesta.status === 201 || respuesta.status === 204) return { ok: true };
    // 409: email ya registrado (índice único). Se trata como éxito para no revelar quién está en la lista.
    if (respuesta.status === 409) return { ok: true, duplicado: true };
    return { ok: false };
  } catch {
    return { ok: false };
  }
}
