import express, { Request, Response } from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { env } from './config/env';
import { connectDB } from './config/database';
import { initRedis } from './config/redis';
import { logger, morganMiddleware } from './config/logger';
import { errorHandler } from './middlewares/errorHandler';
import { initSocketIO } from './sockets/socketManager';
import apiRouter from './routes/api/v1';

const app = express();
const server = http.createServer(app);

// Socket.io initialization
export const io = new SocketIOServer(server, {
  cors: {
    origin: env.CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  }
});

// Middleware Stack
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: [env.CLIENT_URL, 'http://localhost:3000'], credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(morganMiddleware);

// Health Check Endpoints
app.get(['/healthz', '/api/v1/health'], (req: Request, res: Response) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    service: 'Prime Developers Backend API Engine',
    environment: env.NODE_ENV
  });
});

// Main API Router
app.use('/api/v1', apiRouter);

// Global Error Handler
app.use(errorHandler);

// Bootstrap Persistent Server
const startServer = async () => {
  await connectDB();
  initRedis();
  initSocketIO(io);

  const PORT = Number(env.PORT) || 5000;
  server.listen(PORT, () => {
    logger.info(`🚀 Prime Developers Persistent Express Server running on port ${PORT} [${env.NODE_ENV}]`);
  });
};

startServer();

// Graceful Shutdown Handling
const shutdownGracefully = (signal: string) => {
  logger.info(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    logger.info('Http server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdownGracefully('SIGTERM'));
process.on('SIGINT', () => shutdownGracefully('SIGINT'));
