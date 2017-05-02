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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentUndo from 'material-ui/svg-icons/content/undo'

const style = {
  marginRight: 10,
};

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {buttonClicked:false};
        this.sendButtonClickHandler = this.sendButtonClickHandler.bind(this);
        
    }

sendButtonClickHandler() {
    this.setState({
        buttonClicked:true
    })
    console.log(this.state.buttonClicked);
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
                                <FloatingActionButton zDepth={1} className="CancelButton" backgroundColor={grey700} mini={true} style={style}>
                                    <ContentUndo/>
                                </FloatingActionButton>
                                <FloatingActionButton zDepth={1} className="SendButton" backgroundColor={lightGreen700} iconClassName="SendButtonIcon" onClick={this.sendButtonClickHandler}>
                                    {
                                    this.state.buttonClicked
                                        ? null
                                        : <ContentSend hoverColor={lightGreen700} />
                                    }
                                </FloatingActionButton>
                            </div>
                        </Paper>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default ContactForm;

