import { generateOTP } from '../../utils/otp/generate.otp';
import accesToken from '../../utils/token/generate.acces.token';
import { createError } from '../../utils/error/custom.error';
import { NextFunction, Request, Response } from 'express';
import UserModel from './user.model';
import bcrypt from 'bcryptjs';
import refreshToken from '../../utils/token/generate.refresh.token';

interface Token {
    acces_token: string;
    refresh_token: string;
}

class UserService {
    private User = UserModel;


    public async login(
        email: string,
        password: string,
        next: NextFunction
    ): Promise<string | void | Token> {
        try {
            const user = await this.User.findOne({ email });
            if (!user) return next(createError('Unable to find user with that email address', 401));

            const isMatch = bcrypt.compare(password, user.password);
            if (!isMatch) return next(createError('Wrong Password', 401));

            const acces_token = accesToken(user);
            const refresh_token = refreshToken(user);

            return { acces_token, refresh_token } as Token;




        } catch (error) {
            return next(error);
        }
    };


    public async register(
        name: String,
        email: string,
        password: string,
        next: NextFunction,
    ): Promise<void> {
        try {
            const user = await this.User.create({
                name,
                email,
                password,
            });
            
            
        } catch (error) {
            next(error)
        }


    }

}


export default UserService;
