import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { getPosts } from '../../actions/posts';

import SearchForm from '../SearchForm/SearchForm';

import Pagination from '../Pagination/Pagination.js';
import Pageno from '../Pageno/Pageno.js';
import NewsLetter from '../NewsLetter/NewsLetter'
import not_found from '../../images/not-found.png'

import consultancy from '../../images/category/consultancy.jpg'
import information_tech from '../../images/category/information_tech.jpg'
import legal from '../../images/category/legal.jpg'

import './Search.css'
import createTypography from '@material-ui/core/styles/createTypography';

const Search = () => {

    const windows_url = window.location.href;

    //currently if it is array , it gives results - but not for string (have to convert it to array)
    const blog_query = windows_url.includes("%20") ? 
        windows_url.slice(29,).replace(/%20/gi, " ").split(" ")
        :
        windows_url.slice(29,)

    const [currentId, setCurrentId] = useState(0);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [post_details, setposts] = useState([]);

    //change page
    const [postsPerPage] = useState(2);
    const [current, setCurrentPage] = useState(1);
    const indexOfLastPost = current * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;


    //have to improvise this filter search
    const p_posts = post_details.filter(filtered_post => 
        ((filtered_post.title).toLowerCase().includes(blog_query[0].toLowerCase())) ||
        ((filtered_post.title).toLowerCase().includes(blog_query[1].toLowerCase()))        
    ) 

    console.log(p_posts)
        


    const currentPosts = p_posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber); 


    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('http://localhost:5000/posts');
          setposts(res.data);
          setLoading(false);
    
          dispatch(getPosts());
         
        }
    
        fetchPosts();
    
      }, []);

      console.log(p_posts);
      

    return (
        <div>

            <div className="home-row">  

            <div className="home-first-column">
              <div className="padding-5">
                <Typography variant="body2">  
                <br/> 
                ???If you haven???t found it, keep looking.??? <br/><span style={{color: '#006699'}}><bold>Steve Jobs</bold></span>
                <br/><br/>
                {/* Search incomplete box */}
                <SearchForm/>
                <br/>
                </Typography>
              </div>
          </div>

            {/*----------------------------------------------------------------------*/}


            <div className="home-second-column">

                <div className="padding-5">

                {p_posts.length !=0 && blog_query.length !=0 ? 
                    <>
                        <div className="search_post_container">
                            <Pagination p_posts={currentPosts} loading={loading}/>
                        </div>

                        <br/><br/>
                        
                        <div className="place_page_no">
                            <Pageno 
                                postsPerPage={postsPerPage} 
                                totalPosts={p_posts.length}
                                paginate={paginate}
                            /> 
                        </div>
                         
                    </> 

                    :
                    <>
                        <div className="search-cards">
                            <div className="padding-5" style={{textAlign: 'center'}}>
                                <br/><img src={not_found} className="not-found"/><br/><br/>
                                <br/>Sorry, there is no article or blogs exists with these keywords<br/>
                            </div>
                        </div>
                    </>
                          

                }

                
                </div>
            </div>

            {/*----------------------------------------------------------------------*/}

            <div className="home-third-column">
                <div className="padding-5">
 
                    <NewsLetter/>

                </div>
            </div>

            {/*----------------------------------------------------------------------*/}



            </div>


        </div>

       
    )
}

export default Search
