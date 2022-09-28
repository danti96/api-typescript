import {
    Request,
    Response,
    NextFunction
} from "express";
import { verifyToken } from "../utils/jwt.handle";

import { RequestExt } from "../interfaces/jwt.interface"

const checkJwt = (request: RequestExt, response: Response, next: NextFunction) => {

    try {

        const jwtByUser = request.headers.authorization || ""
        const jwt = jwtByUser.split(" ").pop() //* Devuelve el ultimo elemento del array
        const isUser = verifyToken(`${jwt}`)
        if (!isUser) {
            response.status(401).send("SESSION_INVALID")
        } else {
            request.user = isUser
            console.log("isUser", isUser)
            next()
        }

    } catch (error) {
        response.status(400).send("SESSION_NOT_VALID")
    }
}

export { checkJwt }