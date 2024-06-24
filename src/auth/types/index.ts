import mongoose from "mongoose";

export type AccessTokenType = {
    id : mongoose.Types.ObjectId;
    email:string;
    name:string;
    role : string
}