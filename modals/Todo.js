import mongoose, { Schema } from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
     title:{
        type:String,
        required: true,
        maxlength: 60,
     },
     subject:{
        type:String,
        required:true,
        maxlength:100,
     },
     status:{
      type:String,
      required:true,
   
     }

},
{timestamps:true}
)

export default mongoose.models.Todo || mongoose.model("Todo",TodoSchema)
