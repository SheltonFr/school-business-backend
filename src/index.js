import express from "express";
import connectDatabase from "./database/db.js";
import dotenv from 'dotenv'


import userRoute from "./routes/user.route.js"

dotenv.config() // habilitar o dotenv em todo projecto

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json()); // habilitar processamento de Json no projecto

app.use("/users", userRoute)

app.listen(port, () => console.log(`Server running on ${port}`))