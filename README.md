# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

While this project uses React, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Deploy Your Own

Deploy your own Vite project with Vercel.

# TZKSolution Portfolio

Professional enterprise portfolio showcasing digital marketing, web development, ERP/CRM/CMS solutions, and Odoo/SAP integration services.

## 🚀 Live Demo
- **Production**: [https://usmanpro-lykzlf830-tzkusmans-projects.vercel.app](https://usmanpro-lykzlf830-tzkusmans-projects.vercel.app)
- **Local Development**: `npm run dev` → http://localhost:5173

## 📧 Contact Form Setup

The contact form sends emails via a serverless API using Nodemailer. To enable email functionality:

### Environment Variables (Required for Production)

Set these in your Vercel dashboard under **Settings → Environment Variables**:

```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
TO_EMAIL=tzkusman786@gmail.com
```

### Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings → Security
   - Enable 2-Step Verification
   - Generate an App Password for "Mail"
   - Use this app password (not your regular password) for `MAIL_PASS`

### Vercel Deployment

1. **Set Environment Variables**:
   ```bash
   vercel env add MAIL_HOST
   vercel env add MAIL_PORT  
   vercel env add MAIL_USER
   vercel env add MAIL_PASS
   vercel env add TO_EMAIL
   ```

2. **Deploy**:
   ```bash
   git add .
   git commit -m "Add contact form functionality"
   git push origin main
   # Auto-deploys via Vercel GitHub integration
   ```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
  ├── App.tsx          # Main React component
  ├── App.css          # Styling
  └── main.tsx         # Entry point

api/
  └── contact.js       # Serverless email API

public/
  └── ...              # Static assets
```

## 🎯 Features

- ✅ Responsive design
- ✅ Professional branding
- ✅ Service showcase
- ✅ Portfolio gallery
- ✅ Working contact form with email notifications
- ✅ WhatsApp integration
- ✅ SEO optimized

## 📞 Contact Information

- **Email**: tzkusman786@gmail.com
- **WhatsApp**: +92 336 2793950
- **Website**: [TZKSolution Portfolio](https://usmanpro-lykzlf830-tzkusmans-projects.vercel.app)

---

**TZKSolution** - Enterprise Technology Partners

_Live Example: https://vite-react-example.vercel.app_

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```
