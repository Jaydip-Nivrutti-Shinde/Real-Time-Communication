
import mongoose, { Schema } from "mongoose";
const meetingShema = new Schema(
    {
        user_id:{
            type:String
        },
        meetingCode:{
            type:String,
            required:true,
            unique:true
        },
        date:{
            type:Date,
            default:Date.now,
            required:true
        }
    }
);

const Meeting = mongoose.model("Meeting",meetingShema);

export { Meeting };