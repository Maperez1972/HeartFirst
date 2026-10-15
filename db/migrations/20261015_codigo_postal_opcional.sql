-- Aplicada en el proyecto de Supabase eersduqqmwqqyiukxfap el 2026-10-15.
-- Código postal opcional para medir la conversión por zona (Puerta 2). Solo códigos postales españoles de 5 cifras.

alter table public.registros
  add column codigo_postal text
  check (codigo_postal is null or codigo_postal ~ '^(0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$');

comment on column public.registros.codigo_postal is 'Opcional. Se usa solo para medir la captación por zona y decidir dónde abrir.';

grant insert (codigo_postal) on table public.registros to anon;
