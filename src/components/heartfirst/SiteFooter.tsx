import { Link } from '@tanstack/react-router';
import Logo from './Logo';
export default function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner"><Logo small /><nav aria-label="Enlaces legales"><Link to="/aviso-legal">Aviso legal</Link><Link to="/privacidad">Política de privacidad</Link><Link to="/cookies">Política de cookies</Link><Link to="/compromisos">Nuestros compromisos</Link></nav><span>© 2026 Heartfirst</span></div></footer>;
}
