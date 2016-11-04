import React from 'react'
import { render } from 'react-dom'
import App from './app'
import About from './about'
import {Router, Route, hashHistory, Link} from 'react-router'
render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
  document.body
);
