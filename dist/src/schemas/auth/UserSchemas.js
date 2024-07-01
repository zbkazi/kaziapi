"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginHistorySchema = exports.LoginSchema = exports.RegistrationHistorySchema = exports.RegistrationSchema = void 0;
const zod_1 = require("zod");
exports.RegistrationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    role: zod_1.z.string().default("user"),
});
exports.RegistrationHistorySchema = zod_1.z.object({
    email: zod_1.z.string(),
    ipAddress: zod_1.z.string(),
    userAgent: zod_1.z.string(),
    timestamp: zod_1.z.date(),
});
exports.LoginSchema = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.LoginHistorySchema = zod_1.z.object({
    email: zod_1.z.string(),
    action: zod_1.z.string(),
    timestamp: zod_1.z.date(),
});
//# sourceMappingURL=UserSchemas.js.map