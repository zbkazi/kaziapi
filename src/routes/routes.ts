import app from "@/app";
import {
  registration,
  login,
} from "./index";

// all the routes are defined here

const allRoutes = [
  registration,
  login,
];

app.use("/auth", allRoutes);