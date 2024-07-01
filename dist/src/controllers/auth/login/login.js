"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserSchemas_1 = require("@/schemas/auth/UserSchemas");
const User_1 = __importDefault(require("@/models/auth/User"));
const LoginHistory_1 = __importDefault(require("@/models/auth/LoginHistory"));
const login = async (req, res, next) => {
    try {
        // validate request body
        const parsedBody = UserSchemas_1.LoginSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid request body",
                errors: parsedBody.error.errors,
            });
        }
        // check if user exists
        const user = await User_1.default.findOne({ email: parsedBody.data.email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }
        // check if password is correct
        const isPasswordCorrect = await bcryptjs_1.default.compare(parsedBody.data.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }
        // create Login user history
        const userAgent = req.headers["user-agent"] || "unknown" || "unknown";
        const ipAddress = req.ip || "unknown";
        const loginHistory = await LoginHistory_1.default.create({
            email: user.email,
            action: "login",
            userAgent,
            ipAddress,
        });
        // create JWT token
        const token = jsonwebtoken_1.default.sign({ email: user.email, userId: user._id }, process.env.JWT_SECRET || "your_secret_key");
        // return token
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            loginHistory: loginHistory,
        });
        //
    }
    catch (error) {
        next(error);
    }
};
exports.default = login;
//# sourceMappingURL=login.js.map