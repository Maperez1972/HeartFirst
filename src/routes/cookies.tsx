import { createFileRoute } from '@tanstack/react-router';
import ContentPage from '@/components/heartfirst/ContentPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/cookies')({ head: () => pageHead("Política de cookies"), component: Content });
function Content() { return <ContentPage title="Política de cookies">
<section><p>{"Usamos cookies propias necesarias para que la web funcione y recordar tu elección sobre cookies. Si lo aceptas, usamos también la etiqueta de Google para medir qué anuncios traen visitas y registros; sin tu consentimiento no se activa. No usamos el píxel de Meta ni cookies de remarketing, y nunca compartimos con las plataformas de anuncios lo que respondes en la entrevista. Puedes cambiar tu elección en cualquier momento desde el enlace «Cookies» del pie de página."}</p></section>
</ContentPage>; }
