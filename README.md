# YOUMIKA DIGITAL — PREMIUM DIGITAL AGENCY WEBSITE

> "We Build Digital Experiences That Grow Businesses."

Official Domain: [https://digital.youmika.site](https://digital.youmika.site)  
Target Markets: **India & USA**  
Founder & Developer: **Abhishek**

---

## 🚀 Live Preview & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run preview
```

---

## 📁 Architecture Overview

```
c:\Users\megwa\digtal agency\
├── index.html                     # SEO Meta, Open Graph tags, Inter font, Favicon
├── robots.txt                     # Crawler directives & sitemap reference
├── public/
│   ├── favicon.svg                # Geometric 'Y' agency mark in Electric Blue (#2478D4)
│   ├── og-image.svg               # Open Graph 1200x630 banner for social sharing
│   ├── robots.txt                 # Search engine directives
│   └── sitemap.xml                # Canonical XML sitemap with all routes
├── vercel.json                    # Single-page application (SPA) rewrites & security headers
├── package.json                   # React 19, Vite, Tailwind CSS v4, Lucide React, Framer Motion
├── vite.config.js                 # Tailwind CSS v4 Vite integration
└── src/
    ├── main.jsx                   # React 19 root
    ├── App.jsx                    # Routing configuration with BrowserRouter
    ├── index.css                  # Custom styling, glow effects, glassmorphism utilities
    ├── components/
    │   ├── Navbar.jsx             # Sticky glassmorphism header, mobile drawer, "Get a Quote" CTA
    │   ├── Footer.jsx             # Complete brand footer, legal transparency disclosures, quick links
    │   ├── SEO.jsx                # Page-specific dynamic <title> and meta tags manager
    │   ├── ProjectModal.jsx       # Interactive live prototype browser window for concept projects
    │   ├── QuoteModal.jsx         # Quick quotation pop-up with validation
    │   └── WhatsAppButton.jsx     # Floating WhatsApp quick chat trigger
    ├── pages/
    │   ├── Home.jsx               # Hero with dynamic browser mockup, trust bar, services, concept work
    │   ├── Services.jsx           # 7 full-fledged services with deliverables, ROI benefits & CTAs
    │   ├── Portfolio.jsx          # 3 high-converting demo projects (Dental Clinic, Gym, Restaurant)
    │   ├── About.jsx              # Mission, approach, 4-step agile process, Founder (Abhishek)
    │   ├── Pricing.jsx            # ₹4,999 / ₹9,999 / ₹14,999 packages + USA custom quote section (USD)
    │   └── Contact.jsx            # Multi-field inquiry form, budget selector, WhatsApp direct
    └── data/
        ├── servicesData.js        # Detailed data for all 7 services
        ├── projectsData.js        # Dental, Gym, Restaurant project specs & interactive features
        └── pricingData.js         # Package deliverables, revisions & extra features breakdown
```

---

## 🎨 Brand Design System

- **Primary Background**: Deep Navy (`#101827`)
- **Secondary Background**: Slate (`#0B0F19` / `#131D31`) & Clean White accents
- **Accent Color**: Electric Blue (`#2478D4`)
- **Highlight Color**: Sky Blue (`#56B4FF`)
- **Text**: Dark Navy (`#0F172A`) & Light Slate (`#F1F5F9`, `#94A3B8`)
- **Typography**: Space Grotesk (Display Headings) + Plus Jakarta Sans (Body)

---

## 🌐 Deployment to Vercel & Custom Domain Setup

### Method 1: Deploy with Vercel CLI (Recommended)
1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. In the project root, run:
   ```bash
   vercel
   ```
3. Follow the terminal prompts (defaults are pre-configured for Vite).
4. For production release:
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via GitHub + Vercel Dashboard
1. Push this repository to your GitHub account (`git init`, `git add .`, `git commit -m "Initial commit"`, `git push`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Vite.
4. Click **"Deploy"**.

### Configuring Your Custom Domain (`digital.youmika.site`)
1. In your Vercel Project Dashboard, navigate to **Settings** > **Domains**.
2. Enter `digital.youmika.site` and click **Add**.
3. In your DNS provider (where `youmika.site` is managed, e.g. Cloudflare, Namecheap, GoDaddy):
   - **Type**: `CNAME`
   - **Name / Host**: `digital`
   - **Value / Target**: `cname.vercel-dns.com`
   - **TTL**: `Automatic` (or 300)
4. Once DNS propagates (usually 2 to 15 minutes), Vercel will automatically provision a free SSL certificate.

---

## 📬 Connecting the Contact Form to Email Backends

The contact form currently features full client-side validation and interactive submission feedback. To connect it to your preferred email inbox:

### Option A: Web3Forms (No Backend Needed - Free)
1. Get a free access key at [web3forms.com](https://web3forms.com).
2. In `src/pages/Contact.jsx`, send a `POST` request to `https://api.web3forms.com/submit` with your access key.

### Option B: Formspree
1. Create a form at [formspree.io](https://formspree.io).
2. Set the form `action="https://formspree.io/f/{your_id}"` and `method="POST"`.

### Option C: Resend / Node Server
1. Create a serverless API route in `/api/contact.js` using `@resend/node` to deliver inquiries directly to `contact@youmika.site`.

---

## ⚖️ Ethical Disclosure Notice
As mandated by brand integrity standards:
- All demonstration portfolio items (**Apex Dental Care**, **IronPulse Fitness**, and **Saffron & Sage Bistro**) are clearly documented and labeled as **Concept Demonstration Projects**.
- Founder profile accurately represents **Abhishek — Founder & Developer**.
- No fabricated client testimonials, fake metrics, or fake discounts are displayed.
