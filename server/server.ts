import { sendConfirmationEmail } from './src/utils/otp/send.otp.code';
import express, { NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
require('./src/config/db');
import userRouter from './src/resources/user/user.route'
import ErrorHandler from "./src/middleware/error/error.handler";
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
app.use('/api', userRouter)
app.use(ErrorHandler)

const port: string | number = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});


sendConfirmationEmail('simo', 'simoghbaar@gmail.com', 4055)





