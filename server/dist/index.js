"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const supertokens_node_1 = __importDefault(require("supertokens-node"));
const session_1 = __importDefault(require("supertokens-node/recipe/session"));
const emailpassword_1 = __importDefault(require("supertokens-node/recipe/emailpassword"));
const express_2 = require("supertokens-node/framework/express");
const body_parser_1 = __importDefault(require("body-parser"));
const env_1 = require("./lib/env");
supertokens_node_1.default.init({
    framework: "express",
    supertokens: {
        connectionURI: env_1.env.SUPERTOKENS_CONNECTION_URI,
        apiKey: env_1.env.SUPERTOKENS_API_KEY,
    },
    appInfo: {
        appName: "complete-authentication-system-react",
        apiDomain: env_1.env.API_BASE_URL,
        websiteDomain: env_1.env.APP_BASE_URL,
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [session_1.default.init(), emailpassword_1.default.init()],
});
const app = (0, express_1.default)();
const PORT = 8000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: env_1.env.APP_BASE_URL,
    allowedHeaders: ["content-type", ...supertokens_node_1.default.getAllCORSHeaders()],
    credentials: true,
}));
app.use((0, express_2.middleware)());
app.get("/", (req, res) => {
    res.json({ message: "Server is running with SuperTokens!" });
});
app.use((0, express_2.errorHandler)());
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 SuperTokens APIs available at http://localhost:${PORT}/auth`);
});
