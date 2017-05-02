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
import CircularProgress from 'material-ui/CircularProgress';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false, 
            formIsMissingRequiredFields: false,
            NameField: '',
            EmailField: '',
            SubjectField: '',
            MessageField: ''
        };
        this.sendButtonClickHandler = this.sendButtonClickHandler.bind(this);
        this.cancelButtonClickHandler = this.cancelButtonClickHandler.bind(this);
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
    }

sendButtonClickHandler() {
    function isNotNullOrEmpty(element, index, array) { 
        return element !== null && element !== ""; 
    } 
    debugger;
    let fieldsList = [this.state.NameField, this.state.EmailField, this.state.SubjectField, this.state.MessageField]
    let AllFieldsFilled = fieldsList.every(isNotNullOrEmpty);

    this.setState({
        buttonClicked:true
    })
}

cancelButtonClickHandler() {
    this.setState({
        buttonClicked:false
    })
}

handleNameFieldChange = (event, newValue) => {
    this.setState({
        NameField: newValue
    })
};
handleEmailFieldChange = (event, newValue) => {
    this.setState({
        EmailField: newValue
    })   
};
handleSubjectFieldChange = (event, newValue) => {
    this.setState({
        SubjectField: newValue
    })
};
handleMessageFieldChange = (event, newValue) => {
    this.setState({
        MessageField: newValue
    })
};


    render(){
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div className="contactForm">
                        <Paper zDepth={2}>
                            <div className="formContent">
                                <TextField
                                    name="NameField"
                                    onChange={this.handleNameFieldChange}
                                    value={this.state.NameField}
                                    errorText="This field is required"
                                    hintText="Enter your name"
                                    floatingLabelText="Name"/><br />
                                <TextField
                                    name="EmailField"
                                    onChange={this.handleEmailFieldChange}
                                    value={this.state.EmailField}
                                    hintText="Enter your email address"
                                    floatingLabelText="E-mail"/><br />
                                <TextField
                                    name="SubjectField"
                                    onChange={this.handleSubjectFieldChange}
                                    value={this.state.SubjectField}
                                    hintText="The subject of your message"
                                    floatingLabelText="Subject"/><br />
                                <TextField
                                    name="MessageField"
                                    onChange={this.handleMessageFieldChange}
                                    value={this.state.MessageField}
                                    hintText="Compose your message"
                                    floatingLabelText="Message"
                                    fullWidth={true}
                                    multiLine={true}/><br />
                                <FloatingActionButton zDepth={1} className="CancelButton" backgroundColor={grey700} mini={true} onClick={this.cancelButtonClickHandler}>
                                    <ContentUndo/>
                                </FloatingActionButton>
                                <FloatingActionButton zDepth={1} className="SendButton" backgroundColor={lightGreen700} iconClassName="SendButtonIcon" onClick={this.sendButtonClickHandler} disabled={this.state.buttonClicked}>
                                    {
                                    this.state.buttonClicked
                                        ? <CircularProgress  />
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

