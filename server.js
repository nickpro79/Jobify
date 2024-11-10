import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();

if (process.env) app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data recieved", data: req.body });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is running on {port}`);
});
