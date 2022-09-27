import { Response } from "express"


const handleHttp = (response: Response, error: string) => {
    response.status(500)
    response.send({ error })
}
export { handleHttp }