import cors from "cors";
import { config } from "dotenv";
import express from "express";

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors()) //* Puede ser consumido por cualquier origen*/

app.listen(PORT,()=>console.log(`Listen api rest with port ${PORT}`))