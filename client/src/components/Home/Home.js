import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import NewsLetter from '../NewsLetter/NewsLetter'

import Published from '../Published/Published';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';

import { fade,withStyles } from '@material-ui/core/styles';



import './Home.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchForm from '../SearchForm/SearchForm';


const Home = (props) => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

 /* 
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
*/
  const [p_posts, setposts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/posts');
      setposts(res.data);
      setLoading(false);

      dispatch(getPosts());
    }

    fetchPosts();

  }, []);

  console.log(p_posts);



  return (
    <>


        <div className="home-row">  

          <div className="home-first-column">
              <div className="padding-5">
                <Typography variant="body2">
                <br/> 
                “If you haven’t found it, keep looking.” <br/><span style={{color: '#006699'}}><bold>Steve Jobs</bold></span>
                <br/><br/>
                {/* Search incomplete box */}
                <SearchForm/>
                <br/>
                </Typography>
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

                <NewsLetter/>

              </div>
          </div>

          {/*----------------------------------------------------------------------*/}
          {props.name}


        </div>


    </>
  );
};

export default Home;
