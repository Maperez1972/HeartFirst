import { createFileRoute } from '@tanstack/react-router';
import PlaceholderPage from '@/components/heartfirst/PlaceholderPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/cookies')({ head: () => pageHead('Política de cookies', 'Política de cookies de Heartfirst. Contenido pendiente de incorporar.'), component: () => <PlaceholderPage title="Política de cookies" /> });
