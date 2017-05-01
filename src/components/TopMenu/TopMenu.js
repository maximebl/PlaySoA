import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './TopMenu.css';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';


class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            positionMode: 'absoluteMenu',
            TopMenuContainer: 'TopMenu_Container_absolute'
        };
        
        var el = document.getElementsByClassName('TopMenu_Container');
        
        var handler = this.onVisibilityChange(el, (function(isMenuVisible) {
            let positionMode = this.state.positionMode;
            
            if( isMenuVisible === true ){
                console.log('menu visible: ' + isMenuVisible);
                this.setState({ positionMode: 'absoluteMenu' });
                this.setState({ TopMenuContainer: 'TopMenu_Container_absolute' });
            }
            else{
                console.log('menu not visible: ' + isMenuVisible);
                this.setState({ positionMode: 'fixedMenu' });
                this.setState({ TopMenuContainer: 'TopMenu_Container_fixed' });
            }
        }).bind(this));

        if (window.addEventListener) {
            addEventListener('scroll', handler, false); 
        } else if (window.attachEvent)  {
            window.attachEvent('onscroll', handler);
        }
    }

componentWillMount() {
    //do
}
componentWillUnmount() {
    //undo
}

onVisibilityChange(el, callback) {
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
                        <Paper className={this.state.positionMode} zDepth={2}> 
                            <nav className={this.state.TopMenuContainer}>
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
                        </Paper >
                    </MuiThemeProvider>
                </Router>
            </div>
        );
    }
}
export default TopMenu;

