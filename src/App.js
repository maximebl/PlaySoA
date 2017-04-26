import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

class App extends Component {
  render() {
    return (
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <MyAwesomeReactComponent/>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
