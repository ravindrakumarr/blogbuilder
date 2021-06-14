import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import axios from 'axios';

import useStyles from './styles';
import Postdetailedsr from './Postdetailedsr/Postdetailedsr';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const PostDetails = ({ setCurrentId }) => {

  const [currentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const posts = useSelector((state) => state.posts);


  const windows_url = window.location.href;
  const blog_query = windows_url.slice(35,).replace(/%20/gi, " ");
  //this query needs to be improved so that we can fetch id with better way

  return (

 

    !posts.length ? <CircularProgress /> : (
        <>
        {posts.filter(filtered_post => filtered_post._id.includes(blog_query)) 
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
