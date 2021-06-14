import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// Comment section

const url2 = 'http://localhost:5000/comments';

export const fetchComment = () => axios.get(url2);
export const createComment = (newComment) => axios.post(url2, newComment);
export const updateComment = (id, updatedComment) => axios.patch(`${url2}/${id}`, updatedComment);

