
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comment.js';
import userRoutes from './routes/users.js';
import subscriberRoutes from './routes/subscribe.js';


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);
app.use('/subscribers', subscriberRoutes);

//this one is for mongo db atlas
const CONNECTION_URL = "mongodb+srv://rkumar6821:tmkoc108@cluster0.o1ip5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//this is for local mongo db compass client
//const CONNECTION_URL = "mongodb://localhost:27017/BlogBuilder"
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);