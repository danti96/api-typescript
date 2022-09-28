import { Request, Response } from 'express'
import { handleHttp } from "../utils/error.handle"
import { RequestExt } from "../interfaces/jwt.interface"


const getItems = (request: RequestExt, response: Response) => {
    try {
        response.send({
            data: "sesion valida",
            user: request.user
        })
    } catch (error) {
        handleHttp(response, "ERROR_GET_ITEMS")
    }
}


export {
    getItems,
}