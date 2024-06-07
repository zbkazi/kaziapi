import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


const port: number = parseInt(process.env.PORT || '4000', 10);
const host = "0.0.0.0"

app.get("/", (_req, res) => {
  res.send("<h1>Hello Kazi Byte!, Welcome to Kazi Byte API</h1>");
});

app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;