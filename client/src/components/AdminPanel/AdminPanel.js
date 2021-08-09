import React, { useState, useEffect } from 'react';
import './AdminPanel.css'
import Plagiarism from './Plagiarism';
import Stats  from './Stats';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

const passcode = "123";

export default class AdminPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            passcode: "",
            adminstatus: false
        }
    }

    handlePassword = (e) =>  {
        this.setState({passcode: e.target.value});
     };
    handleLogin =(e) => {
        e.preventDefault()
        if(this.state.passcode == passcode){
            this.setState({adminstatus: true})
        }
        else{
            alert("Wrong Passcode");
        }
    }

    render(){
    return (
        <>

            {
                this.state.adminstatus == false ?
                <>
                    <div className="authenticate_box box_shadow">
                    <br/>
                    <form autoComplete="off" noValidate onSubmit={this.handleLogin}>
                        <input type="text" placeholder="Provide your passcode" name="Password" variant="outlined" label="Passcode" fullWidth value={this.state.passcode} onChange={this.handlePassword}/>
                        <button className="submit-button" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</button>
                    </form>
                    <br/>
                    </div>
                    <br/><br/>
                </>
                :
                <>
                {alert("you are in")}

                <div className="admin_panel_container">

                    <div className="plagiarism_check box-shadow">

                        <div className="padding-5">
                            <Typography variant="h6"><u>Check for plagiarism & false data check here</u></Typography>
                            <br/>
                            <Plagiarism/>
                        </div>

                    </div> {/*end of plagiarism check */}

                    <div className="stats_reports">

                        <div className="stats_check box-shadow">

                            <div className="padding-5">
                                <br/>
                                <Typography variant="h6"><u>Current Stats</u></Typography>
                                <br/>
                                <Stats/>
                            </div>

                        </div>

                        <div className="reports_check box-shadow">

                            <div className="padding-5">
                                Need to check statistics
                            </div>

                        </div>

                    </div> {/*end of stats report */}

                    

                </div>
                <br/><br/>

                </>
            }
            
            
        </>
    )
    }
}

