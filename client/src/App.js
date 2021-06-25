import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';

import './App.css';
//import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Services from './components/pages/Services';
//import Products from './components/pages/Products';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PostDetails from './components/PostDetails/PostDetails';
import Create from './components/Create/Create';
import Search from './components/Search/Search.js';
import Author from './components/Author/Author.js';
import NewsLetter from './components/NewsLetter/NewsLetter.js';

import google_pic from './images/google.png'
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getUsers } from './actions/users.js';
import axios from 'axios';

const App = () => {

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


  }


  //TESTING - ON GOOGLE LOGIN IF IT CAN FILL THESE UP OR NOT
  const userData = { user_name: name, email_id: email, 
    user_id: 'tests', profile: 'developer', 
    skills: ['PHP', 'Javascript', 'React'],
    work: 'Infosys',
    introduction: 'Hello My name is Ravindra Kumar, Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    location: 'Hyderabad',
    repository_url: 'https://github.com/ravindrakumarr/blogbuilder',
    social_media: [
      'https://www.facebook.com/ravindra.kumar.50767',
      'https://www.instagram.com/ravindra_kumarr/'
    ],
    qualification: 'Engineering',
    name: name,
    profile_photo: url,
  };

  if (userData.profile_photo != 0){

  //LOGIC TO FIND THE USER PRESENT OR NOT  
  JSON.stringify(users).includes(userData.email_id) == true 
  ?
    console.log(userData.email_id + "- already exists")
  :
    dispatch(createUser(userData)); 

  }
  else{
  console.log(userData + "we are receiving data as null")
  }

  const logOut = () => {
    setName("");
    setEmail("");
    setUrl("");
    window.location.reload();
  }





  return (
    <>
      {name == ""?
        <div className="signin-method-in-left-corner">
          <GoogleLogin
            clientId="950902823496-84k3p9t5k51d04laa4b0hppsdm6orhe7.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}

            
            render={renderProps => (
              <Avatar src={google_pic} className="google_button" onClick={renderProps.onClick} disabled={renderProps.disabled}/>
            )}
            

          />
        </div>
        
        
        :


        <div className="signin-method-in-left-corner">
          <GoogleLogout
            clientId="950902823496-84k3p9t5k51d04laa4b0hppsdm6orhe7.apps.googleusercontent.com"
            buttonText="Logout"
            //isSignedIn={false}
            onLogoutSuccess={logOut}

            render={renderProps => (
              <Avatar src={url} className="google_button" onClick={renderProps.onClick} disabled={renderProps.disabled}/>
            )}

          >
          </GoogleLogout>
      </div>
      
      }









      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact ><Home name={name}/></Route>
          <Route path='/create' component='Create'><Create name={name} email={email}/></Route>
          <Route path='/contact' component='contact'><Contact name={name}/></Route>
          <Route path='/sign-up'/>
          <Route path='/blog' component='blog'><Blog name={name} email={email}/></Route>
          <Route path='/Search' component='search'><Search name={name}/></Route>

          <Route path='/post-details' component='postdetails'><PostDetails name={name} email={email}/></Route>
          <Route path='/author' component='Author'><Author name={name}/></Route>

          <Route path='/prohibitedroutenottobevisited' component='NewsLetter'><NewsLetter name={name} email={email}/></Route>
        </Switch>

        <div className="make-this-void"></div>
 

        <Footer/>
        
        
      </Router> 

    </>
  );
}

export default App;