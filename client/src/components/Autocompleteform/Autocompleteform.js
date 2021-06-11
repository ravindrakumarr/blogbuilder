import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const Autocompleteform = ({p_posts, loading }) =>  {

    if (loading){
        return <h2>Loading</h2>;
    }


    return (
    <>

        <form method="get">
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={p_posts}
            getOptionLabel={(option) => option.title}
            style={{ width: 250 }}

            renderInput={
              (params) => <TextField {...params} 
                          label="Search Posts" 
                          variant="outlined" 
                          
                          />
            }
        />

        <Button variant="contained" color="primary">
          Submit
        </Button>
        
        </form>

        <br/>
        
        {



        }

    </>    
    );
    
};

export default Autocompleteform