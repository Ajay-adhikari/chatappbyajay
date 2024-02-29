import path  from "path"
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";



import connectToMongoDB from "./db/coonectToMongoDB.js";
import { app,server } from "./socket/socket.js";


const port=process.env.PORT || 5000;
const __dirname=path.resolve();
console.log(process.env.PORT);

dotenv.config();

app.use(express.json());// to parse the req body
app.use(cookieParser());
app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);
app.use("/api/users" , userRoutes);
app.use(cors());
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("&" , (req , res)=>{
    res.sendFile(path.join(__dirname,"frontend" , "dist" , "index.html"));
})


server.listen(port , ()=>{
    connectToMongoDB();
    console.log(`server is runnign i port ${port}`);
})

