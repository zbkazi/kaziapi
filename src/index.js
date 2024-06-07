import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 4000;

app.get("/", (_req, res) => {
  res.send("<h1>Hello Kazi Byte!, Welcome to Kazi Byte API</h1>");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

export default app;
