import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Author.css'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/users';

const Author = () => {

    const useStyles = makeStyles((theme) => ({
        large: {
          width: theme.spacing(12),
          height: theme.spacing(12),
        }
    }));
    const classes = useStyles();

    const [currentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getUsers());
    }, [currentId, dispatch]);
  
    const users = useSelector((state) => state.users);

    const windows_url = window.location.href;
    const user_query = windows_url.slice(31,).replace(/%20/gi, " ");

    return (
        <>

        <br/><br/><br/>
        <div className="author-main-card box-shadow">
            <div className="padding-5" style={{textAlign: 'center'}}>
                <div className="author-profile-photo">
                    <Avatar className={classes.large} style={{backgroundColor: '#0099cc'}}></Avatar>
                </div>
                <br/><br/><br/>
                <Typography>
                    {users
                        .filter(filtered_user => filtered_user.user_id.includes(user_query)) 
                        .map((user) =>  (
                        <>
                        <span className="small-heading">{user.user_name}</span>
                        <br/>
                        {user.profile}
                        <br/>
                        </>
                        ))
                    }
                </Typography>
            </div>
        </div>

        <div className="container-blocks">

            <div className="author-left-container box-shadow">
                <div className="padding-5">
                    <Typography variant="body1"><span className="small-heading">Organisation Details</span></Typography>
                    <br/>
                </div>
            </div>{/*END OF LEFT CONTAINER*/}


            <div className="author-right-container box-shadow">
                <div className="padding-5">
                    <Typography variant="body1"><span className="small-heading">Right container & contents</span></Typography>
                    <br/>
                </div>              
            </div>{/*END OF RIGHT CONTAINER*/}


        </div>{/*end of container-block*/}

        
            
        </>
    )
}

export default Author
