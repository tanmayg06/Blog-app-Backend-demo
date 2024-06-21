import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Post" //reference to the post model
    },
    user: {
        type:String,
        required:true,
    },    
    body: {
        type:String,
        required:true,
    }    
})

export default mongoose.model("Comment", commentSchema);