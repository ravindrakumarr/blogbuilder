import express from 'express';
import mongoose from 'mongoose';

import Subscribe from '../models/subscribe.js';

const router = express.Router();

export const getSubscribers = async (req, res) => { 
    try {
        const newSubscriber = await Subscribe.find();
                
        res.status(200).json(newSubscriber);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createSubscriber = async (req, res) => {
    const { name, email_id } = req.body;

    const newSubscriber = new Subscribe({ name, email_id })

    try {
        await newSubscriber.save();

        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export default router;