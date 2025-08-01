import { z } from "zod/v4";
import dotenv from "dotenv";

// Определяем путь к нужному .env файлу
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

// Загружаем переменные окружения
dotenv.config({ path: envFile });

// Описываем схему переменных
const envSchema = z.object({
  SUPERTOKENS_CONNECTION_URI: z.string().url(),
  SUPERTOKENS_API_KEY: z.string(),
  API_BASE_URL: z.string().url(),
  APP_BASE_URL: z.string().url(),
});

// Валидируем и экспортируем
export const env = envSchema.parse(process.env);

console.log(`✅ Loaded env from ${envFile}`);
console.log(`🌍 NODE_ENV = ${process.env.NODE_ENV}`);