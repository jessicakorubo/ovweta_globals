# Ovweta Global Limited — Website

Dark industrial Next.js 14 site for a Port Harcourt marine & industrial equipment hire company.

## Stack
- **Next.js 14** (App Router) · **TypeScript** · **Tailwind CSS** · **Lucide React**
- **Fonts:** Bebas Neue (display) + DM Sans (body)

## Pages
| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, equipment categories, about snippet, hire CTA |
| About | `/about` | Company story, values, inventory overview |
| Products & Hire | `/products` | Full catalogue with hire request modal |
| Contact | `/contact` | Contact form + office details |

## Setup
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Key Features

### Product Catalogue
All products are defined in `/lib/products.ts` — edit this file to add, remove, or update equipment. No backend needed for the catalogue itself.

### Hire Request Modal
- Opens when visitor clicks "Request Hire" on any product
- Captures: name, company, email, phone, duration, quantity, purpose, notes
- **Connect to Laravel:** In `app/products/page.tsx`, replace the mock `handleSubmit`:
```ts
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hire-requests`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ product: selectedProduct.id, ...form }),
});
```

### Contact Form
In `app/contact/page.tsx`, replace the mock submit:
```ts
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Customisation
- **Products:** Edit `/lib/products.ts`
- **Colors:** `tailwind.config.ts` — steel (dark grays) + amber (accent)
- **Contact details:** `components/layout/Footer.tsx` and `app/contact/page.tsx`
- **Logo:** Replace the `Anchor` icon in `Navbar.tsx` with an `<Image>` tag

## Deployment
- Frontend → **Vercel** (`vercel deploy`)
- Set `NEXT_PUBLIC_API_URL` in Vercel environment variables
