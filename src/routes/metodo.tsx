import { createFileRoute } from '@tanstack/react-router';
import ContentPage from '@/components/heartfirst/ContentPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/metodo')({ head: () => pageHead("Nuestro método"), component: Content });
function Content() { return <ContentPage title="Nuestro método" intro="Heartfirst se basa en décadas de investigación sobre parejas que duran. No prometemos amor científicamente probado; usamos lo que se sabe para que conozcas mejor a quien tienes delante.">
<section><h2>Conocer antes de elegir</h2><p>{"Lo que decimos buscar en un perfil apenas predice quién nos atrae cuando le conocemos (Eastwick y Finkel, 2008). Por eso la foto llega al final y empezamos por la conversación."}</p></section>
<section><h2>La cercanía se construye</h2><p>{"Abrirse poco a poco y por turnos acerca a dos personas (Aron y colaboradores, 1997). Nuestras conversaciones guiadas siguen ese principio."}</p></section>
<section><h2>Menos opciones, mejores decisiones</h2><p>{"Demasiadas opciones dificultan decidir y dejan menos satisfecho con lo elegido (Iyengar y Lepper, 2000; D’Angelo y Toma, 2017). Te presentamos a pocas personas, elegidas con cuidado."}</p></section>
<section><h2>Lo que sostiene una pareja</h2><p>{"Los valores compartidos, la forma de comunicarse y la manera de vincularse pesan más que una lista de rasgos (Joel y colaboradores, 2020; Gottman; Schwartz). Es lo que miramos en tu entrevista."}</p></section>
<section><h2>La experiencia enseña a mirar</h2><p>{"Cuanto más se conocen dos personas antes de salir, menos pesa el atractivo de foto (Hunt, Eastwick y Finkel, 2015), y con los años se eligen las relaciones con sentido (Carstensen). A estas alturas sabes lo que importa."}</p></section>
<section><h2>Tecnología con límites</h2><p>{"Un asistente digital te hace la entrevista y prepara un primer retrato. Antes de analizar nada se eliminan tu nombre y cualquier dato que te identifique. El retrato lo revisas tú, y las presentaciones las supervisa una persona del equipo."}</p></section>
<p className="border-t border-border pt-6 text-sm">Estamos formando un comité asesor con profesionales de la psicología de pareja que revisará el método.</p>
</ContentPage>; }
