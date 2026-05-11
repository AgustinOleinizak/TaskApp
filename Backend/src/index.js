import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js"; 

dotenv.config();
connectDB();

const app = express();
const PORT = 5000


app.use(cors());

app.use(express.json());


app.get('/', (req, res) => {
    res.send('¡Hola mundo con Node.js y Express!');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecuntándose en http://localhost:${PORT}`);
});
