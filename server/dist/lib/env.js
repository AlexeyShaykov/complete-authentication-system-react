"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const v4_1 = require("zod/v4");
const dotenv_1 = __importDefault(require("dotenv"));
// Определяем путь к нужному .env файлу
const envFile = process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
// Загружаем переменные окружения
dotenv_1.default.config({ path: envFile });
// Описываем схему переменных
const envSchema = v4_1.z.object({
    SUPERTOKENS_CONNECTION_URI: v4_1.z.string().url(),
    SUPERTOKENS_API_KEY: v4_1.z.string(),
    API_BASE_URL: v4_1.z.string().url(),
    APP_BASE_URL: v4_1.z.string().url(),
});
// Валидируем и экспортируем
exports.env = envSchema.parse(process.env);
console.log(`✅ Loaded env from ${envFile}`);
console.log(`🌍 NODE_ENV = ${process.env.NODE_ENV}`);
