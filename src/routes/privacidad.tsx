import { createFileRoute } from '@tanstack/react-router';
import PlaceholderPage from '@/components/heartfirst/PlaceholderPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/privacidad')({ head: () => pageHead('Política de privacidad', 'Política de privacidad de Heartfirst. Contenido pendiente de incorporar.'), component: () => <PlaceholderPage title="Política de privacidad" /> });
