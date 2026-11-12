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

- Keep the resume as a real file in `public/`, never a CDN asset pointer — the site is deployed as a static export to GitHub Pages, where Lovable's asset URLs are not served.
- When the resume is replaced, give it a new filename and delete the old one, so no stale browser copy can be served; point every reference at `RESUME_URL` in `src/lib/resume.ts`.
