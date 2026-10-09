import { createFileRoute } from '@tanstack/react-router';
import PlaceholderPage from '@/components/heartfirst/PlaceholderPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/compromisos')({ head: () => pageHead('Nuestros compromisos', 'Nuestros compromisos de Heartfirst. Contenido pendiente de incorporar.'), component: () => <PlaceholderPage title="Nuestros compromisos" /> });
