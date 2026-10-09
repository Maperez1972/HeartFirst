import { Link } from '@tanstack/react-router';
export default function Logo({ small = false }: { small?: boolean }) {
  return <Link to="/" aria-label="Heartfirst, inicio" className={`logo ${small ? 'logo-small' : ''}`}><img src="/heartfirst.svg" alt="" width={44} height={44} /><span><i>heart</i><strong>first</strong></span></Link>;
}
