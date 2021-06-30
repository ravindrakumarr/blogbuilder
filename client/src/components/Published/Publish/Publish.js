import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Link } from 'react-router-dom';

import './Publish.css';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Publish = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();


  return (

    <div className="card-row box-shadow">

        <div className="card-left">
            <br/><img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
            className="card-image"
            />
        </div>

        <div className="card-right">
            <div className="padding-5">
                <br/>
                <Link to={"/post-details/"+post._id}>
                <Typography variant="h6" color="default" style={{fontFamily: 'Helvetica', fontWeight: 'bold', color: '#333' }}>
                    {post.title.length>35 ?
                    post.title.slice(0,35)+'...'
                    :
                    post.title 
                    }
                </Typography>
                </Link>
                
                <span className={classes.buttontext} style={{color: '#666666'}}>By {post.creator}</span>
                &nbsp;&nbsp;
                <span className={classes.buttontext} style={{color: '#666666'}}>&nbsp;{moment(post.createdAt).fromNow()}</span>

                <Button size="small" onClick={() => dispatch(likePost(post._id))}><FavoriteIcon className={classes.icons} style={{color: '#666666'}} />
                    <Typography className={classes.buttontext} style={{color: '#666666'}}>&nbsp;
                        {
                        post.likeCount<2 ?
                        post.likeCount + " Like" :
                        post.likeCount + " Likes"
                        }
                    </Typography> 
                </Button>  
                <br/>

                <Typography variant="caption">
                  {
                    post.message.length<75 ?
                    post.message :
                    post.message.slice(0,75)+'...'
                  }
                  &nbsp;
                  <Link to={"/post-details/"+post._id}>Read More</Link>
                  <br/>
                  {!post.tags.length ?
                        <del>No hashTags</del>
                    :
                        post.tags.map((tag)=>(
                            <span style={{color: '#000'}}>#{tag}&nbsp;</span>
                        ))
                  }
                </Typography>

            </div>
        </div>

        <div className="extreme_right">
            <br/><br/>
            <Button size="small" style={{marginTop: '-22px'}}><ShareIcon fontSize="small"/>
                <Typography variant="body2" className={classes.buttontext}></Typography> 
            </Button>
        </div>


    </div>

    
    );
};

export default Publish;
