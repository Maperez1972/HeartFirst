const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;
export function captureCampaign() {
  try {
    if (sessionStorage.getItem('heartfirst-arrival')) return;
    const params = new URLSearchParams(window.location.search);
    const campaign = Object.fromEntries(keys.map((key) => [key, params.get(key)?.slice(0, 200) || null]));
    sessionStorage.setItem('heartfirst-arrival', JSON.stringify(campaign));
  } catch { /* Storage is optional; the form still works without campaign attribution. */ }
}
export function readCampaign(): Record<typeof keys[number], string | null> {
  const empty = { utm_source: null, utm_medium: null, utm_campaign: null, utm_content: null };
  try {
    const parsed: unknown = JSON.parse(sessionStorage.getItem('heartfirst-arrival') || '{}');
    if (!parsed || typeof parsed !== 'object') return empty;
    return Object.fromEntries(keys.map((key) => {
      const value = Reflect.get(parsed, key);
      return [key, typeof value === 'string' ? value.slice(0, 200) : null];
    })) as Record<typeof keys[number], string | null>;
  } catch { return empty; }
}
