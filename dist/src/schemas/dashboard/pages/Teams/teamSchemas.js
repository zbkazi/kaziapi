"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamSchemas = void 0;
const zod_1 = require("zod");
exports.teamSchemas = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    description: zod_1.z.string().min(1, 'Description is required'),
    image: zod_1.z.string().url('Image must be a valid URL'),
    link: zod_1.z.string().url('Link must be a valid URL'),
    status: zod_1.z.string().min(1, 'Status is required'),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});
//# sourceMappingURL=teamSchemas.js.map