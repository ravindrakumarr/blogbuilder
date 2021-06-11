import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import Postdetailedsr from './Postdetailedsr/Postdetailedsr';

const PostDetails = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  const windows_url = window.location.href;
  const blog_query = windows_url.slice(35,).replace(/%20/gi, " ");
  //this query needs to be improved so that we can fetch id with better way

  return (

 

    !posts.length ? <CircularProgress /> : (
        <>
        {posts.filter(filtered_post => filtered_post.creator.includes(blog_query)) 
        .map((post) =>  (
          <Grid key={post._id} item xs={12} sm={6} md={12}>
            <Postdetailedsr post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))
        }
        </>
    )


  );
};

export default PostDetails;
