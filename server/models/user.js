import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    user_name: String,
    email_id: String,
    user_id: String,
    profile: String
})

var Users = mongoose.model('Users', postSchema);

export default Users;