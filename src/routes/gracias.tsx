import { createFileRoute, Link } from '@tanstack/react-router';
import { z } from 'zod';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CookieConsent from '@/components/heartfirst/CookieConsent';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/gracias')({
  validateSearch: (search) => { const parsed = z.object({ intencion: z.enum(['ver_que_surge']).optional().catch(undefined) }).parse(search); return parsed; },
  head: () => pageHead('Gracias. Ya has dado el primer paso', 'Tu primer paso con Heartfirst: una conversación para empezar a conocerte.'),
  component: ThanksPage,
});
function ThanksPage() {
  const { intencion } = Route.useSearch();
  return <main className="thanks-page container"><Heart size={40} strokeWidth={1.2} /><span className="eyebrow">Heartfirst</span>{intencion === 'ver_que_surge' ? <><h1>Gracias por <em>tu interés.</em></h1><p>Queremos ser sinceros contigo: Heartfirst está pensado solo para personas que buscan una pareja estable, y nuestro programa pide tiempo y compromiso. Si en algún momento es lo que buscas, aquí estaremos.</p><Link to="/">Volver a Heartfirst</Link></> : <><h1>Gracias. Ya has dado <em>el primer paso.</em></h1><p>Te hemos enviado un email para confirmar tu dirección. Mientras tanto, si tienes 20 minutos tranquilos, puedes empezar ahora tu entrevista: es una conversación por voz con nuestro asistente digital, y al final recibirás tu espejo.</p><Button asChild className="hero-cta"><a href="#entrevista">Empezar mi entrevista <ArrowRight /></a></Button><Link className="later-link" to="/">Prefiero hacerla más tarde</Link></>}<CookieConsent /></main>;
}
