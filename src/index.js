import express from "express";
import connectDatabase from "./database/db.js";
import dotenv from 'dotenv'


import userRoutes from "./routes/user.route.js"
import authRoutes from './routes/auth.route.js'

dotenv.config() // habilitar o dotenv em todo projecto

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json()); // habilitar processamento de Json no projecto

app.use("/users", userRoutes)
app.use("/auth", authRoutes)

app.listen(port, () => console.log(`Server running on ${port}`))