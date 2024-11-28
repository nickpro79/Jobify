import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { body, validationResult } from "express-validator";

//routers
import jobRouter from "./routes/jobRoutes.js";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

import mongoose from "mongoose";
const port = process.env.PORT || 5100;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post(
  "/api/v1/test",
  [body("name").notEmpty().withMessage("name is required")],
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      const errorMessages = error.array().map((error) => error.msg);
      return res.status(400).json({ error: errorMessages });
    }
    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.json({ message: `hello ${name}` });
  }
);

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
