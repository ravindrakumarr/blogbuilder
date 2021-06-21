import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import './Postdetailedsr.css';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

import Comments from '../../Comments/Comments';
import CommentForm from '../../CommentForm/CommentForm';

const Postdetailedsr = ({ post }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  //it is for comments section
  const [currentId, setCurrentId] = useState(0);



   

  return (

    <>


    {/*--building the blog structure--*/}

    <div className="jumbo-card box-shadow">
    <div className="padding-5">

        <br/>

        <div className="jumbo-strip">
        <div className="padding-5">

            <div className="jumbo-strip-left">        
                {post.title}
            </div>

            <div className="jubmo-strip-right">
                By {post.creator} , {moment(post.createdAt).fromNow()}
            </div>

        </div>    
        </div>

        <br/>

        <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
            className="jumbo-image"
        />
        <br/><br/>

        <div className="jumbo-strip">

            <div className="jumbo-strip-left">
            <div className="padding-5">     
                <Button>Continue Reading</Button>
            </div>    
            </div>

            <div className="jubmo-strip-right">
            <div className="padding-5">    
                {
                    post.likeCount<2 ?
                    post.likeCount + " Like" :
                    post.likeCount + " Likes"
                }
                &nbsp;
                <Button variant="outlined" size="small" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small"/>
                    <Typography variant="body2" className={classes.buttontext}>&nbsp;Like</Typography> 
                </Button>
            </div>    
            </div>

        </div>

    </div>
    </div>


    <br/>
    {/*Message container ++ suggestion container*/}

    <div className="message-suggestion">

        <div className="message--comment">

            {/*Message section*/}

            <div className="message-container box-shadow">
            <div className="padding-5">

                <Typography variant="h6"><br/><bold>{post.title}</bold><br/><br/></Typography>
                <Typography variant="subtitle1">{post.message}</Typography>
                
            </div>
            </div>

            <br/>

            {/*comment section*/}

            <div className="comment-section">
            <div className="padding-5">

                <Typography variant="h6"><br/><bold>Discussion on this thread</bold><br/><br/></Typography>      
                <Comments/>
                <CommentForm currentId={currentId} setCurrentId={setCurrentId} />


            </div>
            </div>

        </div>

        

        <div className="suggestion-container box-shadow">
        <div className="padding-5">    

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

    </div>


    


    </>

   
    );
};

export default Postdetailedsr;
