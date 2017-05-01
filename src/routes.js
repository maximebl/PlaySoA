import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ContactPage from './components/ContactPage/ContactPage';

export default (
    <Route path="/" component={ContactPage}>
        <Route path="contact" component={ContactPage} />
    </Route>
);