import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './TopMenu.css';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import {grey900} from 'material-ui/styles/colors'

const bigLabel = '17px'
const smallLabel = '12px'

class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            positionMode: 'absoluteMenu',
            TopMenuContainer: 'TopMenu_Container_absolute',
            TopMenuFont: {fontSize: bigLabel},
            SoALabel: "Skyland of Arnythos",
            GridItemClass: "TopMenu_GridItem_absolute"
        };
        
        var handler = this.onVisibilityChange((function(isMenuVisible) {
            
            if( isMenuVisible === true ){ 
                this.setState({ 
                    positionMode: 'absoluteMenu', 
                    TopMenuContainer: 'TopMenu_Container_absolute',
                    TopMenuFont: {fontSize: bigLabel},
                    SoALabel: 'Skyland of Arnythos',
                    GridItemClass: "TopMenu_GridItem_absolute"
                });
            }
            else{
                this.setState({ 
                    positionMode: 'fixedMenu', 
                    TopMenuContainer: 'TopMenu_Container_fixed',
                    TopMenuFont: {fontSize: smallLabel},
                    SoALabel: 'SoA',
                    GridItemClass: "TopMenu_GridItem_fixed"
                });
            }
        }).bind(this));

        if (window.addEventListener) {
            addEventListener('scroll', handler, false); 
        } else if (window.attachEvent)  {
            window.attachEvent('onscroll', handler);
        }
    }

onVisibilityChange(callback) {
    var old_visible;
    return (function () {
        var visible = window.scrollY < 100;
        if (visible !== old_visible) {
            old_visible = visible;      
            if (typeof callback == 'function') {
                callback(visible);
            }
        }
    }).bind(this);
}
render(){
    return (
        <div>
            <Router>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Paper className={this.state.positionMode} style={{backgroundColor:grey900}} zDepth={2}> 
                        <nav className={this.state.TopMenuContainer}>
                            <div className={this.state.GridItemClass}>
                                <FlatButton label="Home" labelStyle={this.state.TopMenuFont} fullWidth={true} containerElement={<Link to="/home"/>} />
                            </div>
                            <div className={this.state.GridItemClass}>
                                <FlatButton label="News" labelStyle={this.state.TopMenuFont} fullWidth={true} containerElement={<Link to="/news"/>}/>
                            </div>            
                            <div className={this.state.GridItemClass}>
                                <FlatButton label={this.state.SoALabel} labelStyle={this.state.TopMenuFont} fullWidth={true} containerElement={<Link to="/soa"/>}/>
                            </div>            
                            <div className={this.state.GridItemClass}>
                                <FlatButton label="Media" labelStyle={this.state.TopMenuFont} fullWidth={true} containerElement={<Link to="/media"/>}/>
                            </div>            
                            <div className={this.state.GridItemClass}>
                                <FlatButton label="Contact" labelStyle={this.state.TopMenuFont} fullWidth={true} containerElement={<Link to="/contact"/>}/>
                            </div>            
                            <div className={this.state.GridItemClass}>
                                <FlatButton label="Team" labelStyle={this.state.TopMenuFont} fullWidth={true} containerElement={<Link to="/team"/>}/>
                            </div>            
                        </nav>
                    </Paper >
                </MuiThemeProvider>
            </Router>
        </div>
    );
}
}
export default TopMenu;

