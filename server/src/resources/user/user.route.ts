import UserController from "./user.controller";
import { Router } from "express";

const router = Router();
const userController = new UserController();

router.post("/login", userController.login);

export default router;
