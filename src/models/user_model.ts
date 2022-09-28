import { Schema, Types, model, Model, SchemaType } from "mongoose"
import { User } from '../interfaces/user.interace';


const UserSchema = new Schema<User>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true, default: "Description" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("user", UserSchema)

export default UserModel