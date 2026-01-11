// types.ts
export type TConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  timeout: number;
};

export type TConnectionOptions = {
  host: string;
  port: number;
  username: string;
  password: string;
};

export type TRedisOptions = {
  host: string;
  port: number;
  password: string;
};

export type TOptions = {
  redis: TRedisOptions;
  database: TConfig;
};

export type TCacheConfig = {
  connection: TConnectionOptions;
  redis: TRedisOptions;
  database: TConfig;
};