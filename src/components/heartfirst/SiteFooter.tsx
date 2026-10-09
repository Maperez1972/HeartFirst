import { Link } from '@tanstack/react-router';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><Logo small /><nav aria-label="Enlaces legales"><Link to="/aviso-legal">Aviso legal</Link><Link to="/privacidad">Política de privacidad</Link><Link to="/cookies">Política de cookies</Link><Link to="/compromisos">Nuestros compromisos</Link><Button variant="link" className="h-auto p-0 text-[length:inherit] font-normal text-muted-foreground" onClick={() => window.dispatchEvent(new Event('heartfirst-configure-cookies'))}>Configurar cookies</Button></nav><span>© 2026 Heartfirst</span></div></footer>;
}
