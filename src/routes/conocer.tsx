import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '@/components/heartfirst/LandingPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/conocer')({
  head: () => pageHead('Conócele antes de verle', undefined, true),
  component: () => <LandingPage variant="a" />,
});
