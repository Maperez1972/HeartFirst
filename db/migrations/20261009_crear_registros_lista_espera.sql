-- Aplicada en el proyecto de Supabase eersduqqmwqqyiukxfap (eu-central-1, Frankfurt) el 2026-10-09.
-- Lista de espera de la Puerta 2: solo inserción pública, sin lectura pública.

create table public.registros (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null check (length(email) <= 254 and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  edad text not null check (edad in ('35-39','40-44','45-49','50-54','55-60','60+')),
  genero text not null check (genero in ('mujer','hombre','otra')),
  busca text not null check (busca in ('mujeres','hombres','indiferente')),
  intencion text not null check (intencion in ('estable','ver_que_surge','no_lo_se')),
  ciudad text not null check (ciudad in ('madrid','comunidad_madrid','otra')),
  ciudad_otra text check (ciudad_otra is null or length(ciudad_otra) <= 80),
  variante text not null check (variante in ('a','b','c')),
  utm_source text check (utm_source is null or length(utm_source) <= 100),
  utm_medium text check (utm_medium is null or length(utm_medium) <= 100),
  utm_campaign text check (utm_campaign is null or length(utm_campaign) <= 100),
  utm_content text check (utm_content is null or length(utm_content) <= 100),
  acepta_edad boolean not null check (acepta_edad),
  acepta_lista boolean not null check (acepta_lista),
  acepta_genero_buscado boolean not null check (acepta_genero_buscado),
  consentimiento_version text not null default 'v1-2026-10',
  pasa_entrevista boolean generated always as (intencion <> 'ver_que_surge') stored,
  email_confirmado boolean not null default false
);

comment on table public.registros is 'Lista de espera de la Puerta 2. Datos personales y de categoría especial (art. 9 RGPD): solo inserción pública, sin lectura pública.';

create unique index registros_email_unico on public.registros (lower(email));

alter table public.registros enable row level security;

revoke all on table public.registros from anon, authenticated;

grant insert (email, edad, genero, busca, intencion, ciudad, ciudad_otra, variante,
  utm_source, utm_medium, utm_campaign, utm_content,
  acepta_edad, acepta_lista, acepta_genero_buscado)
  on table public.registros to anon;

create policy "insercion_publica_con_consentimientos"
  on public.registros
  for insert
  to anon
  with check (acepta_edad and acepta_lista and acepta_genero_buscado);

-- Cierra la función interna de RLS automática a la API pública (aviso del linter de Supabase).
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
