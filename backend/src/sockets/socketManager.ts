import { Server as SocketIOServer } from 'socket.io';
import { logger } from '../config/logger';

export const initSocketIO = (io: SocketIOServer) => {
  io.on('connection', (socket) => {
    logger.info(`Socket connected: ${socket.id}`);

    socket.on('joinProjectRoom', (projectId: string) => {
      socket.join(`project_${projectId}`);
      logger.info(`Socket ${socket.id} joined room project_${projectId}`);
    });

    socket.on('joinUserRoom', (userId: string) => {
      socket.join(`user_${userId}`);
      logger.info(`Socket ${socket.id} joined user room user_${userId}`);
    });

    socket.on('ping', () => {
      socket.emit('pong');
    });

    socket.on('disconnect', () => {
      logger.info(`Socket disconnected: ${socket.id}`);
    });
  });
};
