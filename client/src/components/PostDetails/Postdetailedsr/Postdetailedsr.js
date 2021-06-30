import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import ShareIcon from '@material-ui/icons/Share';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import './Postdetailedsr.css';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

import Comments from '../../Comments/Comments';
import CommentForm from '../../CommentForm/CommentForm';

const Postdetailedsr = ({ post ,comment_email, comment_name }) => { 

  const commentors_email = comment_email
  const commentors_name = comment_name

  const dispatch = useDispatch();
  const classes = useStyles();

  //it is for comments section
  const [currentId, setCurrentId] = useState(0);

  return (

    <>

    {/*--building the blog structure--*/}

    <div className="jumbo-card">

        <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
            className="jumbo-image"
        />

    </div>

    <div className="jumbo_overlap">
        <br/>
        <Typography style={{color: '#fff', fontSize:'20px'}}>
            <bold>

            {
            post.likeCount<2 ?
            post.likeCount + " Like" :
            post.likeCount + " Likes"
            }
            <br/>
            By {post.creator}
            </bold>
        </Typography>,
        
    </div>



    <br/>
    {/*Message container ++ suggestion container*/}

    <div className="message_comment_suggestion_box">
        
        <div className="message_comment_box">

            <div className="message_box box-shadow">
                <div className="padding-5">

                 <div className="title_share_box">
                     <div className="title_box">
                        <Typography variant="h6"><br/><bold><u>{post.title}</u></bold></Typography>
                        <Typography variant="caption">{moment(post.createdAt).fromNow()}</Typography>
                        <Button size="small" onClick={() => dispatch(likePost(post._id))}><FavoriteIcon fontSize="small" style={{color:'#ff3333'}}/>
                            <Typography variant="body2" className={classes.buttontext}>&nbsp;Like</Typography> 
                        </Button>
                     </div>
                     <div className="share_box">
                         <br/>
                        <ShareIcon fontSize="small"/>
                     </div>
                </div>   
              

                
                <br/><br/>

                <div className='new-line'>{post.message}</div>
                    
                </div>
            </div>

            <br/>

            <div className="comment_box box-shadow">
                <div className="padding-5">

                    <Typography variant="h6"><br/><bold>Discussion on this thread</bold><br/><br/></Typography>      
                    <Comments/>
                    <CommentForm currentId={currentId} setCurrentId={setCurrentId} commentors_email={commentors_email} commentors_name={commentors_name}/>

                </div>
            </div>

        </div>



        <div className="suggestion_box">

            <div className="author_details box-shadow">
                <div className="padding-5">
                    <br/>
                    <Typography color="primary"><bold>{post.creator}</bold></Typography>
                    <Typography variant="caption"><u>Know More about Author</u></Typography>
                </div> 
            </div>

            <div className="suggestion_links box-shadow">
                <div className="padding-5">

                <br/>
                <h3 className="footer_ul_amrc"><Typography variant="h6">Quick Links to visit</Typography></h3>
                <ul className="footer_ul_amrc" style={{color: '#333333', textDecoration: 'underline'}}>
                    <li><a href="http://webenlance.com"><span className="blue-links">Remove Background</span></a></li>
                    <li><a href="http://webenlance.com"><span className="blue-links">Shadows Mirror Reflection</span></a></li>
                    <li><a href="http://webenlance.com"><span className="blue-links">Logo Design</span></a></li>
                    <li><a href="http://webenlance.com"><span className="blue-links">Vectorization</span></a></li>
                    <li><a href="http://webenlance.com"><span className="blue-links">Hair Masking Clipping</span></a></li>
                    <li><a href="http://webenlance.com"><span className="blue-links">Image Cropping</span></a></li>
                </ul>

                </div>
            </div>


        </div>


    </div>

    


    </>

   
    );
};

export default Postdetailedsr;
