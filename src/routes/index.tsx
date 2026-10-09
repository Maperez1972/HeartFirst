import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '@/components/heartfirst/LandingPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/')({
  head: () => pageHead('Conócele antes de verle', 'Un programa para encontrar pareja estable en Madrid. Primero, valores, voz y conversación; la foto llega al final.', false),
  component: () => <LandingPage variant="a" />,
});
