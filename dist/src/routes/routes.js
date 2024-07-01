"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@/app"));
const index_1 = require("./index");
// all the routes are defined here
const allRoutes = [
    index_1.registration,
    index_1.login,
];
app_1.default.use("/auth", allRoutes);
//# sourceMappingURL=routes.js.map