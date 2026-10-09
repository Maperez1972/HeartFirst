import type { ReactNode } from 'react';
export default function ContentPage({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return <main className="placeholder-page container"><span className="eyebrow">Heartfirst</span><h1>{title}</h1>{intro && <p className="mb-12 max-w-3xl">{intro}</p>}<div className="max-w-3xl space-y-10 [&_h2]:mb-5 [&_h2]:text-3xl [&_p+p]:mt-5 [&_a]:text-terracotta-text [&_a]:underline">{children}</div></main>;
}
