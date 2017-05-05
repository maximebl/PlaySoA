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
        case 'done':
            return lightGreen700;
            break;
        case 'loading':
            return grey900;
        case 'ready':
            return grey700;
        default:
            return <ContentSend hoverColor={lightGreen700} />;
            break;
    }
}

getButtonIcon(){
    switch (this.props.actionStatus) {
        case 'done':
            return <ActionDone color={grey900} />;
            break;
        case 'loading':
            return <CircularProgress size={56} color={lightGreen700} thickness={5} />;
        case 'ready':
            return <ContentSend hoverColor={lightGreen700} />;
        default:
            return <ContentSend hoverColor={lightGreen700} />;
            break;
    }
}
getButtonClassName(){
    switch (this.props.actionStatus) {
        case 'done':
            return null;
            break;
        case 'loading':
            return null;
        case 'ready':
            return this.props.className;
        default:
            return <ContentSend hoverColor={lightGreen700} />;
            break;
    }
}
getButtonDisabled(){
    switch (this.props.actionStatus) {
        case 'done':
            return true;
            break;
        case 'loading':
            return false;
        case 'ready':
            return false;
        default:
            return <ContentSend hoverColor={lightGreen700} />;
            break;
    }
}
getIconStyle(){
    
    switch (this.props.actionStatus) {
        case 'done':
            return {fill:grey900};
            break;
        case 'loading':
            return {fill:grey900};
        case 'ready':
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


