import { createFileRoute } from '@tanstack/react-router';
import ContentPage from '@/components/heartfirst/ContentPage';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/compromisos')({ head: () => pageHead('Nuestros compromisos'), component: CommitmentsPage });
const promises = [
  ['Todas las personas son reales y están verificadas, y nunca crearemos perfiles de relleno', 'Verificación de identidad con documento y selfie antes de la primera presentación; publicaremos el porcentaje de cuentas verificadas en nuestro informe de transparencia. Cero perfiles creados por Heartfirst, auditable por un tercero. La verificación confirma la identidad, no todo lo que cada persona cuenta de sí misma: por eso cualquiera puede avisar o denunciar en un toque: una persona lo revisa y responde en menos de 24 horas, también en fin de semana, y si resolverlo lleva más tiempo, explica los pasos.'],
  ['Tus datos no se venden ni se ceden. Sin publicidad de terceros', 'Política de privacidad y lista pública de proveedores que tratan datos.'],
  ['Te diremos la verdad: si no encontramos a alguien compatible, te lo decimos', 'Si en tu zona y tu tramo de edad aún no hay suficientes personas compatibles y activas, te lo decimos antes de cobrar y te reservamos un sitio prioritario sin coste. Durante el acompañamiento, al menos 4 presentaciones en 6 meses (8 en 12); si no llegamos, lo alargamos sin coste hasta completarlas. Aviso tras un plazo sin presentación compatible, con opción de pausar el acompañamiento sin coste. Solo te presentamos a personas activas y dentro de la distancia que eliges. Si limitamos o bloqueamos tu cuenta, te explicamos el motivo y puedes pedir que lo revisemos.'],
  ['Nadie es juzgado por su aspecto antes de conocerse', 'La foto permanece oculta hasta la revelación simultánea.'],
  ['Nadie desaparece sin más', 'Cada cierre de conversación va acompañado de un mensaje respetuoso guiado por la plataforma.'],
  ['Un precio claro, el mismo para todas las personas', 'Tarifa pública única, sin diferencias por género ni edad. Sin renovaciones automáticas ni pagos sorpresa: al terminar tu acompañamiento, solo continúas si tú lo pides.'],
  ['Puedes irte cuando quieras', 'Desistimiento en 14 días y baja en un paso, sin preguntas; borrado de datos en 30 días y política de devolución publicada.'],
  ['Soporte y privacidad: responde una persona', 'Las dudas sobre cobros, las reclamaciones y las consultas sobre tus datos las atiende una persona del equipo, con respuesta en un máximo de 48 horas.'],
];
function CommitmentsPage() {
  return <ContentPage title="Nuestros compromisos" intro="Ocho promesas públicas, cada una con una forma de comprobarla.">
    <ol className="space-y-10">{promises.map(([title, text], index) => <li key={title}><h2>{index + 1}. {title}</h2><p>{text}</p></li>)}</ol>
    <section><h2>Y lo que pedimos a cada persona</h2><p>Los compromisos son recíprocos: quien entra en Heartfirst acepta contar la verdad sobre sí mismo, tratar con respeto a cada presentación, cerrar con cortesía cuando no siga adelante, no compartir nada de otra persona y no buscar contacto fuera de la plataforma antes de tiempo.</p></section>
    <section id="carta" className="border-t border-border pt-10"><img src="/fundador.png" alt="Miguel Ángel Pérez, fundador de Heartfirst." width={240} height={240} loading="lazy" className="mb-8 size-40 rounded-full object-cover object-center sm:size-60" /><h2>Por qué existe Heartfirst</h2>
      <p>Me llamo Miguel Ángel Pérez. He dedicado mi carrera a construir tecnología en la que la gente pueda confiar: sistemas que demuestran lo que dicen, que protegen lo que se les entrega y que cumplen las reglas aunque nadie mire.</p>
      <p>Pero Heartfirst no nace de mi carrera, sino de mi vida. Tengo 53 años, estoy divorciado y tengo una hija. Conozco este problema desde dentro: durante años probé aplicaciones de citas, una tras otra, hasta que un día las borré todas y volví a lo de siempre, a conocer a las personas cara a cara.</p>
      <p>Y aun así, creo que la tecnología puede ayudar, si se usa para lo contrario de lo que hacen hoy esas aplicaciones. No para enseñarte un escaparate infinito, sino para hacer lo que hace un buen encuentro en persona: dejar que conozcas a alguien antes de juzgarle. Hay muchas personas como yo que no quieren rendirse, pero tampoco volver al escaparate. Para ellas lanzo este proyecto.</p>
      <p>Detrás hay una convicción sencilla: lo que hace que dos personas se quieran durante años no se ve en una foto. Se ve en lo que valoran, en cómo escuchan, en cómo cuidan. La investigación sobre parejas lo lleva diciendo décadas; nosotros hemos construido un método para tomarla en serio.</p>
      <p>No te prometo que encontrarás el amor; nadie honesto puede prometerlo. Te prometo esto:</p>
      <ul className="my-5 list-disc space-y-3 pl-5 text-muted-foreground"><li>que cada persona que conozcas aquí será real y vendrá a lo mismo que tú;</li><li>que lo más íntimo que nos cuentes estará protegido y nunca se venderá;</li><li>que te diremos la verdad, también cuando no sea la que esperas;</li><li>que publicaremos cómo cumplimos estos compromisos, con cifras, para que no tengas que creerme, sino comprobarlo.</li></ul>
      <p>Si algún día no estamos a la altura, escríbeme directamente a <a href="mailto:miguelangel@heartfirst.es">miguelangel@heartfirst.es</a>. Respondo yo.</p><p className="font-semibold">Miguel Ángel Pérez, fundador de Heartfirst</p>
    </section>
  </ContentPage>;
}
