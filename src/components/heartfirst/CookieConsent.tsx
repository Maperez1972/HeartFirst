import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
const googleId = 'G-XXXXXXX';
type Consent = 'granted' | 'denied';
function updateConsent(consent: Consent) {
  const target = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  target.dataLayer ??= [];
  target.gtag ??= function (..._args: unknown[]) { target.dataLayer?.push(arguments); };
  target.gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
  target.gtag('consent', 'update', { analytics_storage: consent, ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  if (consent === 'granted' && googleId !== String('G-XXXXXXX') && !document.getElementById('heartfirst-google')) {
    const script = document.createElement('script'); script.id = 'heartfirst-google'; script.async = true; script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleId)}`;
    document.head.appendChild(script); target.gtag('js', new Date()); target.gtag('config', googleId, { allow_google_signals: false, allow_ad_personalization_signals: false });
  }
}
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let saved: string | null = null;
    try { saved = sessionStorage.getItem('heartfirst-consent'); } catch { /* no storage */ }
    updateConsent(saved === 'granted' ? 'granted' : 'denied'); setVisible(saved !== 'granted' && saved !== 'denied');
  }, []);
  function choose(consent: Consent) {
    updateConsent(consent); try { sessionStorage.setItem('heartfirst-consent', consent); } catch { /* no storage */ } setVisible(false);
  }
  if (!visible) return null;
  return <aside className="cookie-banner" aria-label="Preferencias de cookies"><div><strong>Tu privacidad, primero.</strong><p>Solo usamos cookies de medición si tú lo aceptas. <Link to="/cookies">Política de cookies</Link></p></div><div className="cookie-actions"><Button variant="outline" onClick={() => choose('denied')}>Rechazar</Button><Button variant="outline" onClick={() => choose('granted')}>Aceptar</Button></div></aside>;
}
