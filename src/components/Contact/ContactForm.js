import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Contact.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import FlatButton from 'material-ui/FlatButton';
import {grey900, lightGreen700, grey700} from 'material-ui/styles/colors'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentUndo from 'material-ui/svg-icons/content/undo'
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';

import SendButton from '../GenericControls/SendButton';

const FIELD_REQUIRED = 'This field is required.';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false, 
            formIsMissingRequiredFields: true,
            messageSent:false,
            NameField: {value: '', status: '', name: 'NameField'},
            EmailField: {value: '', status: '', name: 'EmailField'},
            SubjectField: {value: '', status: '', name: 'SubjectField'},
            MessageField: {value: '', status: '', name: 'MessageField'}
        };
        this.sendButtonClickHandler = this.sendButtonClickHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.cancelButtonClickHandler = this.cancelButtonClickHandler.bind(this);
    }

sendButtonClickHandler() {
    debugger;
    let missingFieldsCount = 0;    
    let fieldsList = [this.state.NameField, this.state.EmailField, this.state.SubjectField, this.state.MessageField]
    fieldsList.forEach(function validate(currentField, index, array){
        if(currentField.value === '' || typeof currentField.value === 'undefined'){
            missingFieldsCount++;
        }        
        this.setState(function(prevState){
            if(currentField.value === '' || typeof currentField.value === 'undefined'){
                // Return the new state
                return{[currentField.name]:{status: FIELD_REQUIRED, name: prevState[currentField.name].name, value: prevState[currentField.name].value}}
            }
            else{
                // Return the previous state
                return{[currentField.name]:{status: '', name: prevState[currentField.name].name, value: prevState[currentField.name].value}}
            }
        })
    }.bind(this));

    if (missingFieldsCount === 0){
        this.setState({buttonClicked: true});
    }
    else{
        this.setState({buttonClicked: false});
    }
    setTimeout(function(){ alert("Hello"); }, 3000);
}

cancelButtonClickHandler() {
    this.setState({
        buttonClicked:false
    })
}

handleInputChange = (event, newValue) => {
    let targetName = event.target.name;
    this.setState(function(prevState){
        if (prevState[targetName].status === FIELD_REQUIRED && newValue !== '') {
            return{[targetName]:{value: newValue, name: prevState[targetName].name, status: ''}}
        }
        else{
            return{[targetName]:{value: newValue, name: prevState[targetName].name, status: prevState[targetName].status}}
        }
    })
}

    render(){
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div className="contactForm">
                        <Paper zDepth={2}>
                            <div className="formContent">
                                <TextField
                                    name="NameField"
                                    onChange={this.handleInputChange}
                                    value={this.state.NameField.value}
                                    errorText={this.state.NameField.status}
                                    hintText="Enter your name"
                                    disabled={this.state.buttonClicked}
                                    floatingLabelText="Name"/><br />
                                <TextField
                                    name="EmailField"
                                    onChange={this.handleInputChange}
                                    value={this.state.EmailField.value}
                                    errorText={this.state.EmailField.status}
                                    hintText="Enter your email address"
                                    disabled={this.state.buttonClicked}
                                    floatingLabelText="E-mail"/><br />
                                <TextField
                                    name="SubjectField"
                                    onChange={this.handleInputChange}
                                    value={this.state.SubjectField.value}
                                    errorText={this.state.SubjectField.status}
                                    hintText="The subject of your message"
                                    disabled={this.state.buttonClicked}
                                    floatingLabelText="Subject"/><br />
                                <TextField
                                    name="MessageField"
                                    onChange={this.handleInputChange}
                                    value={this.state.MessageField.value}
                                    errorText={this.state.MessageField.status}
                                    hintText="Compose your message"
                                    floatingLabelText="Message"
                                    disabled={this.state.buttonClicked}
                                    fullWidth={true}
                                    multiLine={true}/><br />
                                <FloatingActionButton zDepth={1} className="CancelButton" backgroundColor={grey700} mini={true} onClick={this.cancelButtonClickHandler}>
                                    <ContentUndo/>
                                </FloatingActionButton>
                                <SendButton 
                                    className="SendButton"
                                    iconClassName="SendButtonIcon"
                                    onClick={this.sendButtonClickHandler}
                                    isClicked={this.state.buttonClicked}
                                    messageSent={this.state.messageSent}>
                                </SendButton>
                            </div>
                        </Paper>
                    </div>
                </MuiThemeProvider>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <Snackbar
                    open={this.state.buttonClicked}
                    message="Message sent!"
                    autoHideDuration={3300}/>
                </MuiThemeProvider>
                    
            </div>
        );
    }
}
export default ContactForm;

