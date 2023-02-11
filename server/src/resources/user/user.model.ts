import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
    name: string;
    email: string;
    password: string;
    refresh_token: string;
}

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
});

export default mongoose.model<User>("User", UserSchema);
