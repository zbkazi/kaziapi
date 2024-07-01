"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
const port = parseInt(process.env.PORT || '4000', 10);
const host = "0.0.0.0";
app.get("/", (_req, res) => {
    res.send("<h1>Hello Kazi Byte!, Welcome to Kazi Byte API</h1>");
});
app.listen(port, host, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map