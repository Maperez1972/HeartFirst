import { z } from 'zod';
export const registrationSchema = z.object({
  email: z.string().trim().email('Introduce un email válido.').max(255),
  edad: z.enum(['35-39', '40-44', '45-49', '50-54', '55-60', '60+'], { errorMap: () => ({ message: 'Selecciona tu edad.' }) }),
  genero: z.enum(['mujer', 'hombre', 'otra']),
  busca: z.enum(['mujeres', 'hombres', 'indiferente']),
  intencion: z.enum(['estable', 'ver_que_surge', 'no_lo_se']),
  ciudad: z.enum(['madrid', 'comunidad_madrid', 'otra']),
  ciudad_otra: z.string().trim().max(80).nullable(),
  acepta_edad: z.literal(true), acepta_lista: z.literal(true), acepta_genero_buscado: z.literal(true),
  variante: z.enum(['a', 'b']),
  utm_source: z.string().max(200).nullable(), utm_medium: z.string().max(200).nullable(),
  utm_campaign: z.string().max(200).nullable(), utm_content: z.string().max(200).nullable(),
}).superRefine((data, context) => {
  if (data.ciudad === 'otra' && !data.ciudad_otra) context.addIssue({ code: z.ZodIssueCode.custom, path: ['ciudad_otra'], message: 'Indica tu ciudad.' });
});
export type RegistrationData = z.infer<typeof registrationSchema>;
export type Variant = 'a' | 'b';
