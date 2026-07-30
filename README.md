# Prime Developers - Enterprise PropTech SaaS Platform

![Prime Developers](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80)

Prime Developers is a production-ready enterprise PropTech SaaS platform engineered with modern 2D design principles, ultra-luxury aesthetics, and scalable decoupled architecture.

## 🚀 Key Features

- **Public Luxury Developer Portal**: Black & Gold luxury design theme, responsive glassmorphism UI, Framer Motion animations, full project catalog, lead capture, and WhatsApp/Call CTAs.
- **Interactive 2D SVG Master Plan**: Pure SVG/Canvas interactive plot viewer with real-time pan, zoom, plot status indicators (Available, Reserved, Booked, Sold), tooltips, and token booking modals.
- **Enterprise Decoupled Architecture**:
  - **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, TanStack React Query, Redux Toolkit.
  - **Backend**: Persistent Node.js + Express + TypeScript server targeted for Railway or Render.
- **Production MongoDB Atlas Schemas**: Complete production Mongoose models covering Users, Roles, Permissions, Projects, Plots, Bookings, Payments, Leads, Notifications, Audit Logs, and Settings with automatic indexing and soft deletes.
- **Real-Time Communication**: Socket.io server for real-time plot availability broadcasts, lead notifications, and CRM activities.
- **Multi-Tenant Portals**:
  - Customer Portal (`/portal/*`)
  - Agent Partner Portal (`/agent/*`)
  - Super Admin Dashboard (`/admin/*`)

---

## 🛠 Project Structure

```
prime-developers/
 ├── shared/            # Shared TypeScript interfaces, enums, & data types
 ├── backend/           # Node.js + Express + TypeScript API Engine
 │    ├── src/
 │    │    ├── config/       # Database, Redis, Cloudinary, Logger setup
 │    │    ├── controllers/  # API Controllers
 │    │    ├── models/       # Production Mongoose Schemas & Indexes
 │    │    ├── middlewares/  # Auth (JWT/HttpOnly), RBAC, Error Handler
 │    │    ├── routes/       # API v1 routes (/api/v1/*)
 │    │    ├── sockets/      # Socket.io real-time engine
 │    │    └── server.ts     # Persistent Express server
 │    ├── Dockerfile
 │    ├── railway.json
 │    └── render.yaml
 └── frontend/          # Next.js 15 App Router Frontend
      ├── src/
      │    ├── app/          # App router pages (Public, Portal, Agent, Admin)
      │    ├── components/   # Luxury UI & Interactive 2D Master Plan
      │    └── middleware.ts # Edge RBAC middleware
      ├── vercel.json
      └── next.config.ts
```

---

## 💻 Quick Start & Commands

### 1. Backend Setup
```bash
cd backend
npm install
npm run seed     # Populate database with initial luxury projects & 2D plots
npm run dev      # Start dev server on http://localhost:5000
npm run build    # Compile production TypeScript
npm start        # Launch production Express server
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Build Next.js production bundle
npm start        # Launch production Next.js server
```
