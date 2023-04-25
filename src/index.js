import express from "express";
import connectDatabase from "./database/db.js";
import dotenv from 'dotenv'


dotenv.config() // habilitar o dotenv em todo projecto

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

app.listen(port, () => console.log(`Server running on ${port}`))