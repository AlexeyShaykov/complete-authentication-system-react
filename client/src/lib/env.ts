/**
 * Parses and validates environment variables using a Zod schema.
 * 
 * This module defines a schema for environment variables expected in the application
 * and ensures that they conform to the specified types and constraints. Specifically,
 * it validates that `VITE_API_BASE_URL` is a valid URL string.
 * 
 * @module env
 * 
 * @typedef {object} envSchema
 * @property {string} VITE_API_BASE_URL - The base URL for the API, must be a valid URL.
 * 
 * @constant {object} env
 * The parsed and validated environment variables. If the validation fails, 
 * an error will be thrown at runtime.
 * 
 * @throws {ZodError} If the environment variables do not match the schema.
 */
import { z } from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url(),
});

export const env = envSchema.parse(import.meta.env);

