import "dontenv/config"
import {connect} from "mongoose"

const NDDE_ENV = process.env.NODE_ENV

async function dbConnect(): Promise<void>{
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI)
}

export default dbConnect