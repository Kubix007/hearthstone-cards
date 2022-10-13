import express from "express";
import * as dotenv from "dotenv";
import { connectDB } from "./config/db";
import { errorHandler } from "./middleware/errorMiddleware";
import userRoutes from "./routes/userRoutes";

const port = process.env.PORT || 5000;

connectDB();

const app = express();
const config = dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", userRoutes);

app.use(errorHandler);
app.listen(port, () => console.log(`Server stared on port ${port}`));
