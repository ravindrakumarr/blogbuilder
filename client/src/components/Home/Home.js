import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Published from '../Published/Published';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
import memories from '../../images/memories.png';

import './Home.css';

import { Link } from 'react-router-dom';


const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>


        <div className="home-row">  


        <div className="home-first-column">
            <div className="padding-5">
                first column
            </div>
        </div>

        {/*----------------------------------------------------------------------*/}


        <div className="home-second-column">
            <div className="padding-5">
            <Grid item xs={12} sm={15}>
              <Published setCurrentId={setCurrentId} />
            </Grid>
            </div>
        </div>

        {/*----------------------------------------------------------------------*/}

        <div className="home-third-column">
            <div className="padding-5">
                This is home component<br/>
                <Link to='/blog'>Move to Blog</Link>
                <br/>

            </div>
        </div>

        {/*----------------------------------------------------------------------*/}



        </div>

    </>
  );
};

export default Home;
