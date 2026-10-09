export function pageHead(title: string, description: string, noindex = false) {
  return {
    meta: [{ title: `${title} · Heartfirst` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} · Heartfirst` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, ...(noindex ? [{ name: 'robots', content: 'noindex' }] : [])],
    ...(noindex ? { links: [{ rel: 'canonical', href: 'https://id-preview--c787229a-aa2a-4032-a144-06a32da95ae6.lovable.app/' }] } : {}),
  };
}
