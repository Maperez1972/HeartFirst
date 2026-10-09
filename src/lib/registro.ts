import type { RegistrationData } from '@/types/registration';
export async function guardarRegistro(_datos: RegistrationData): Promise<{ ok: boolean; duplicado?: boolean }> {
  await new Promise<void>((resolve) => setTimeout(resolve, 500));
  return { ok: true };
}
