import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './TopMenu.css';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const TopMenu = () => {
    return (
        <div>
            <Router>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <nav className="TopMenu_Container">
                        <div className="TopMenu_GridItem">
                            <FlatButton label="Home" fullWidth={true} containerElement={<Link to="/home"/>}/>
                        </div>
                        <div className="TopMenu_GridItem">
                            <FlatButton label="News" fullWidth={true} containerElement={<Link to="/news"/>}/>
                        </div>            
                        <div className="TopMenu_GridItem">
                            <FlatButton label="Skyland of Arnythos" fullWidth={true} containerElement={<Link to="/soa"/>}/>
                        </div>            
                        <div className="TopMenu_GridItem">
                            <FlatButton label="Media" fullWidth={true} containerElement={<Link to="/media"/>}/>
                        </div>            
                        <div className="TopMenu_GridItem">
                            <FlatButton label="Contact" fullWidth={true} containerElement={<Link to="/contact"/>}/>
                        </div>            
                        <div className="TopMenu_GridItem">
                            <FlatButton label="Team" fullWidth={true} containerElement={<Link to="/team"/>}/>
                        </div>            
                    </nav>
                </MuiThemeProvider>
            </Router>
        </div>
    );
};

export default TopMenu;

