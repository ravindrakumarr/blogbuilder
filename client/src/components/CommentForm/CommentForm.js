import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { createComment, updateComment } from '../../actions/comment';


const CommentForm = ({ currentId, setCurrentId , commentors_email, commentors_name }) => {

  //Props are getting lost on page refresh , so need to get 

  const useStyles = makeStyles((theme) => ({
    comment_text: {
      width: '100%'
    },
    comment_submit: {
      marginBottom: 10,
      width: '20%',
      height: '30px',
      marginTop: '5px',
      backgroundColor: '#006699',
      textTransform: 'none',
      textAlign: 'right',
      backgroundColor: '#006699'
    },
  }));
  const classes = useStyles();


  const windows_url = window.location.href;
  const comment_query =  windows_url.slice(35,);

  console.log(commentors_name + "this is what i am talking about")

  const [postData, setPostData] = useState({ comment_id: comment_query, content: '', creator_name: commentors_name, creator_id: commentors_email });
  const comment = useSelector((state) => (currentId ? state.comment.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (comment) setPostData(comment);
  }, [comment]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ comment_id: comment_query, content: '', creator_name: commentors_name, creator_id: commentors_email });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0 && commentors_name != "") {
      dispatch(createComment(postData));
      clear();
      window.location.reload();

      //we need to improve this in future - api calls are getting called on first attemp , not after saving
      //so using refresh , which shall be removed for better productivity

    } else {
      alert(commentors_name + "- commentor not present");
      //dispatch(updateComment(currentId, postData));
      clear();
    }
  };

  return (
    <>

      <br/>
      <div className="comment-form-section">

        {/* we can add this typo - on admin/user dashboard form

        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Submit your post here'}</Typography>
        
        */}  

        <form autoComplete="off" noValidate  onSubmit={handleSubmit}>

          <textarea className={classes.comment_text} name="Content" placeholder="Add your comment here" variant="outlined" label="Content" rows={4} value={postData.content} onChange={(e) => setPostData({ ...postData, content: e.target.value })} />
          <Button className={classes.comment_submit} variant="contained" color="primary" size="large" type="submit" fullWidth>Post Comment</Button>
        
        </form>



      </div>



      
    </>
  );
};

export default CommentForm;
