import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import {createError} from "@/utils/error/custom.error";

interface TokenPayload {
    _id: string;
    email: string;
}

const verifyAccessToken = (req: Request & { user?: TokenPayload }, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return next(createError('Access token is required', 401))

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as TokenPayload;
        req.user = decoded;
        next();
    } catch (error) {
        return next(createError('Invalid Access token', 401))
    }
};

export default verifyAccessToken;
