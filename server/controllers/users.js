import express from 'express';
import mongoose from 'mongoose';

import Users from '../models/user.js';

const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const newUser = await Users.find();
                
        res.status(200).json(newUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createUser = async (req, res) => {
    const { name, user_name, email_id, user_id, profile, createdAt, repository_url, introduction, skills, location, qualification, work, social_media, profile_photo } = req.body;

    const newUser = new Users({ name, user_name, email_id, user_id, profile, createdAt, repository_url, introduction, skills, location, qualification, work, social_media, profile_photo })

    try {
        await newUser.save();

        res.status(201).json(newUser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export default router;