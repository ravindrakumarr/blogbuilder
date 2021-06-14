import express from 'express';

import Comment from '../models/comment.js';

const router = express.Router();

export const getComment = async (req, res) => { 
    try {
        const comment = await Comment.find();
                
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createComment = async (req, res) => {
    const { comment_id, content, creator_name, creator_id } = req.body;

    const newComment = new Comment({ comment_id, content, creator_name, creator_id })

    try {
        await newComment.save();

        res.status(201).json(newComment );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { comment_id, content, creator_name, creator_id } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedComment = { comment_id, content, creator_name, creator_id, _id: id };

    await Comment.findByIdAndUpdate(id, updatedComment, { new: true });

    res.json(updatedComment);
}







export default router;