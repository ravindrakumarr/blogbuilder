import React from 'react';
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

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact ><Home/></Route>
          <Route path='/create' component='Create'><Create/></Route>
          <Route path='/contact' component='contact'><Contact/></Route>
          <Route path='/sign-up'  />
          <Route path='/blog' component='blog'><Blog/></Route>

          <Route path='/Search' component='search'><Search/></Route>

          <Route path='/post-details' component='postdetails'><PostDetails/></Route>
        </Switch>

        <div className="make-this-void"></div>

        <Footer/>
        
        
      </Router> 

    </>
  );
}

export default App;