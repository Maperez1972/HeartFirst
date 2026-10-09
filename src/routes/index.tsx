import { createFileRoute } from '@tanstack/react-router';
import LandingPage from '@/components/heartfirst/LandingPage';
import { pageHead, SITE_TITLE } from '@/lib/metadata';
export const Route = createFileRoute('/')({
  head: () => pageHead(SITE_TITLE),
  component: () => <LandingPage variant="a" />,
});
