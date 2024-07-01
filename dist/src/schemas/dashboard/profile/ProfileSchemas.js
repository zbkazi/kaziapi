"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSchema = void 0;
const zod_1 = require("zod");
exports.ProfileSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    confirmPassword: zod_1.z.string(),
    role: zod_1.z.enum(["admin", "user", "editor"]).default("user"),
    status: zod_1.z.enum(["active", "inactive"]).default("active"),
    bio: zod_1.z.string().min(10).max(200).optional(),
    avatar: zod_1.z
        .string()
        .url("Invalid URL")
        .optional()
        .default("https://i.pravatar.cc/300"),
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
//# sourceMappingURL=ProfileSchemas.js.map