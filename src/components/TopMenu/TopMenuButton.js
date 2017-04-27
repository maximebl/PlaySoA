import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class TopMenuButton extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <FlatButton label={"Full width"} fullWidth={true} />
                </MuiThemeProvider>                    
            </div>
        )
    }
}


export default TopMenuButton;