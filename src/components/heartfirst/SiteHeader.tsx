import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
export default function SiteHeader() {
  return <header className="site-header"><div className="container header-inner"><Logo /><nav aria-label="Navegación principal"><Link to="/metodo">El método</Link><Link to="/compromisos">Nuestros compromisos</Link></nav><Button asChild variant="outline" className="header-cta"><Link to="/" hash="lista-espera">Quiero conocer Heartfirst <ArrowUpRight /></Link></Button></div></header>;
}
