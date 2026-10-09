import { createFileRoute } from '@tanstack/react-router';
import ContentPage from '@/components/heartfirst/ContentPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/aviso-legal')({ head: () => pageHead("Aviso legal"), component: Content });
function Content() { return <ContentPage title="Aviso legal">
<section><h2>Titular</h2><p>{"Miguel Ángel Pérez [segundo apellido], con NIF [NIF] y domicilio a efectos de notificaciones en [domicilio profesional]. Contacto: miguelangel@heartfirst.es."}</p></section>
<section><h2>Objeto</h2><p>{"Esta web presenta Heartfirst, un proyecto en fase de estudio para ayudar a personas de 40 a 60 años a encontrar pareja estable, y gestiona su lista de espera. Por ahora no se contrata ningún servicio de pago a través de ella."}</p></section>
<section><h2>Propiedad intelectual</h2><p>{"Los textos, el logo, el diseño y los contenidos de esta web pertenecen a su titular y no se pueden reproducir sin permiso."}</p></section>
<section><h2>Responsabilidad</h2><p>{"El titular no responde del contenido de las webs enlazadas desde esta página."}</p></section>
<section><h2>Ley aplicable</h2><p>{"Legislación española."}</p></section>
</ContentPage>; }
