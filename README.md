# 🖊️ First Point Stationery & General Supplies

> Your one-stop point for quality stationery, printing, and general supplies in **Limbe, Blantyre, Malawi**.

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit%20Now-fca311?style=for-the-badge&logo=github)](https://yourusername.github.io/first-point-stationery/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat%20Us-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/265999001027)
[![License](https://img.shields.io/badge/License-MIT-14213d?style=for-the-badge)](LICENSE)

---

## 📖 About

**First Point Stationery & General Supplies** is a locally owned business based at **Pacific Tower, Limbe Market, Blantyre, Malawi**. This website showcases our product range, document services, and contact details — built as a fast, responsive, and modern single-page site.

### What We Offer

| Category | Details |
|----------|---------|
| 🛍️ **Stationery** | Paper, pens, pencils, calculators, files, folders, toner, office essentials |
| 🖨️ **Document Services** | Printing, photocopying, scanning, binding, laminating, typing & formatting |
| 💻 **Computer Lessons** | Practical computer skills training for students & professionals |

---

## 🎨 Brand Identity

The site uses a **navy + gold** color system for a professional, trustworthy look.

| Color | Hex | Usage |
|-------|-----|-------|
| 🔵 Navy (Ink) | `#14213d` | Primary text, buttons, headers |
| 🟡 Gold (Accent) | `#fca311` | Highlights, underlines, icons |
| ⚪ Paper | `#f7f8fb` | Section backgrounds |
| 🟢 WhatsApp Green | `#25d366` | Floating CTA button |

### Logo

The brand logo (`images/logo.svg`) features a **pen and ruler** crossed at a central "point" — a visual pun on the business name *First Point*. It scales perfectly from favicon to hero banner.

```
images/
├── logo.svg          ← Primary logo (scalable)
└── logo.png          ← (optional) Fallback raster version
```

---

## 🚀 Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — Mobile menu, scroll effects, dynamic year
- **Font Awesome 6** — Iconography via CDN
- **GitHub Pages** — Hosting (static, free, fast)

> No frameworks, no build step — just clean, hand-written code. ✅

---

## 📂 Project Structure

```
first-point-stationery/
├── index.html          # Main page (hero, products, services, contact)
├── styles.css          # All styling (responsive, mobile-first)
├── script.js           # Mobile menu, scroll effects, footer year
├── README.md           # This file
└── images/
    ├── logo.svg        # Brand logo (vector)
    └── logo.png        # Optional raster fallback
```

---

## ⚙️ Local Setup

Want to run this locally? It's just static files — no dependencies.

### Option A — Just open it
1. Download or clone the repo
2. Double-click `index.html` in your file explorer
3. Done ✅

### Option B — Run a local server (recommended)

```bash
# Clone the repository
git clone https://github.com/yourusername/first-point-stationery.git
cd first-point-stationery

# Using Python (built into most systems)
python3 -m http.server 8000

# OR using Node.js
npx serve
```

Then open: **http://localhost:8000**

---

## 🌐 Deploying to GitHub Pages

This site is deployed via **GitHub Pages** — free hosting directly from the repo.

### First-time deployment

1. Push all files to `main` branch
2. Go to **Settings → Pages**
3. Under *"Build and deployment"*:
   - **Source:** Deploy from a branch
   - **Branch:** `main` · `/ (root)`
4. Click **Save**
5. Wait ~2 minutes → your site is live at:
   ```
   https://yourusername.github.io/first-point-stationery/
   ```

### Updating the site

Just push changes to `main` — GitHub Pages redeploys automatically:

```bash
git add .
git commit -m "Update products section"
git push origin main
```

> ⏱️ Changes take **1–3 minutes** to appear. Hard-refresh (**Ctrl + Shift + R**) to bypass cache.

---

## 🖼️ Replacing the Logo

To swap the logo with a new design:

1. **Upload** your new file to `images/` (e.g. `logo.svg` or `logo.png`)
2. **Edit** `index.html` and update the reference:
   ```html
   <img src="images/logo.svg" alt="First Point Stationery logo">
   ```
3. **Commit** the changes
4. **Wait** for GitHub Pages to redeploy
5. **Hard refresh** your live site

### Add a Favicon

Inside `<head>` of `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="images/logo.svg">
<link rel="apple-touch-icon" href="images/logo.svg">
```

---

## 📱 Features

- ✅ **Fully responsive** — Mobile, tablet, desktop
- ✅ **Accessible** — ARIA labels, keyboard navigation, focus states
- ✅ **Fast loading** — No frameworks, minified CSS/JS
- ✅ **SEO-friendly** — Meta description, semantic HTML5
- ✅ **Reduced motion support** — Respects `prefers-reduced-motion`
- ✅ **Mobile menu** — Slide-out panel with backdrop
- ✅ **Floating WhatsApp CTA** — Always-visible contact button
- ✅ **Smooth scroll** — Anchor links glide to sections
- ✅ **Reveal-on-scroll** — Subtle fade-in animations

---

## 📞 Contact

| Channel | Details |
|---------|---------|
| 📍 **Location** | Pacific Tower, Limbe Market, Blantyre, Malawi · Ground Floor, Shop G12 |
| 📞 **Phone 1** | [+265 999 001 027](tel:+265999001027) |
| 📞 **Phone 2** | [+265 885 457 976](tel:+265885457976) |
| 💬 **WhatsApp** | [+265 999 001 027](https://wa.me/265999001027) |
| 📧 **Email** | [firstpointstationery@gmail.com](mailto:firstpointstationery@gmail.com) |
| 📧 **Alt Email** | [josiyachilolezo@gmail.com](mailto:josiyachilolezo@gmail.com) |
| 🕐 **Hours** | Monday – Saturday · 7:30 AM – 5:30 PM |

---

## 🤝 Contributing

This is a business site, but suggestions are welcome:

1. Fork the repo
2. Create a branch: `git checkout -b feature/improvement`
3. Commit changes: `git commit -m "Add feature"`
4. Push: `git push origin feature/improvement`
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

The **logo, brand name, and business information** are the property of *First Point Stationery & General Supplies* and may not be reused without permission.

---

## 🙏 Credits

- **Icons:** [Font Awesome 6](https://fontawesome.com/) (free tier)
- **Fonts:** System font stack (`Segoe UI`, `Helvetica Neue`, `Arial`)
- **Hosting:** [GitHub Pages](https://pages.github.com/)
- **Built with:** ❤️ for Limbe, Malawi

---

<div align="center">

**First Point Stationery & General Supplies**
*Your one-stop point for stationery & printing.*

⭐ **Star this repo if you find it useful!** ⭐

</div>
