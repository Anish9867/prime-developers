# Production Deployment Guide - Prime Developers

This guide provides step-by-step instructions for deploying Prime Developers to production.

## Architecture Overview
- **Frontend**: Vercel (Next.js 15 App Router)
- **Backend**: Railway (Primary) or Render (Secondary)
- **Database**: MongoDB Atlas
- **Cache & Socket Adapter**: Redis Cloud
- **Media Assets**: Cloudinary

---

## 1. Database Setup (MongoDB Atlas)
1. Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a production M10+ cluster.
3. Network Access: Add IP access list (`0.0.0.0/0` for cloud platform connectivity).
4. Create a Database User with readWrite permissions.
5. Copy the Connection String URI and format as:
   `mongodb+srv://<username>:<password>@cluster.mongodb.net/prime_developers?retryWrites=true&w=majority`

---

## 2. Backend Deployment (Railway)
1. Connect your GitHub repository to [Railway](https://railway.app).
2. Create a new service from the `backend/` directory.
3. Configure the build and start commands:
   - Build: `npm run build`
   - Start: `npm run start`
4. Set Environment Variables in Railway settings:
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: `<Your MongoDB Atlas URI>`
   - `REDIS_URL`: `<Your Redis Cloud URI>`
   - `JWT_SECRET`: `<Secure random secret string>`
   - `CLIENT_URL`: `https://your-vercel-domain.vercel.app`
5. Railway will deploy the application and provide a domain (e.g., `https://backend-production.up.railway.app`).

---

## 3. Frontend Deployment (Vercel)
1. Import your GitHub repository to [Vercel](https://vercel.com).
2. Set Root Directory to `frontend`.
3. Vercel automatically detects Next.js framework configuration.
4. Set Environment Variables in Vercel project settings:
   - `NEXT_PUBLIC_API_URL`: `https://backend-production.up.railway.app`
   - `NEXT_PUBLIC_SITE_URL`: `https://your-vercel-domain.vercel.app`
   - `NEXT_PUBLIC_SOCKET_URL`: `https://backend-production.up.railway.app`
5. Click **Deploy**. Vercel will build and publish your application with global CDN edge caching.
