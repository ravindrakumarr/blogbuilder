import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Published from '../Published/Published';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';
import memories from '../../images/memories.png';

import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { fade,withStyles } from '@material-ui/core/styles';

import GoogleAuth from '../../Algos/googleAuth.js'

import './Home.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchForm from '../SearchForm/SearchForm';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);





const Home = () => {
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
                  
                This is home component<br/>
                <Link to='/blog'>Move to Blog</Link>
                <br/><br/>

                {/* Search incomplete box */}

                <SearchForm/>
                <br/>

                {/* Quick Links */}
                <h3 className="footer_ul_amrc">Quick Links to visit</h3>
                <ul className="footer_ul_amrc" style={{color: '#333333', textDecoration: 'underline'}}>
                    <li><a href="http://webenlance.com">Remove Background</a></li>
                    <li><a href="http://webenlance.com">Shadows Mirror Reflection</a></li>
                    <li><a href="http://webenlance.com">Logo Design</a></li>
                    <li><a href="http://webenlance.com">Vectorization</a></li>
                    <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                    <li><a href="http://webenlance.com">Image Cropping</a></li>
                </ul>

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

                Contents that would be needed to hide on mobile version<br/><br/>

                <FormControl>
                  <BootstrapInput defaultValue="Subscribe Newsletter" id="bootstrap-input" />
                </FormControl>

              </div>
          </div>

          {/*----------------------------------------------------------------------*/}



        </div>


        {/* trying google signin & logout method*/}
        <GoogleAuth/>

    </>
  );
};

export default Home;
