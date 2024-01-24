import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstname:{
            type:String,
            required: true,
            maxlength: 60,
        },
        lastname:{
            type:String,
            required:true,
            maxlength: 60,
        },
        birthday:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            required:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        address:{
            type:String,
            required:true,
            
        },
        city:{
            type:String,
            required:true,
        },
        pin:{
            type:Number,
            required:true,
        },
        image:{
            type:String,
            default:"",
        }

    },
    {timestamps:true}
)

export default mongoose.models.User || mongoose.model("User",UserSchema)

       

            