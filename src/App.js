import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TopMenu from './components/TopMenu/TopMenu';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

class App extends Component {
    
  render() {
    return (
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <TopMenu />
            </MuiThemeProvider>
          <div className="container">
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/sun.svg" alt="Sun" width="15%" />
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/cloud_copy.svg" alt="Cloud" width="30%" />
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/cloud_copy.svg" alt="Cloud" width="30%" />
                </div>
                <div className="spring"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/rain.svg" alt="Rain" width="60%" /></div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/rain.svg" alt="Rain" width="60%" />
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/rain.svg" alt="Rain" width="27%" />
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/dragonfly.svg" alt="Dragonfly" width="30%" />
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/butterfly.svg" alt="Butterfly" width="30%" />
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/dragonfly.svg" alt="Dragonfly" width="30%" />
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/butterfly.svg" alt="Butterfly" width="30%"/>
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/flower1.svg" alt="First flower" />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/flower2.svg" alt="Second flower" />
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/flower3.svg" alt="Third flower" />
                </div>
                <div className="spring">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/80625/flowers2.svg" alt="Fourth flower" />
                </div>
            </div>
                
        </div>
    );
  }
}

export default App;
