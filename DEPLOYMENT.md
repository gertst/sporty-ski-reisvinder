# Deployment Guide voor GitHub Pages

## Snelle Setup

1. **Upload naar GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/sporty-ski-reisvinder.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**

   - Ga naar je repository op GitHub
   - Klik op "Settings" tab
   - Scroll naar "Pages" in de sidebar
   - Onder "Source" selecteer "GitHub Actions"

3. **Wacht op deployment**
   - De eerste deployment start automatisch na het pushen
   - Check de "Actions" tab voor de progress
   - Je site is beschikbaar op: `https://YOUR_USERNAME.github.io/sporty-ski-reisvinder/`

## Belangrijke Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow voor deployment
- `nuxt.config.ts` - Geconfigureerd voor static generation en GitHub Pages
- `public/.nojekyll` - Vertelt GitHub om Jekyll te skippen

## Troubleshooting

### Site laadt niet correct

- Check of de baseURL correct is ingesteld in `nuxt.config.ts`
- Verify dat GitHub Pages is enabled in repository settings

### Build fails

- Check de Actions tab voor error details
- Ensure alle dependencies zijn correct gespecificeerd in `package.json`

### Assets laden niet

- De `buildAssetsDir: '_nuxt/'` configuratie zou dit moeten oplossen
- Check browser devtools voor 404 errors

## Lokaal testen

Voordat je deployt, test lokaal:

```bash
# Generate static site
npm run generate

# Test de generated site
npx serve .output/public
```

Open http://localhost:3000 en verifieer dat alles werkt.
