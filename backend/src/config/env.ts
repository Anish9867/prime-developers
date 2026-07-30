import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const env = {
  PORT: process.env.PORT || '5000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/prime_developers',
  REDIS_URL: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  JWT_SECRET: process.env.JWT_SECRET || 'prime_developers_jwt_secret_2026',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'prime_developers_refresh_secret_2026',
  SMTP_HOST: process.env.SMTP_HOST || 'smtp.gmail.com',
  SMTP_PORT: Number(process.env.SMTP_PORT) || 587,
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASSWORD: process.env.SMTP_PASSWORD || '',
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || 'demo',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '1234567890',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || 'secret',
  GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY || '',
  RAZORPAY_KEY: process.env.RAZORPAY_KEY || '',
  RAZORPAY_SECRET: process.env.RAZORPAY_SECRET || '',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
};
