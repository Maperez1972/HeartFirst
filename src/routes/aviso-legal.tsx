import { createFileRoute } from '@tanstack/react-router';
import PlaceholderPage from '@/components/heartfirst/PlaceholderPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/aviso-legal')({ head: () => pageHead('Aviso legal', 'Aviso legal de Heartfirst. Contenido pendiente de incorporar.'), component: () => <PlaceholderPage title="Aviso legal" /> });
