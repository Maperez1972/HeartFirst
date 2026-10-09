import { createFileRoute } from '@tanstack/react-router';
import PlaceholderPage from '@/components/heartfirst/PlaceholderPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/metodo')({ head: () => pageHead('El método', 'El método de Heartfirst. Contenido pendiente de incorporar.'), component: () => <PlaceholderPage title="El método" /> });
