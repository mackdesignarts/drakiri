import React from 'react';
import { Router, Route } from 'react-router';
import {  } from './templates';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={Template1}/>
      <Route exact path="/welcome" component={Template2}/>
      <Route exact path="/news" component={Template3}/>
      <Route exact path="/info" component={Template1}/>
      <Route exact path="/activities" component={Template2}/>
      <Route exact path="/nesting-grounds" component={Template3}/>
      <Route exact path="/forum" component={Template2}/>
      <Route exact path="/privacy-policy" component={Template3}/>
      <Route exact path="/terms-of-use" component={Template1}/>
      <Route exact path="/support" component={Template2}/>
    </Router>
);

export default createRoutes;