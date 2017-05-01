import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Contact.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FlatButton from 'material-ui/FlatButton';
import {grey900, lightGreen700, grey700} from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';

class ContactForm extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div className="contactForm">
                        <Paper zDepth={2}>
                            <div className="formContent">
                                <TextField
                                hintText="Enter your name"
                                floatingLabelText="Name"/><br />
                                <TextField
                                hintText="Enter your email address"
                                floatingLabelText="E-mail"/><br />
                                <TextField
                                hintText="The subject of your message"
                                floatingLabelText="Subject"/><br />
                                <TextField
                                hintText="Compose your message"
                                floatingLabelText="Message"
                                fullWidth={true}
                                multiLine={true}/><br />
                                <IconButton
                                /*hoveredStyle={style={backgroundColor}}*/
                                tooltip="Send"
                                tooltipPosition="bottom-center">
                                    <HardwareVideogameAsset/>
                                </IconButton>
                            </div>
                        </Paper>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default ContactForm;

