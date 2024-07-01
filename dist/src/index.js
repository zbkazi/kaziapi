"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
require("dotenv/config");
require("routes/routes");
db_1.default;
exports.default = app_1.default;
//# sourceMappingURL=index.js.map