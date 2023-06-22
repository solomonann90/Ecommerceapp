import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import { fileURLToPath } from 'url';
import path from 'path';


//configure env
dotenv.config();


//databse config
connectDB()

//esmodulefix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join__dirname, './client/build'))

//routes
app.use("/api/auth", authRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/product", productRoutes)

//rest api
app.use('*', function (req, res) {
    res.sendFile(path.join__dirname, './client/build/index.html')
})

//PORT
const PORT = process.env.PORT;

//run listen
app.listen(PORT, () => {
    console.log(
        `Server Running on  port ${PORT}`.bgCyan.white

    );
});
