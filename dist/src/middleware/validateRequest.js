"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const zod_1 = require("zod");
// Middleware to validate request params using Zod schema
const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.params);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return res.status(400).json({ errors: error.errors });
            }
            next(error);
        }
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.js.map