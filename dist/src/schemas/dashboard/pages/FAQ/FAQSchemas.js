"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQSchemas = void 0;
const zod_1 = require("zod");
exports.FAQSchemas = zod_1.z.object({
    title: zod_1.z.string().min(3).max(20).optional().default("Bangladesh "),
    description: zod_1.z.string().min(10).max(80).optional(),
    question: zod_1.z.string().min(10).max(80),
    answer: zod_1.z.string().min(10).max(300),
});
//# sourceMappingURL=FAQSchemas.js.map