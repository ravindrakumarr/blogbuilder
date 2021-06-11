import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import './Pagination.css';

import {duration} from '../../Algos/duration.js';

const today = new Date().toLocaleDateString();


const Pagination = ({p_posts, loading }) =>  {

    if (loading){
        return <h2>Loading</h2>;
    }


    return (
    <>

        {p_posts.map(post =>(
            <div key={post.id} >
                <Link className="link-name" to={"/post-details/"+post.creator}>{post.title}</Link>
                <br/>
                <Typography variant="caption">By {post.creator} - {duration((post.createdAt).slice(0,10).replace(/-/gi, "/")-today)} ago</Typography>
                <br/>
                <Typography variant="caption">
                    {
                    post.message.length<100 ?
                        post.message :
                        post.message.slice(0,100)+'...'
                    }

                    <br/>
                    {
                        post.likeCount<2 ?
                        post.likeCount + " Like" :
                        post.likeCount + " Likes"
                    }
                </Typography>

                <br/><br/>
            </div>

        ))}

        <br/>


    </>    
    );
    
};

export default Pagination
