import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = 5000

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

app.get('/', (req, res) => {
    res.send('¡Hola mundo con Node.js y Express!');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecuntándose en http://localhost:${PORT}`);
});
