import { Request, Response } from "express"

import { registerNewUser, loginUser } from "../services/auth"
const registerCtrl = async ({ body }: Request, response: Response) => {
    const responseUser = await registerNewUser(body)
    response.send(responseUser)
}


const loginCtrl = async ({ body }: Request, response: Response) => {
    const { email, password } = body
    const responseUser = await loginUser({ email, password })
    if (responseUser === "PASSWORD_INCORRECT") {
        response.status(400).send(responseUser)
    } else {
        response.send(responseUser)
    }
}

export {
    registerCtrl,
    loginCtrl
}