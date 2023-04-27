import express from "express";
import connectDatabase from "./database/db.js";
import dotenv from 'dotenv'
import cors from 'cors'

import userRoutes from "./routes/user.route.js"
import authRoutes from './routes/auth.route.js'
import swaggerRoutes from './routes/swagger.route.cjs'

dotenv.config() // habilitar o dotenv em todo projecto

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json()); // habilitar processamento de Json no projecto


app.use(cors())
app.use("/users", userRoutes)
app.use("/auth", authRoutes)
app.use("/doc", swaggerRoutes)

app.listen(port, () => console.log(`Server running on ${port}`))