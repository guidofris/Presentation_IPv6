# IPv6 Workshop Presentation

An interactive slideshow focused on IPv6 configuration, operations, and validation.

Built with React, TypeScript, and Tailwind CSS for GitHub Pages deployment.

## Slide Index

| Section               | Topics                                                        |
| --------------------- | ------------------------------------------------------------- |
| Intro                 | Scope, goals, and operational outcomes                        |
| Adressering           | Prefix planning, static IPv6, SLAAC vs DHCPv6                |
| Routing en Services   | Route validation, DNS AAAA/PTR, and IPv6 service tests       |
| Security en Afsluiting| nftables baseline, verification checklist, and next steps    |

## Tech Stack

- **React 18** + **TypeScript** — UI and type safety
- **Vite** — Dev server and build tool
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icons

## Getting Started

### Prerequisites

- Node.js 18+

### Installation & Development

```bash
git clone https://github.com/JanDeDobbeleer/workshop_ai_native.git
cd workshop_ai_native
npm install
npm run dev
```

Open `http://localhost:5173` in your browser. The app is password-protected; the default local dev password is `LinuxIsCool`.

### Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build
```

## Authentication

The slideshow uses a lightweight password gate (SHA-256 hashed, client-side only — not a security mechanism, just casual access control).

Set the password by providing a SHA-256 hash via environment variable:

```bash
VITE_WORKSHOP_PASSWORD_HASH=<your-hash> npm run build
```

To generate a hash in the browser console:

```js
crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-password'))
  .then(buf => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join(''))
  .then(console.log)
```

## Navigation

| Action          | Control                          |
| --------------- | -------------------------------- |
| Next slide      | → arrow key or Next button       |
| Previous slide  | ← arrow key or Previous button   |
| Jump to section | Hamburger menu or dot indicators |
| Toggle nav side | Panel toggle button              |
