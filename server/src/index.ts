import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import SuperTokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import {
  errorHandler,
  SessionRequest,
  middleware,
} from "supertokens-node/framework/express";

import bodyParser from "body-parser";
import z from "zod";

import { env } from "./lib/env"

SuperTokens.init({
  framework: "express",
  supertokens: {
    connectionURI: env.SUPERTOKENS_CONNECTION_URI,
    apiKey: env.SUPERTOKENS_API_KEY,
  },
  appInfo: {
    appName: "complete-authentication-system-react",
    apiDomain: env.API_BASE_URL,
    websiteDomain: env.APP_BASE_URL,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [Session.init(), EmailPassword.init()],
});

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: env.APP_BASE_URL,
    allowedHeaders: ["content-type", ...SuperTokens.getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(middleware());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running with SuperTokens!" });
});


app.use(errorHandler());

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 SuperTokens APIs available at http://localhost:${PORT}/auth`);
});