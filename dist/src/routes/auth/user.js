"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("@/controllers/auth");
// Define route handlers
const router = (0, express_1.Router)();
// Define routes
router.get("/user", auth_1.getAllUsers);
router.get("/user/:id", auth_1.getUser);
router.delete("/user/:id", auth_1.deleteUserById);
router.put("/user/:id", auth_1.updateUserById);
exports.default = router;
//# sourceMappingURL=user.js.map