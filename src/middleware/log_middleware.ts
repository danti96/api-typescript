import { NextFunction, Request, Response } from "express"


const logMiddleware = (request: Request, response: Response, next: NextFunction) => {


    next()

}

export { logMiddleware }