# Luxora – React + Vite Fashion Store

## Structure
```
luxora/
├── client/          (React + Vite  -> Vercel e deploy hoy)
│   ├── api/         (Vercel Serverless Functions: /api/products, /api/newsletter, /api/claim-offer)
│   ├── public/images
│   └── src/components, data, styles
└── server/          (Express API -- shudhu local development er jonno, optional)
```

## Local e run
```bash
# Terminal 1
cd server && npm install && npm run dev      # http://localhost:5000
# Terminal 2
cd client && npm install && npm run dev      # http://localhost:5173
```
Vite proxy `/api` ke `localhost:5000` e pathay, tai local e `server/` lagbe.

## Vercel e deploy
1. GitHub e push koro.
2. Vercel -> Add New Project -> repo select.
3. **Root Directory: `client`**  (Framework: Vite, auto detect hobe)
4. Deploy. `client/api/*` automatic serverless function hishebe cholbe.

## Product / API change korle
Product data **duita jaigay** ache, duita-i update koro:
- `server/data/products.js`   (local)
- `client/api/_data/products.js`   (Vercel)

## Image
`client/public/images/` e `.webp` use kora hoyeche (choto size, fast load).
Notun image dile `.webp` e dao, ar `siteData.js` / `products.js` e extension chhara path likho (jemon `/images/products/product-11`).
