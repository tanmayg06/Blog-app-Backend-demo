import express from 'express';
import Like from '../models/likeModel.js';
import Post from '../models/postModel.js';

const likePost = async (req, res) => {
    try {
      const { post, user } = req.body;
      const like = new Like({
        post,
        user,
      });
      const savedLike = await like.save();
  
      // Update Post Collection basis on this
      const updatedPost = await Post.findByIdAndUpdate(
        post,
        { $push: { likes: savedLike._id } },
        { new: true }
      )
        .populate("likes")
        .exec();
  
      res.json({
        post: updatedPost,
      });
    } catch (err) {
      return res.status(500).json({
        error: "Error While Like Post",
      });
    }
  };


  // Unlike a Post
const unlikePost = async (req, res) => {
    try {
      const { post, like } = req.body;
  
      // find and delete the from like collection
      const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
  
      // update the post collection
      const updatedPost = await Post.findByIdAndUpdate(
        post,
        { $pull: { likes: deletedLike._id } },
        { new: true }
      );
  
      res.json({
        post: updatedPost,
      });
    } catch (err) {
      return res.status(500).json({
        error: "Error While unLike Post",
      });
    }
  };

    export { likePost, unlikePost };