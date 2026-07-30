import Redis from 'ioredis';
import { env } from './env';
import { logger } from './logger';

export let redisClient: Redis | null = null;

export const initRedis = (): Redis => {
  try {
    redisClient = new Redis(env.REDIS_URL, {
      maxRetriesPerRequest: 3,
      retryStrategy(times) {
        if (times > 3) return null;
        return Math.min(times * 100, 3000);
      },
      lazyConnect: true
    });

    redisClient.on('connect', () => {
      logger.info('Redis Cloud connected successfully');
    });

    redisClient.on('error', (err) => {
      logger.warn(`Redis connection warning: ${err.message}`);
    });

    redisClient.connect().catch(() => {
      logger.warn('Redis unavailable, proceeding with memory cache fallback');
    });

    return redisClient;
  } catch (error: any) {
    logger.warn(`Redis init error: ${error.message}`);
    return new Redis({ lazyConnect: true });
  }
};
