import React from 'react';
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

const Postdetailedsr = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();


   

  return (

    <>

    <div className="card-row">

        <div className="card-left">
            <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
            className="card-image"
            />
        </div>

        <div className="card-right">
            <div className="padding-5">
            
                <Typography variant="h4" color="default" style={{fontFamily: 'Times New Roman' }}>{post.title}</Typography>
                
                <span className={classes.buttontext} color="textSecondary"><DescriptionOutlinedIcon fontSize="small"/>{post.creator}</span>
                &nbsp;&nbsp;
                <span className={classes.buttontext}><DateRangeOutlinedIcon fontSize="small"/>{moment(post.createdAt).fromNow()}</span>

                <Button size="small" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon className={classes.icons} />
                    <Typography className={classes.buttontext}>&nbsp;
                        {
                        post.likeCount<2 ?
                        post.likeCount + " Like" :
                        post.likeCount + " Likes"
                        }
                    </Typography> 
                </Button>  
                <br/><br/>  

                {
                post.message.length<100 ?
                    post.message :
                    post.message.slice(0,100)+'...'
                }
                <br/>

                <Link to={"/post-details/"+post.creator}>Read More</Link>
                <br/><br/>

                <Button variant="outlined" size="small" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small"/>
                    <Typography variant="body2" className={classes.buttontext}>&nbsp;Like</Typography> 
                </Button>
                &nbsp;&nbsp;
                <Button variant="outlined" size="small" ><ScreenShareIcon fontSize="small"/>
                    <Typography variant="body2" className={classes.buttontext}>&nbsp;Share</Typography> 
                </Button>



            </div>
        </div>


    </div>


    {/*--building the blog structure--*/}


    <div className="post-container-row box-shadow">

            <div className="post-container-left">
                <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
                className="post-image"
                />
            </div>

            <div className="post-container-right">
                <div className="padding-5">

                <Typography variant="h4" color="default" style={{fontFamily: 'Times New Roman' }}>{post.title}</Typography>

                </div>
            </div>

    </div>


    </>

   
    );
};

export default Postdetailedsr;
