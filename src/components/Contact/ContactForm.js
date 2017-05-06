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
const ACTION_LOADING = 'loading';
const ACTION_READY = 'ready';
const ACTION_DONE = 'done';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionStatus: ACTION_READY,
            NameField: {value: '', status: '', name: 'NameField'},
            EmailField: {value: '', status: '', name: 'EmailField'},
            SubjectField: {value: '', status: '', name: 'SubjectField'},
            MessageField: {value: '', status: '', name: 'MessageField'}
        };
        this.sendButtonClickHandler = this.sendButtonClickHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getMessageSentPopUp = this.getMessageSentPopUp.bind(this);
        this.getButtonShouldDisable = this.getButtonShouldDisable.bind(this);
        this.checkFormIsFilled = this.checkFormIsFilled.bind(this);
        this.getFormDisplay = this.getFormDisplay.bind(this);
        this.getThankYouDisplay = this.getThankYouDisplay.bind(this);
        this.getFormPaperStyle = this.getFormPaperStyle.bind(this);
    }

checkFormIsFilled(){
    let missingFieldsCount = 0;    
    let fieldsList = [this.state.NameField, this.state.EmailField, this.state.SubjectField, this.state.MessageField];

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
    return missingFieldsCount === 0 ? true : false;
}

sendButtonClickHandler() {

    if (this.checkFormIsFilled()){
        this.setState({ actionStatus: ACTION_LOADING })
        setTimeout(function(){ 
            this.setState({actionStatus:ACTION_DONE}) 
        }.bind(this), 3000);
    }
    else{
        this.setState({ actionStatus: ACTION_READY })
    }
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

getMessageSentPopUp(){
    return this.state.actionStatus === ACTION_DONE ? true : false;
}

getButtonShouldDisable(){
    return this.state.actionStatus === ACTION_LOADING ? true : false;
}
getFormDisplay(){
    return this.state.actionStatus === ACTION_DONE ? {display : 'none'} : {display : 'block'};
}
getThankYouDisplay(){
    return this.state.actionStatus === ACTION_DONE ? {display : 'inline-block'} : {display : 'none'};
}
getFormPaperStyle(){
    return this.state.actionStatus === ACTION_DONE ? {height : '600px'} : {height : '600px'};
}
    render(){
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div className="contactForm">
                        <SendButton 
                            className="SendButton"
                            iconClassName="SendButtonIcon"
                            onClick={this.sendButtonClickHandler}
                            actionStatus={this.state.actionStatus}>
                        </SendButton>
                        <Paper zDepth={2} style={{height:'500px'}}>
                            <div className="formContent" style={this.getFormDisplay()}>
                                <TextField
                                    name="NameField"
                                    style={{marginBottom: '30px'}}
                                    onChange={this.handleInputChange}
                                    value={this.state.NameField.value}
                                    errorText={this.state.NameField.status}
                                    hintText="Enter your name"
                                    disabled={this.getButtonShouldDisable()}
                                    floatingLabelText="Name"/><br />
                                <TextField
                                    name="EmailField"
                                    style={{marginBottom: '30px'}}
                                    onChange={this.handleInputChange}
                                    value={this.state.EmailField.value}
                                    errorText={this.state.EmailField.status}
                                    hintText="Enter your email address"
                                    disabled={this.getButtonShouldDisable()}
                                    floatingLabelText="E-mail"/><br />
                                <TextField
                                    name="SubjectField"
                                    style={{marginBottom: '30px'}}
                                    onChange={this.handleInputChange}
                                    value={this.state.SubjectField.value}
                                    errorText={this.state.SubjectField.status}
                                    hintText="The subject of your message"
                                    disabled={this.getButtonShouldDisable()}
                                    floatingLabelText="Subject"/><br />
                                <TextField
                                    name="MessageField"
                                    style={{marginBottom: '30px'}}
                                    onChange={this.handleInputChange}
                                    value={this.state.MessageField.value}
                                    errorText={this.state.MessageField.status}
                                    hintText="Compose your message"
                                    floatingLabelText="Message"
                                    disabled={this.getButtonShouldDisable()}
                                    fullWidth={true}
                                    multiLine={true}
                                    rowsMax={3}/><br />
                            </div>
                            <h1 className="ThankYouHeader" style={this.getThankYouDisplay()}>Thank you.</h1>
                            
                        </Paper>
                    </div>
                </MuiThemeProvider>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <Snackbar
                    open={this.getMessageSentPopUp()}
                    message="Message sent!"
                    autoHideDuration={3300}/>
                </MuiThemeProvider>
                    
            </div>
        );
    }
}
export default ContactForm;

