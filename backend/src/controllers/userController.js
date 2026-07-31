import { User } from "../models/userModel";
import bcrypt, {hash} from "bcrypt";

const login = async(ewq,res)=>{
    const { username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message:"Please provide credentials"});
    }
    try{
        const user = await User.findOne({username});

        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message:"User not found"});
        }

        if(bcrypt.compare(password,user.password)){
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({token:token});
        }

        res.status(httpStatus.CREATED).json({message:"User Registered"})

    }catch(err){
        res.status(500).json({message:"Something went wrong: "+err});
    }
}

const register = async(ewq,res)=>{
    const {name, username, password} = req.body;
    try{
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.has(password,10);
        const newUser = new User({
            name:name,
            username:username,
            password:hashedPassword
        });

        await newUser.save();
        res.status(httpStatus.CREATED).json({message:"User Registered"})

    }catch(err){
        res.json({message:"Something went wrong: "+err});
    }
}

export {login, register};