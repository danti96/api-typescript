import cors from "cors";
import "dotenv/config";
import express from "express";
import { router } from "./routes/routes";
import dbConnect from "./config/mongo"

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(cors()) //* Puede ser consumido por cualquier origen*/
app.use(router)


dbConnect().then(() => console.log("Connect"))


app.listen(PORT, () => console.log(`Listen api rest with port ${PORT}`))