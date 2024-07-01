"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registration = void 0;
var registration_1 = require("./auth/registration");
Object.defineProperty(exports, "registration", { enumerable: true, get: function () { return __importDefault(registration_1).default; } });
var login_1 = require("./auth/login");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return __importDefault(login_1).default; } });
//# sourceMappingURL=index.js.map