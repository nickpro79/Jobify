import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 5100;

let jobs = [
  { id: nanoid(), company: "apple", position: "frontend" },
  { id: nanoid(), company: "google", position: "backend" },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data recieved", data: req.body });
});

app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
