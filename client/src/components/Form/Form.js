import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';


import useStyles from './styles';

import './Form.css';

import { createPost, updatePost } from '../../actions/posts';

const Form = ( {currentId, setCurrentId , props_name, props_email } ) => {
  const [postData, setPostData] = useState({ creator: props_name, creator_email: props_email, title: '', message: '', tags: '', selectedFile: '', category: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  console.log(props_email + "this is the props")

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: props_name, creator_email: props_email ,title: '', message: '', tags: '', selectedFile: '', category: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();    
    } else {
      dispatch(updatePost(currentId, postData)); 
      clear();
    }
  };

  return (
    <>

      <br/>
      <div className="form-container">

        <div className="margin-5">

        {/* we can add this typo - on admin/user dashboard form

        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Submit your post here'}</Typography>
        
        */}

        <div style={{marginLeft: '2%'}}>
          <Typography variant="h6">
            Add your content from here
          </Typography>

          <Typography variant="caption">  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat.
          </Typography>
        </div>
        

        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      
          <TextField className={classes.textfield} name="creator" variant="outlined" label="Your name" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField className={classes.textfield} name="title" variant="outlined" label="Subject of Question" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
    
          <textarea className={classes.textarea} name="message" placeholder="Type your content here..." variant="outlined" label="Content" rows={15} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

          <TextField className={classes.textfield} name="tags" variant="outlined" label="Hashtags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          
          <TextField className={classes.textfield} name="title" variant="outlined" label="Category" fullWidth value={postData.category} onChange={(e) => setPostData({ ...postData, category: e.target.value })} />


          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button className={classes.buttonClear} variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
        </form>

        </div>

      </div>

    </>
  );
};

export default Form;
