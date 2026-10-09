<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use TanStack file routes with a shared Heartfirst landing component for A/B variants, so only the hero copy differs.
- Keep registration behind the browser-only `guardarRegistro` adapter with a typed validated payload, so the user can replace its provisional implementation without changing the UI.
- Store only arrival campaign parameters and cookie consent in sessionStorage; pass the non-sensitive thanks-page intent via route search to avoid persisting form data.
- Define all Heartfirst visual tokens in src/styles.css and use existing shadcn controls, so the brand remains consistent across every page.
- Keep Google measurement inactive while its ID is a placeholder, with denied Consent Mode defaults and measurement components only on landing and thanks routes, to avoid invalid tracking requests.
