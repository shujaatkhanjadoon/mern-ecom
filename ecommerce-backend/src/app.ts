import express from "express";

// importing Routes

import userRoute from "./routes/user.js";
import { connectDB } from "./utills/features.js";

connectDB()

const port = 3000;

const app = express();

app.use(express.json());

// useing routes
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
    res.send("api working with /api/v1/user")
})

app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
    
});