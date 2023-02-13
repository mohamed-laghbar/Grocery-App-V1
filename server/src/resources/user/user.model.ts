import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
    name: string;
    email: string;
    password: string;
    refresh_token: string;
    otp: number;
    isVerified: boolean;
};

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    refresh_token: {
        type: String,
        required: false,
        default: ''
    },
    otp: {
        type: Number,
        required: false,
        default: '',
    },
    isVerified: {
        type: Boolean,
        default: false,
        required: false
    },

},
    { timestamps: true }
);

export default mongoose.model<User>("User", UserSchema);
