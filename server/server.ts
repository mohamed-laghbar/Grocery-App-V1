import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import  connect  from "./src/config/db";
connect;

const app = express();

dotenv.config();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());


const port: string | number = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
