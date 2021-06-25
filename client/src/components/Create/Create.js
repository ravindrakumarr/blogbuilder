import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
import useStyles from './Styles.js';
import google_pic from '../../images/google.png'

const Create = (props) => {


    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    const windows_url = window.location.href;
    const blog_query = windows_url.slice(27,);

    const props_name = props.name
    const props_email = props.email
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  
      return (
          <>

          {props.name == "" && props.email == "" ?
          <>
            <div className={classes.not_allow_before_login}>
              <br/>
              <img src={google_pic} style={{width:'50px', height:'50px'}}/>
              <br/><br/>
              Please login from your google account first, provided<br/>
              on the left bottom corner.
            </div>
          </>
          :
            <div style={{width: '100%' }}>
              <Form currentId={currentId} setCurrentId={setCurrentId} props_name={props_name} props_email={props_email}/>
            </div>
          }  

          <div style={{width: '100%', height:'50px'}}></div>
             
          </>
      )
  }

export default Create
