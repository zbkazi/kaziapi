import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import User from "@/models/auth/User";

// Define the schema for validating the request parameters
const UserIdSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid user ID format"), // MongoDB ObjectId format
});

// Define the schema for validating the request body
const UpdateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  // Add other fields that you want to allow for updates
});

const updateUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate request parameters
    const parsedParams = UserIdSchema.safeParse(req.params);
    if (!parsedParams.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid request parameters",
        errors: parsedParams.error.errors,
      });
    }

    // Validate request body
    const parsedBody = UpdateUserSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body",
        errors: parsedBody.error.errors,
      });
    }

    // Extract the user ID and the validated body
    const { id } = parsedParams.data;
    const updateData = parsedBody.data;

    // Update the user in the database
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).select("-password");
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Return the updated user data
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default updateUserById;
