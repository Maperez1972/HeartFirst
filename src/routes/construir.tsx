import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '@/components/heartfirst/LandingPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/construir')({
  head: () => pageHead('Construir una pareja estable', 'Un programa para encontrar pareja estable en Madrid. Primero, valores, voz y conversación; la foto llega al final.', true),
  component: () => <LandingPage variant="b" />,
});
