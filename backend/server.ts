import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";

connectDB();

const port = process.env.PORT || 5000;
const app = express();
const config = dotenv.config();

app.listen(port, () => console.log(`Server stared on port ${port}`));
