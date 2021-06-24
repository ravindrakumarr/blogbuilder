import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
import memories from '../../images/memories.png';

const Blog = (props) => {

  const props_name = props.name
  const props_email = props.email

  //Props are getting lost from here as well , will have to look why


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

          {"this is fetched query : " + blog_query}
          <br/>

          <Link to='/'>Move to Home</Link> 
          <br/><br/>

          <div className="home-row">

              <div className="home-second-column">
                <div className="padding-5">
                  <Grid item xs={12} sm={15}>
                    <Posts setCurrentId={setCurrentId}/>
                  </Grid>
                </div>
              </div>

            <div className="home-third-column">
            <div className="padding-5">
                <Grid item xs={12} sm={10}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} props_name={props_name} props_email={props_email} />
                </Grid>
            </div>
            </div>

          </div>

        </>
    )
}

export default Blog
