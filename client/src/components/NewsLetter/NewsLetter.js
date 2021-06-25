import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <>
        <div className="padding-3">
            <Typography variant="body2">
            <br/>
            "Subscribe for alerts for every article or blog you might be interested in to read."
            <br/>
            <span style={{color: '#006699'}}><bold>Site Author</bold></span>
            </Typography>

            <button className="subscribe-button">Subscribe NewsLetter</button>

        </div>
        
            
        </>
    )
}

export default NewsLetter
