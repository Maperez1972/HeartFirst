import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '@/components/heartfirst/LandingPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/construir')({
  head: () => pageHead('Construir una pareja estable', undefined, true),
  component: () => <LandingPage variant="b" />,
});
