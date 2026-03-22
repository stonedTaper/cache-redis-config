// types.ts

export interface CacheConfig {
  host: string;
  port: number;
  password: string | null;
  db: number;
  options?: {
    readonly timeout?: number;
    readonly retry_strategy?: {
      readonly initialDelay: number;
      readonly maxDelay: number;
      readonly infinite: boolean;
      readonly retries: number;
    };
  };
}

export interface RedisConfig {
  host: string;
  port: number;
  password: string | null;
  db: number;
  options?: {
    readonly timeout?: number;
    readonly retry_strategy?: {
      readonly initialDelay: number;
      readonly maxDelay: number;
      readonly infinite: boolean;
      readonly retries: number;
    };
  };
}

export type CacheRedisConfig = CacheConfig & RedisConfig;