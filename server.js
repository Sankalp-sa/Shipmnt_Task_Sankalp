import express from "express";
import dotevn from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./db/connectDb.js";
import router from "./routers/mainRoute.js";

// set cors to *

//config dotevn
dotevn.config();

//connect to database
connectDB();

const app = express();

// router


app.use(cors({ origin: "*", credentials: true}));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", router);
const port = 8080;

app.listen(port, () => console.log(`Server running on mode on port ${port}`));
