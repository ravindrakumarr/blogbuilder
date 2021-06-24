import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getComment } from '../../actions/comment';

import './Comments.css';

const Comments = ({setCurrentId}) => {


  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    }
  }));
  const classes = useStyles();

  const windows_url = window.location.href;
  const comment_query =  windows_url.slice(35,);

  console.log(comment_query);

  const [c_comments, setposts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchPosts = async () => {
      
      setLoading(true);
      const res = await axios.get('http://localhost:5000/comments');
      setposts(res.data);
      setLoading(false);
      
    }

    fetchPosts();

  }, []);



  if (loading){
    return <h2>Loading</h2>;
  }

  return (
     

    !c_comments.length ? "No Comments yet ! Be the first one to add" : (
      <>
      {c_comments
      .map((comments) =>  (
        <div key={comments.comment_id} >
             {comments.comment_id == comment_query ?

             <>

              <div className="comments">
                <div className="comments-left">
                  <Avatar className={classes.large} style={{backgroundColor: '#0099cc'}}>{comments.creator_name[0]}</Avatar>
                </div>

                <div className="comments-right">
                  <Typography variant="body1" color="primary"> <Link to={'/author?q='+comments.creator_id}>{comments.creator_name}</Link></Typography>
                  <Typography variant="caption">{moment(comments.createdAt).fromNow()}</Typography>
                </div>

                <Typography variant="body2">{comments.content}</Typography>
              </div>

              

             </>

              :
             ""
             }
        </div>
      ))
      
      }
      </>
  )

    

    )

};

export default Comments;
