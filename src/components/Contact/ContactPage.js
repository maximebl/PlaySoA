import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Contact.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ContactForm from './ContactForm';

class ContactPage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="ContactContainer">
                    <div className="ContactGridItem">
                        <div>
                            <p>CONTACT</p>  
                            <ContactForm />
                        </div>
                    </div>
            </div>
        );
    }
}
export default ContactPage;

