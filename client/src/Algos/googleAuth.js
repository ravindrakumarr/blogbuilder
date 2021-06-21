import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createUser, getUsers } from '../actions/users.js';
import axios from 'axios';

import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Avatar from '@material-ui/core/Avatar';


const GoogleAuth= () => {


  const dispatch = useDispatch();
   //GETTING ALL USERS DATA FROM DATABASE 
   const [users, setposts] = useState([]);
   useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/users');
      setposts(res.data);
    }

    fetchPosts();

  }, []);

  console.log(users)


  //google o-auth tests
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);

    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);

    

    
    //TESTING - ON GOOGLE LOGIN IF IT CAN FILL THESE UP OR NOT
    const userData = { user_name: response.profileObj.name, email_id: response.profileObj.email, user_id: 'tests', profile: 'developer' };
    console.log(userData);
    if (userData.user_name!="" && userData.email_id!="" && userData.user_id!="" && userData.profile!="" ){
      
      var index = 0
      var i = 0
      //LOGIC TO FIND THE USER PRESENT OR NOT
      for ( i = 0; i<=users.length; i++){
        if(users.email_id == response.profileObj.email){
          console.log("we found it");
        }
      }
      

      if(true){
        console.log(response.profileObj.email + " -User already exists");
      } 
      else{
        dispatch(createUser(userData)); 
      }
    }
    else{
      console.log(userData + "we are not receiving as null")
    }
    


  }

  
 
  
  
  const logOut = () => {
    setName("");
    setEmail("");
    setUrl("");
    window.location.reload();
  }


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

             

      </>
  )
}

export default GoogleAuth
