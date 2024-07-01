"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const redis = new ioredis_1.default();
redis.lpush("key", "value", function (err, reply) { });
redis.get("kye", function (err, reply) {
    console.log(reply);
});
//# sourceMappingURL=readis.js.map