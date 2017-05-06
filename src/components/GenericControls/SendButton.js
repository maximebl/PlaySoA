import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {grey900, lightGreen700, grey700, white} from 'material-ui/styles/colors'
import '../Contact/Contact.css';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import CircularProgress from 'material-ui/CircularProgress';
import ContentSend from 'material-ui/svg-icons/content/send';
import ActionDone from 'material-ui/svg-icons/action/done';

const ACTION_LOADING = 'loading';
const ACTION_READY = 'ready';
const ACTION_DONE = 'done';

class SendButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.getSendButtonColor = this.getSendButtonColor.bind(this);
        this.getButtonIcon = this.getButtonIcon.bind(this);
        this.getButtonClassName = this.getButtonClassName.bind(this);
        this.getIconStyle = this.getIconStyle.bind(this);
    }

getSendButtonColor() {
    switch (this.props.actionStatus) {
        case ACTION_DONE:
            return lightGreen700;
            break;
        case ACTION_LOADING:
            return grey900;
        case ACTION_READY:
            return grey700;
        default:
            return <ContentSend hoverColor={lightGreen700} />;
            break;
    }
}

getButtonIcon(){
    switch (this.props.actionStatus) {
        case ACTION_DONE:
            return <ActionDone color={grey900} />;
            break;
        case ACTION_LOADING:
            return <CircularProgress size={56} color={lightGreen700} thickness={5} />;
        case ACTION_READY:
            return <ContentSend hoverColor={lightGreen700} />;
        default:
            return <ContentSend hoverColor={lightGreen700} />;
            break;
    }
}
getButtonClassName(){
    switch (this.props.actionStatus) {
        case ACTION_DONE:
            return "SendButtonDisabled";
            break;
        case ACTION_LOADING:
            return "SendButtonDisabled";
        case ACTION_READY:
            return this.props.className;
        default:
            return <ContentSend hoverColor={lightGreen700} />;
            break;
    }
}
getButtonDisabled(){
    switch (this.props.actionStatus) {
        case ACTION_DONE:
            return true;
            break;
        case ACTION_LOADING:
            return false;
        case ACTION_READY:
            return false;
        default:
            return <ContentSend hoverColor={lightGreen700} />;
            break;
    }
}
getIconStyle(){
    
    switch (this.props.actionStatus) {
        case ACTION_DONE:
            return {fill:grey900};
            break;
        case ACTION_LOADING:
            return {fill:grey900};
        case ACTION_READY:
            return {fill:white};
        default:
            return {fill:white};
            break;
    }
}
    render(){
        return(
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <FloatingActionButton 
                        zDepth={1}
                        disabled={this.getButtonDisabled()}
                        disabledColor={lightGreen700}
                        className={this.getButtonClassName()} 
                        iconClassName={this.props.iconClassName}
                        iconStyle={this.getIconStyle()}
                        backgroundColor={this.getSendButtonColor()}
                        onClick={this.props.onClick}>
                        {
                            this.getButtonIcon()
                        }
                    </FloatingActionButton>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default SendButton;


