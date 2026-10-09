import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/lib/metadata';

export const Route = createFileRoute('/modelo')({
  staticData: { sitemap: false },
  head: () => {
    const head = pageHead('Cómo funciona Heartfirst por dentro');
    return { ...head, meta: [...head.meta, { name: 'robots', content: 'noindex, nofollow' }] };
  },
  component: ModelPage,
});

const included = [
  'Tu entrevista y tu espejo, revisado contigo',
  'Verificación de identidad',
  'Presentaciones elegidas una a una por compatibilidad',
  'Conversaciones guiadas, por escrito y por voz',
  'Una persona del equipo que te acompaña todo el tiempo',
  'Seguimiento después de cada primera cita',
];
const plans = [
  { duration: '6 meses', price: '249 €', description: 'Para conocer a alguien con calma.', note: 'Pago único.', featured: false },
  { duration: '12 meses', price: '399 €', description: 'Más tiempo para presentaciones y para conoceros.', note: 'Pago único o en dos plazos sin coste.', featured: true },
];
const paymentSteps = [
  ['Te apuntas y haces tu entrevista', 'Gratis.'],
  ['Recibes tu espejo y verificas tu identidad', 'Gratis.'],
  ['Si encajas y quieres seguir, eliges tu acompañamiento', 'Pagas aquí: pago único, o en dos plazos sin coste en el de 12 meses.'],
  ['Empiezan las presentaciones', 'Al ritmo que acordemos contigo.'],
];
const guarantees = [
  ['14 días para pensártelo', 'Puedes desistir en los 14 días siguientes a la contratación, sin dar explicaciones.'],
  ['Si no encontramos a nadie, te lo decimos', 'Si en 8 semanas no hay ninguna presentación compatible, te avisamos y eliges: pausar el acompañamiento sin coste o recuperar tu dinero íntegro.'],
  ['Libertad para irte', 'Te das de baja en un paso y borramos tus datos.'],
];

function ModelPage() {
  return <main className="container model-page">
    <span className="eyebrow">PARA SOCIOS Y COLABORADORES</span>
    <h1>Cómo funciona Heartfirst por dentro</h1>
    <p className="model-intro">Esta página resume el modelo de Heartfirst para quien quiera conocerlo a fondo. No está enlazada desde la web pública: los precios se están validando y todavía no se muestran a quien se apunta.</p>
    <section className="model-section"><h2>Dos acompañamientos</h2>
      <div className="model-plans">{plans.map(plan => <article key={plan.duration} className={`model-card ${plan.featured ? 'model-featured' : ''}`}>
        <h3>{plan.duration}</h3><p className="model-price">{plan.price}</p><p>{plan.description}</p>
        <h4 className="mt-6 font-bold">Incluye</h4><ul>{included.map(item => <li key={item}>{item}</li>)}</ul><p className="font-bold">{plan.note}</p>
      </article>)}</div>
      <p className="model-note">El mismo precio para todas las personas, sin diferencias por género ni por edad. Quienes estén en la lista de espera tendrán precio de fundación.</p>
    </section>
    <section className="model-section"><h2>Cuándo y cómo se paga</h2>
      <ol className="model-payment">{paymentSteps.map(([title, text], index) => <li key={title}><span className="step-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <p className="model-highlight">Nadie paga antes de saber si encaja.</p>
    </section>
    <section className="model-section"><h2>Garantías</h2><div className="model-guarantees">{guarantees.map(([title, text]) => <article className="model-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="model-section"><h2>Afiliados</h2><p className="model-prose">Algunas personas seleccionadas entran sin coste como afiliadas. Pasan la misma entrevista y la misma verificación, amplían el grupo del que salen las presentaciones y pueden pasar a un acompañamiento cuando quieran. Es un modelo habitual en las agencias de pareja, y hace que cada presentación sea mejor para todos.</p></section>
    <section className="model-section"><h2>Por qué un acompañamiento y no una suscripción</h2><p className="model-prose">Las aplicaciones de citas ganan dinero mientras sigues buscando. Nosotros, cuando encuentras a alguien. Un precio cerrado, con principio y final, alinea nuestro interés con el tuyo: nuestro éxito es que no vuelvas a necesitarnos.</p></section>
    <p className="model-final">Precios y condiciones en validación; pueden cambiar antes de abrir el piloto en Madrid.</p>
  </main>;
}