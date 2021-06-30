import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './NewsLetter.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { createSubscriber } from '../../actions/subscribe.js';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { getUsers } from '../../actions/users';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const NewsLetter = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //Subscriber Data & inserting provedure

    const [subscriberData, setSubscriberData] = useState({ name: '', email_id: ''});
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createSubscriber(subscriberData));  
        handleClose();  
        handleClick();
      };

    //handling snackbar
  
    const [opensnack, setOpensnack] = React.useState(false);
    const handleClick = () => {
        setOpensnack(true);
    };  
    const handleClosesnack = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpensnack(false);
    };

    //fetching user info to display on right side

    const [currentId] = useState(0);
  
    useEffect(() => {
      dispatch(getUsers());
    }, [currentId, dispatch]);
  
    const users = useSelector((state) => state.users);
    const sliced_users = users.slice(0,2)

    

    return (
        <>
        <div className="padding-3">
            <Typography variant="body2">
            <br/>
            "Subscribe for alerts for every article or blog you might be interested in to read."
            <br/>
            <span style={{color: '#006699'}}><bold>Site Author</bold></span>
            </Typography>

         
            <button type="button" onClick={handleOpen} className="subscribe-button">Subscribe</button>



            <br/><br/>

            <div className="stat_row">
                <div className="stat_column_left">
                    <Typography variant="h4">10+</Typography><br/>
                    <Typography variant="body2">User Registered<br/>with us</Typography>
                </div>
                <div className="stat_column_right">
                    <Typography variant="h4">50+</Typography><br/>
                    <Typography variant="body2">Articles Published<br/>on the site</Typography>
                </div>
            </div>





            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
            >
            <Fade in={open}>
            <div className="modal-content">
                <div style={{width: '80%', marginLeft: '10%', textAlign: 'center'}}>
                <Typography variant="h6">
                    <bold>Subscribe to channelize your information</bold>
                </Typography>
                <Typography variant="caption">
                    Once you subscribe to us, you will start receiving the knowledge articles of your interest via mails
                </Typography>    

                </div>

                <br/>


                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Name"
                     onChange={(e) => setSubscriberData({ ...subscriberData, name: e.target.value })}
                    />
                    <input type="text" className="input" placeholder="Email ID"
                     onChange={(e) => setSubscriberData({ ...subscriberData, email_id: e.target.value })}
                    />
                    <button type="submit" className="subscriber-submit">
                        Submit
                    </button>
                </form>
                
            </div>
            </Fade>
        </Modal>

        <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            open={opensnack}
            autoHideDuration={6000}
            onClose={handleClosesnack}
            message="Hooray ! You are Subscribed"
            action={
            <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClosesnack}>
                </Button>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClosesnack}>
                <CloseIcon fontSize="small" />
                </IconButton>
            </React.Fragment>
            }
            />

      

        </div>
        
            
        </>
    )
}

export default NewsLetter
