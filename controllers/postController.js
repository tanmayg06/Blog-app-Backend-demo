import Post from '../models/postModel.js';

const createPost = async (req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({title, body });
        const savedPost = await post.save();

        res.json({
            post : savedPost
        })
    }
    catch(err){
        return res.status(400).json({
            error : "Error While Creating Post"
        })
    }
}

const getAllPosts = async (req, res) => {
    try{
        // const posts = await Post.find();
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            data : posts,
        })
    }
    catch(err)
    {
        return res.status(400).json({
            error : "Error while Fetching Post "
        })
    }
}

export { createPost, getAllPosts };