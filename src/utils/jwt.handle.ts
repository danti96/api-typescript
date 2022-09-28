import { sign, verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET"

const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET, { expiresIn: "2h" })
    return jwt
}

const verifyToken = (jwt: string) => {

    const isOK = verify(jwt, JWT_SECRET)
    return isOK
}

export {
    generateToken,
    verifyToken
}