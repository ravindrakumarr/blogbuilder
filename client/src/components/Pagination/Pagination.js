import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import './Pagination.css';

import {duration} from '../../Algos/duration.js';
import moment from 'moment';

const today = new Date().toLocaleDateString();


const Pagination = ({p_posts, loading }) =>  {

    if (loading){
        return <h2>Loading</h2>;
    }


    return (
    <>
        {p_posts.map(post =>(
        <div key={post.id} className="search-cards box-shadow">
            <div className="padding-5">
            <br/>   
            <Link className="link-name" to={"/post-details/"+post._id}>{post.title}</Link>
            <br/>
            <Typography variant="caption" className="creator-name">By {post.creator} - {moment(post.createdAt).fromNow()}</Typography>
            <br/>
            <Typography variant="caption">
                {
                post.message.length<75 ?
                    post.message :
                    post.message.slice(0,75)+'...'
                }

                <br/>
                {
                    post.likeCount<2 ?
                    post.likeCount + " Like" :
                    post.likeCount + " Likes"
                }
            </Typography>

            <br/>
            </div>
        </div>

        ))}
          

        <br/>


    </>    
    );
    
};

export default Pagination
