import { User } from "../models/userModel.js";
import bcrypt, {hash} from "bcrypt";
import status from "http-status";
import crypto from "crypto";

const login = async(req,res)=>{
    const { userName, password} = req.body;
    if(!userName || !password){
        return res.status(400).json({message:"Please provide credentials"});
    }
    try{
        const user = await User.findOne({userName});

        if(!user){
            return res.status(status.NOT_FOUND).json({message:"User not found"});
        }

        if(bcrypt.compare(password,user.password)){
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(status.OK).json({token:token});
        }

        res.status(status.CREATED).json({message:"User Registered"});

    }catch(err){
        res.status(500).json({message:"Something went wrong: "+err});
    }
}

const register = async (req, res) => {
    const { name, userName, password } = req.body;

    try {
        if (!name || !userName || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ userName });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            userName,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({
            message: "User Registered"
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

export {login, register};