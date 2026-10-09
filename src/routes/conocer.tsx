import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '@/components/heartfirst/LandingPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/conocer')({
  head: () => pageHead('Conócele antes de verle', 'Una nueva forma de encontrar pareja estable, donde la foto llega al final. Primero, valores, voz y conversación.', true),
  component: () => <LandingPage variant="a" />,
});
