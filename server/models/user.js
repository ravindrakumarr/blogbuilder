import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    user_name: String,
    email_id: String,
    user_id: String,
    profile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    repository_url: String,
    social_media: { type : Array , "default" : [] },
    introduction: String,
    skills : { type : Array , "default" : [] },
    location: String,
    qualification: String,
    work: String
})

var Users = mongoose.model('Users', postSchema);

export default Users;