import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '@/components/heartfirst/LandingPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/construir')({
  head: () => pageHead('Construir una pareja estable', 'Te acompañamos hasta que encuentres a alguien con quien construir. Sin suscripciones sin fin.', true),
  component: () => <LandingPage variant="b" />,
});
