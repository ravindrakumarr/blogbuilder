import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>

      <Typography className={classes.title} variant="h6" component="h2">{post.category}</Typography>

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {
          post.message.length<50 ?
            post.message :
            post.message.slice(0,50)+'...'
          }
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>

        <Button size="small" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon className={classes.icons} />
          <Typography className={classes.buttontext}>&nbsp;
            {
            post.likeCount<2 ?
              post.likeCount + " Like" :
              post.likeCount + " Likes"
            }
          </Typography> 
        </Button>

        <Button size="small" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon className={classes.icons} /> 
          <Typography className={classes.buttontext}>&nbsp;Delete</Typography> 
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
