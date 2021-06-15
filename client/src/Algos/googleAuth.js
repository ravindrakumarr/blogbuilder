import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createUser } from '../actions/users.js';

import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Avatar from '@material-ui/core/Avatar';


const GoogleAuth= () => {


  //google o-auth tests
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response)=> {
    console.log(response);
    console.log(response.profileObj);

    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }

  const logOut = () => {
    setName("");
    setEmail("");
    setUrl("");
  }



  //ADDING THE FORM ATTRIBUTES LETS CHECK IF GONNA WORK
  const [userData, setUserData] = useState({ user_name: '', email_id: '', user_id: '', profile: '' });
  //const user = useSelector((state) => (currentId ? state.users.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(userData);
    dispatch(createUser(userData));
    console.log("here");

  };


  return (
      <>

        <GoogleLogin
          clientId="950902823496-84k3p9t5k51d04laa4b0hppsdm6orhe7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}

          /*//////////////////custom login button
          render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          )}
          */

        />

        {name != null ?
          <>
            Welcome {name}
            <Avatar src={url}></Avatar>
            {email}
          </>
          :
          ""
        }

        <GoogleLogout
          clientId="950902823496-84k3p9t5k51d04laa4b0hppsdm6orhe7.apps.googleusercontent.com"
          buttonText="Logout"
          //isSignedIn={false}
          onLogoutSuccess={logOut}
        >
        </GoogleLogout>


        {/*Adding the form from where we can add users*/}
        <br/><br/>

        
        <form autoComplete="off" noValidate  onSubmit={handleSubmit}>

        <TextField variant="outlined" label="user_name" fullWidth value={userData.user_name} onChange={(e) => setUserData({ ...userData, user_name: e.target.value })} />
        <TextField variant="outlined" label="email_id" fullWidth value={userData.email_id} onChange={(e) => setUserData({ ...userData, email_id: e.target.value })} />
        <TextField variant="outlined" label="user_id" fullWidth value={userData.user_id} onChange={(e) => setUserData({ ...userData, user_id: e.target.value })} />
        <TextField variant="outlined" label="profile" fullWidth value={userData.profile} onChange={(e) => setUserData({ ...userData, profile: e.target.value })} />

        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Add user</Button>

        </form>

             
      </>
  )
}

export default GoogleAuth
