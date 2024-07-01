"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserSchemas_1 = require("@/schemas/auth/UserSchemas");
const User_1 = __importDefault(require("@/models/auth/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const RegistrationHistory_1 = __importDefault(require("@/models/auth/RegistrationHistory"));
const Registration = async (req, res, next) => {
    try {
        // validate request body
        const parsedBody = UserSchemas_1.RegistrationSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid request body",
                errors: parsedBody.error.errors,
            });
        }
        // check if user already exists
        const existingUser = await User_1.default.findOne({ email: parsedBody.data.email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }
        // hash password
        const hashedPassword = await bcryptjs_1.default.hash(parsedBody.data.password, 10);
        // create Registration user history
        const userAgent = req.headers["user-agent"] || "unknown";
        const ipAddress = req.headers["x-forwarded-for"] ||
            req.socket.remoteAddress;
        await RegistrationHistory_1.default.create({
            email: parsedBody.data.email,
            action: "registration",
            userAgent: userAgent,
            ipAddress: ipAddress,
        });
        // send email
        console.log(userAgent, ipAddress);
        // create new user
        const user = await User_1.default.create({
            ...parsedBody.data,
            password: hashedPassword,
        });
        // Return success response with token
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.default = Registration;
//# sourceMappingURL=registration.js.map