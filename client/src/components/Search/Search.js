import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { getPosts } from '../../actions/posts';

import SearchForm from '../SearchForm/SearchForm';

import Pagination from '../Pagination/Pagination.js';
import Pageno from '../Pageno/Pageno.js';

const Search = () => {

    const windows_url = window.location.href;
    const blog_query = windows_url.slice(29,).replace(/%20/gi, " ").split(" ");

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
        (filtered_post.title).toLowerCase().includes(blog_query[0].toLowerCase())
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
                    
                This is home component<br/>
                <Link to='/blog'>Move to Blog</Link>
                <br/><br/>

                {/* Search incomplete box */}

                <SearchForm/>
                <br/>

                {/* Quick Links */}
                <h3 className="footer_ul_amrc">Quick Links to visit</h3>
                <ul className="footer_ul_amrc" style={{color: '#333333', textDecoration: 'underline'}}>
                    <li><a href="http://webenlance.com">Remove Background</a></li>
                    <li><a href="http://webenlance.com">Shadows Mirror Reflection</a></li>
                    <li><a href="http://webenlance.com">Logo Design</a></li>
                    <li><a href="http://webenlance.com">Vectorization</a></li>
                    <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
                    <li><a href="http://webenlance.com">Image Cropping</a></li>
                </ul>

                </div>
            </div>

            {/*----------------------------------------------------------------------*/}


            <div className="home-second-column">
                <div className="padding-5">

                This is search box, below blog query is an array 
                <br/><br/>

                {console.log(blog_query)}

                {blog_query.length !=0 ? 
                    <>
                        <Pagination p_posts={currentPosts} loading={loading}/>
                        <Pageno 
                            postsPerPage={postsPerPage} 
                            totalPosts={p_posts.length}
                            paginate={paginate}
                        />  
                    </> 

                    :
                    "No Result Found"      

                }

                
                </div>
            </div>

            {/*----------------------------------------------------------------------*/}

            <div className="home-third-column">
                <div className="padding-5">

                Contents that would be needed to hide on mobile version<br/><br/>

                </div>
            </div>

            {/*----------------------------------------------------------------------*/}



            </div>


        </div>
    )
}

export default Search
