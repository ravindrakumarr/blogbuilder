import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    email_id: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Subscribe = mongoose.model('Subscribe', postSchema);

export default Subscribe;