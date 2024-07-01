"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res
            .status(401)
            .json({ message: "Authorization failed: No token provided" });
    }
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "your_secret_key");
        const { userId, email } = decodedToken;
        req["userData"] = { email, userId }; // Add userId and email to request object
        next();
    }
    catch (error) {
        console.error(error);
        return res
            .status(401)
            .json({ message: "Authorization failed: Invalid token" });
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map