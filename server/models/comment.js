import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    comment_id: String,
    content: String,
    creator_name: String,

    createdAt: {
        type: Date,
        default: new Date(),
    },

    creator_id: String
})

var Comment = mongoose.model('Comment', postSchema);

export default Comment;