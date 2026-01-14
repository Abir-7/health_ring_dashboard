// src/config/env.ts

const getEnv = (key: string): string => {
  const value = import.meta.env[key];

  if (!value) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }

  return value;
};

export const ENV = {
  MODE: import.meta.env.VITE_NODE_ENV as "development" | "production",
  API_URL: getEnv("VITE_API_URL"),
} as const;
