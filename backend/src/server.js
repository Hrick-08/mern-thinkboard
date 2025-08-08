import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

import notesRouters from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimitter from "./middleware/rateLimitter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(cors({
    origin: "http://localhost:5173",
})
);
app.use(express.json()); //parses the JSON bodies
app.use(rateLimitter);

app.use("/api/notes", notesRouters);

connectDB().then(() => {
    app.listen(PORT, () =>{
        console.log("Server is listening at PORT:", PORT)
    }); 
});