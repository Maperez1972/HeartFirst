import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { ArrowRight, LoaderCircle, LockKeyhole } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { guardarRegistro } from '@/lib/registro';
import { readCampaign } from '@/lib/campaign';
import { registrationSchema, type Variant } from '@/types/registration';
const fields = [
  { name: 'edad', label: 'Tu edad', options: [['35-39', '35–39'], ['40-44', '40–44'], ['45-49', '45–49'], ['50-54', '50–54'], ['55-60', '55–60'], ['60+', 'Más de 60']] },
  { name: 'genero', label: 'Tú eres', options: [['mujer', 'Mujer'], ['hombre', 'Hombre'], ['otra', 'Otra o prefiero describirlo']] },
  { name: 'busca', label: 'Buscas conocer a', options: [['mujeres', 'Mujeres'], ['hombres', 'Hombres'], ['indiferente', 'Me es indiferente']] },
  { name: 'intencion', label: 'Qué buscas', options: [['estable', 'Una pareja estable'], ['ver_que_surge', 'Conocer gente y ver qué surge'], ['no_lo_se', 'Aún no lo sé']] },
  { name: 'ciudad', label: 'Dónde vives', options: [['madrid', 'Madrid ciudad'], ['comunidad_madrid', 'Comunidad de Madrid'], ['otra', 'Otra ciudad']] },
];
const consents = [
  ['acepta_edad', 'Tengo 35 años o más.'],
  ['acepta_lista', 'Quiero unirme a la lista de espera y que me escribáis cuando haya novedades sobre el proyecto. Puedo darme de baja en cualquier momento.'],
  ['acepta_genero_buscado', 'Acepto que se trate el género de la persona que busco. Sé que, junto con mi propio género, puede revelar mi orientación sexual, y que solo se usa de forma agregada para el estudio.'],
];
export default function RegistrationForm({ variant }: { variant: Variant }) {
  const [otherCity, setOtherCity] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (pending) return;
    const form = new FormData(event.currentTarget);
    const result = registrationSchema.safeParse({ ...Object.fromEntries(form.entries()), ciudad_otra: otherCity ? form.get('ciudad_otra') : null, acepta_edad: form.has('acepta_edad'), acepta_lista: form.has('acepta_lista'), acepta_genero_buscado: form.has('acepta_genero_buscado'), variante: variant, ...readCampaign() });
    if (!result.success) { setError('Revisa los campos y acepta las tres casillas para continuar.'); return; }
    setPending(true); setError('');
    try {
      const response = await guardarRegistro(result.data);
      if (response.ok || response.duplicado) { await navigate({ to: '/gracias', search: { intencion: result.data.intencion === 'ver_que_surge' ? 'ver_que_surge' : undefined } }); return; }
      setError('No hemos podido guardar tus datos, inténtalo de nuevo en unos minutos.');
    } catch { setError('No hemos podido guardar tus datos, inténtalo de nuevo en unos minutos.'); }
    finally { setPending(false); }
  }
  return <section id="lista-espera" className="section registration-section"><div className="container registration-layout"><div className="registration-intro"><span className="eyebrow">Un primer paso, a tu ritmo</span><h2>Empieza por contarnos <em>quién eres.</em></h2><p>Apúntate a la lista de espera y haz tu entrevista cuando quieras. Es gratis y no te compromete a nada.</p><div className="privacy-note"><LockKeyhole size={20} /><span>Tus datos nunca se venden.</span></div></div><form onSubmit={submit} className="registration-form"><fieldset disabled={pending}><legend className="sr-only">Lista de espera de Heartfirst</legend><div className="form-grid"><label className="field">Tu email<input type="email" name="email" autoComplete="email" required maxLength={255} placeholder="tu@email.com" /></label>{fields.map((field) => <label className="field" key={field.name}>{field.label}<select name={field.name} required defaultValue="" onChange={field.name === 'ciudad' ? (event) => setOtherCity(event.target.value === 'otra') : undefined}><option value="" disabled>Selecciona una opción</option>{field.options.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>)}{otherCity && <label className="field full-field">Tu ciudad<input name="ciudad_otra" required maxLength={80} autoComplete="address-level2" /></label>}</div><div className="consent-fields">{consents.map(([name, label]) => <label key={name} className="consent-label"><input type="checkbox" name={name} required /><span>{label}</span></label>)}</div><p className="legal-note">Responsable: Miguel Ángel Pérez. Finalidad: estudio de un posible servicio para encontrar pareja estable y lista de espera. Derechos de acceso, rectificación, supresión y otros en <a href="mailto:miguelangel@heartfirst.es">miguelangel@heartfirst.es</a>. Más información en la <Link to="/privacidad">política de privacidad</Link>.</p>{error && <p role="alert" className="form-error">{error}</p>}<Button type="submit" disabled={pending} className="form-submit">{pending ? <><LoaderCircle className="animate-spin" /> Un momento…</> : <>Quiero conocer Heartfirst <ArrowRight /></>}</Button></fieldset></form></div></section>;
}
