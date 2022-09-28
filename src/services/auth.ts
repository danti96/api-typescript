import UserModel from "../models/user_model";
import { User } from "../interfaces/user.interace";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { Auth } from "../interfaces/auth.interface";


const registerNewUser = async ({ email, name, password }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) return "ALREADY_USER"
    const passHass = await encrypt(password)
    const createNewUser = await UserModel.create({
        email,
        password: passHass,
        name
    })
    return createNewUser
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email })
    if (!checkIs) return "NOT_FOUND_USER"

    const passHash = checkIs.password
    const isCorrect = await verified(password, passHash)
    if (!isCorrect) return "PASSWORD_INCORRECT"
    return checkIs
}

export {
    registerNewUser,
    loginUser,
}