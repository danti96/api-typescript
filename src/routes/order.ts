import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session_middleware";
/**
 * Esta ruta solo se puede acceder las personas que tienen session activa!
 * que tenga JWT valido!
 * */

const router = Router()

router.get('/', checkJwt, getItems)


export { router }