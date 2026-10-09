export const SITE_URL = 'https://heartfirst.lovable.app';
export const SITE_DESCRIPTION = 'Conoce a alguien por sus valores, su voz y su forma de ser antes de ver su foto. Identidad verificada y acompañamiento personal. Apúntate a la lista.';

const BRAND_SUFFIX = ' · Heartfirst';

export function pageHead(title: string, description = SITE_DESCRIPTION, noindex = false) {
  const fullTitle = title.endsWith(BRAND_SUFFIX) ? title : `${title}${BRAND_SUFFIX}`;
  return {
    meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, ...(noindex ? [{ name: 'robots', content: 'noindex' }] : [])],
    ...(noindex ? { links: [{ rel: 'canonical', href: 'https://id-preview--c787229a-aa2a-4032-a144-06a32da95ae6.lovable.app/' }] } : {}),
  };
}
