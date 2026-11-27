# New Astro Site Setup Checklist

## 1. Create the repo

- [ ] Copy from existing site: `cp -r bowngroup_website new_site`
- [ ] Remove old origin: `git remote remove origin`
- [ ] Create new repo on GitHub
- [ ] Add new origin: `git remote add origin https://github.com/bownie/new_repo.git`
- [ ] Push: `git push -u origin main`

## 2. Update site config

- [ ] Edit `src/config.ts` — site title, author, bio, social links
- [ ] Edit `astro.config.ts` — update `site` to new domain e.g. `https://newdomain.com`
- [ ] Remove sample blog posts from `src/content/blog/`
- [ ] Update `README.md` if present

## 3. Cloudflare Workers config

The site is served by Cloudflare Workers static assets. `wrangler.toml` declares
`[assets] directory = "./dist"`, and the Astro integration in `astro.config.ts`
writes `_redirects` and `_headers` into `dist/` so retired URLs return real 301s.

- [ ] In the Cloudflare dashboard: Workers & Pages → Create → connect the repo
- [ ] Build command `npm run build`, deploy command `npx wrangler deploy`
- [ ] Attach both custom domains to the Worker: `newdomain.com` and `www.newdomain.com`
- [ ] Add a zone Redirect Rule for `https://www.newdomain.com/*` → `https://newdomain.com/$1` (301, preserve query string)
- [ ] SSL/TLS → Edge Certificates → **Always Use HTTPS** → On
- The Worker serves the site at the domain root. `astro.config.ts` still honours
  `ASTRO_BASE` if the site is ever deployed under a subpath.

## 4. Cloudflare DNS

- [ ] Attaching the custom domains in step 3 creates the proxied DNS records
- [ ] Do not point the records at GitHub Pages IPs; nothing is published there any more

## 5. Dependencies (avoid build failures)

- [ ] Pin `@tailwindcss/vite` to `4.1.4` in `package.json`
- [ ] Set the Node.js version in `.github/workflows/ci.yml` to match `package.json`
- [ ] Commit both `package.json` and `package-lock.json`

## 6. Verify

- [ ] Push a commit and check Actions tab — build should pass
- [ ] Visit the domain in a private window once DNS propagates
- [ ] Check HTTPS is working
