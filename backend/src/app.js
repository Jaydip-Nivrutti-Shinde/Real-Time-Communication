import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketmanager.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port",(process.eventNames.PORT ||8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:true}));
app.use("api/v1/users",userRoutes);

app.get("/home",(req,res)=>{
    return res.json({"Hello":"World"});
});

const start = async ()=>{

    // const connectionDB = await mongoose.connect("");
    console.log("Db connected");
    server.listen(app.get("port"), ()=>{
        console.log("listining on port 8000");
    });
};

start();