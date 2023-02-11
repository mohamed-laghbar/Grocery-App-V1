import { Request, Response, NextFunction } from "express";
import {createError} from "@/utils/error/custom.error";
import accesToken from "@/utils/token/generate.acces.token";
import * as jwt from "jsonwebtoken";
import userModel from "@/resources/user/user.model";

require("dotenv").config();

interface TokenPayload {
    _id: string;
    email: string;
}

const verifyRefreshToken = async (
    req: Request & { cookies?: string },
    res: Response,
    next: NextFunction
) => {
    try {
        const refresh_token: string | undefined = req?.cookies;
        if (!refresh_token)
            return next(createError("Refresh Token Not Found", 401));

        const user = await userModel.findOne({ refresh_token });
        if (!user) return next(createError("Invalid Refresh Token", 401));

        jwt.verify(refresh_token, process.env.REFRESH_SECRET as string);

        const new_acces_token: String = accesToken(user);
        
        res.status(200).json({ acces_token: new_acces_token });

    } catch (error) {
        next(error);
        return next(createError("Expired Refresh Token, Please Login Again", 401));
    }
};

export default verifyRefreshToken;
