"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.getAllUsers = exports.getUser = exports.login = exports.registering = void 0;
var registration_1 = require("./registration/registration");
Object.defineProperty(exports, "registering", { enumerable: true, get: function () { return __importDefault(registration_1).default; } });
var login_1 = require("./login/login");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return __importDefault(login_1).default; } });
var getById_1 = require("./user/getById");
Object.defineProperty(exports, "getUser", { enumerable: true, get: function () { return __importDefault(getById_1).default; } });
var getAll_1 = require("./user/getAll");
Object.defineProperty(exports, "getAllUsers", { enumerable: true, get: function () { return __importDefault(getAll_1).default; } });
var update_1 = require("./user/update");
Object.defineProperty(exports, "updateUserById", { enumerable: true, get: function () { return __importDefault(update_1).default; } });
var delete_1 = require("./user/delete");
Object.defineProperty(exports, "deleteUserById", { enumerable: true, get: function () { return __importDefault(delete_1).default; } });
//# sourceMappingURL=index.js.map