import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
import useStyles from './Styles.js';

const Create = () => {


    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    const windows_url = window.location.href;
    const blog_query = windows_url.slice(27,);

  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  
      return (
          <>
  
            <Grid item xs={12} sm={10}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
             
          </>
      )
  }

export default Create
