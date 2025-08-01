"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const v4_1 = require("zod/v4");
require("dotenv/config");
const envSchema = v4_1.z.object({
    SUPERTOKENS_CONNECTION_URI: v4_1.z.string(),
    SUPERTOKENS_API_KEY: v4_1.z.string(),
    API_BASE_URL: v4_1.z.string(),
    APP_BASE_URL: v4_1.z.string(),
});
exports.env = envSchema.parse(process.env);
