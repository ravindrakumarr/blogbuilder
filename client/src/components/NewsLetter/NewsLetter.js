import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './NewsLetter.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
            <div className={classes.paper}>
                <Typography variant="body2" style={{color: '#006699'}}>
                    <bold>Subscribe to channelize your knowledge gains</bold>
                </Typography>
                <br/>

                <form>
                    <input type="text" 
                    className="input"
                    placeholder="Enter your email ID"
                    />
                    <button className="submit-button">
                        Submit
                    </button>
                </form>
                
            </div>
            </Fade>
        </Modal>
      

        </div>
        
            
        </>
    )
}

export default NewsLetter
