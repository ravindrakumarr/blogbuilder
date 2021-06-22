import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthorComponent from './AuthorComponent'
import not_found from '../../images/not-found.png'

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/users';

const Author = () => {

    const [currentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getUsers());
    }, [currentId, dispatch]);
  
    const users = useSelector((state) => state.users);

    const windows_url = window.location.href;
    const user_query = windows_url.slice(31,).replace(/%20/gi, " ");;

    console.log(users.length)

    return (
        <>
            {
            
            users.length == 0 ?
            <>

                <div className="no-data-div box-shadow">
                    <img src={not_found} className="not-found"/><br/><br/>
                    <span className="small-heading">Something went wrong , please try again later</span> 
                </div>

            </>
            :
            <>
                {
                JSON.stringify(users).includes(user_query) == true ?
                <AuthorComponent/>
                :
                <div className="no-data-div box-shadow">
                    <img src={not_found} className="not-found"/><br/><br/>
                    <span className="small-heading">The author you are looking for , does not exist</span> 
                </div> 
                }

            </>
            
               
            }
      
        </>
    )
}

export default Author
