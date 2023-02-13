import UserService from "./user.service";
import { Router, Request, Response, NextFunction } from "express";

interface Token {
    acces_token: string;
    refresh_token: string;
}

class UserController {
    private UserService = new UserService();

    public login = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { email, password } = req.body;

            const loginResult = await this.UserService.login(email, password, next);
            if (typeof loginResult === "object" && "acces_token" in loginResult) {
                const { acces_token, refresh_token } = loginResult;
                res.status(200).json({ acces_token, refresh_token });
            }
        } catch (error) {
            return next(error);
        }
    };


    public register = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const { name, email, password } = req.body;

            await this.UserService.register(name, email, password, next);
            res.status(201).json({ seccus: true, email });

        } catch (error) {
            return next(error);
        }
    };


    


}

export default UserController;
