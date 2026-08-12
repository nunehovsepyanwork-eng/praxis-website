# PRAXIS — SEO & Launch Checklist

## Before deployment
1. Run `npm run build`.
2. Fix all build errors before publishing.
3. Test `/en` and `/hy` on desktop and mobile.
4. Confirm the call button, email link, LinkedIn link, and language switcher.

## Deployment
5. Push the final project to GitHub.
6. Import the repository into Vercel.
7. Test the temporary `vercel.app` deployment.
8. Add `praxis.am` and `www.praxis.am` in Vercel Domains.
9. Add the exact DNS records Vercel provides at the domain registrar.
10. Use `praxis.am` as the primary host and redirect `www` to it.

## After the domain is live
11. Check:
   - `https://praxis.am/en`
   - `https://praxis.am/hy`
   - `https://praxis.am/robots.txt`
   - `https://praxis.am/sitemap.xml`
12. Test structured data with Google Rich Results Test / Schema Markup Validator.

## Google Search Console
13. Add `praxis.am` as a **Domain property**.
14. Verify it using Google's DNS TXT record.
15. Submit `https://praxis.am/sitemap.xml`.
16. Use URL Inspection and request indexing for `/en` and `/hy`.

## Brand SEO
17. Link to `https://praxis.am` from PRAXIS and founder LinkedIn profiles and other official profiles.
18. Keep the company name, domain, and business description consistent.
19. Build credible mentions and links from Armenian partners, organizations, directories, and media.
20. Monitor branded queries, impressions, clicks, indexing, and Core Web Vitals in Search Console.

**Important:** technical SEO improves crawlability and understanding, but no one can legitimately guarantee a #1 Google ranking.
