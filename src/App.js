import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TopMenu from './components/TopMenu/TopMenu';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
    
  render() {
    return (
        <div>
            <Router>
                <div>
                    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                        <TopMenu />
                    </MuiThemeProvider>
                    <div className="tempSpace">
                        <Route path="/home" component={HomePage}/>
                        <Route path="/contact" component={ContactPage}/>
                    </div>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
