import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Author.css'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import fb_url from'../../images/logo/fb.png'
import insta_url from'../../images/logo/insta.png'

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/users';

const AuthorComponent = () => {

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
    
                {users
                .filter(filtered_user => filtered_user.user_id.includes(user_query)) 
                .map((user) =>  (
                <>
                <img className="profile_photo" src={user.profile_photo}/>
                </>
                ))
                }
        
                <br/><br/>      

                {users
                    .filter(filtered_user => filtered_user.user_id.includes(user_query)) 
                    .map((user) =>  (
                    <>
                    <span className="small-heading">{user.user_name}</span>
                    <br/>
                    {user.profile}
                    
                    <br/>
                    <Typography variant="caption">{user.introduction}</Typography>
                    </>
                    ))
                }
                
            </div>
        </div>

        <div className="container-blocks">

            <div className="left-side">

                <div className="author-left-container box-shadow">
                    <div className="padding-5">
                        <Typography variant="body1"><span className="small-heading">Skill Details</span></Typography>
                        <br/>

                        {users
                        .filter(filtered_user => filtered_user.user_id.includes(user_query)) 
                        .map((user) =>  (
                        <>
                        <a href={user.repository_url} target="_new">My GitHub Repository</a>
                        <br/>

                        {user.skills.map((a) => (
                            <> 
                            <Chip variant="outlined" size="small" label={a}/>&nbsp;     
                            </>
                        ))
                        }

                        
                        </>
                        ))
                    }
                    </div>

                </div>{/*END OF LEFT CONTAINER*/}

                {users
                .filter(filtered_user => filtered_user.user_id.includes(user_query)) 
                .map((user) =>  (
                <>
                    {user.social_media.length>0 ?
                    <>
                        <div className="author-left-container box-shadow">
                            <div className="padding-5">
                                <span className="small-heading">Social Media</span>
                                <br/><br/>
                                <a href={user.social_media[0]} target="_new"><img src={fb_url} className="social_icon_1"/></a>
                                &nbsp;
                                <a href={user.social_media[1]} target="_new"><img src={insta_url} className="social_icon_2"/></a>
                            </div>
                        </div>
                    </>
                    :
                    ""
                    }
                </>
                ))
                }


            </div>{/*END OF LEFT SIDE*/}


            <div className="right-side">

                <div className="author-right-container box-shadow">
                    <div className="padding-5">
                        <Typography variant="body1"><span className="small-heading">Right container & contents</span></Typography>
                        <br/>
                    </div>              
                </div>{/*END OF RIGHT CONTAINER*/}

            </div>{/*END OF RIGHT SIDE*/} 
            


        </div>{/*end of container-block*/}


        <div style={{width: '100%', height: '50px'}}></div>

        
            
        </>
    )
}

export default AuthorComponent
