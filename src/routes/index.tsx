import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '@/components/heartfirst/LandingPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/')({
  head: () => pageHead('Pareja estable en Madrid, primero la persona', 'Una nueva forma de encontrar pareja estable, donde la foto llega al final. Primero, valores, voz y conversación.', false),
  component: () => <LandingPage variant="a" />,
});
