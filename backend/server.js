import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverDB from "./config/mongoose.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
serverDB();
app.get("/", (req, res) => res.send("Gmail Clone Backend Running"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
