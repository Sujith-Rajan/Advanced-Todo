import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        desc:{
            type:String,
            required:true
        },
        link:{
            type:String,
           
        },
        imageUrl:{
            type:String,
           
        }

    },
    { timestamps:true }
)

export default mongoose.models.Project || mongoose.model("Project",ProjectSchema)