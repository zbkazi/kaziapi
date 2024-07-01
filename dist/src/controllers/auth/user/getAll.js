"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("@/models/auth/User"));
const getAllUsers = async (req, res, next) => {
    try {
        // Fetch all users from the database
        const users = await User_1.default.find().select("-password");
        // Return the list of users
        return res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            users,
        });
    }
    catch (error) {
        console.error(error); // Log error for debugging
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.default = getAllUsers;
//# sourceMappingURL=getAll.js.map