import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {grey900, lightGreen700, grey700} from 'material-ui/styles/colors'
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
    }

getSendButtonColor() {
    return this.props.isClicked ? grey900 : lightGreen700;
}
        render(){
            return(
                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                        <FloatingActionButton zDepth={1} 
                            className={this.props.className} 
                            iconClassName={this.props.iconClassName}
                            backgroundColor={this.getSendButtonColor()}
                            onClick={this.props.onClick}>
                                {
                                this.props.isClicked ?
                                <CircularProgress size={56} color={lightGreen700} thickness={5} zDepth={900}/>
                                : <ContentSend hoverColor={lightGreen700} />
                                }
                                
                        </FloatingActionButton>
                    </MuiThemeProvider>
                </div>
            );
        }
}
export default SendButton;


