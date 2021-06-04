import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';



const Pagination = ({p_posts, loading }) =>  {

    if (loading){
        return <h2>Loading</h2>;
    }


    return (
    <>
        <ul className="list-group mb-4">
            {p_posts.map(post =>(
                <li key={post.id} className="list-group-item">
                    {post.title}
                    {post.creator}
                </li>
            ))}
        </ul>





    </>    
    );
    
};

export default Pagination
