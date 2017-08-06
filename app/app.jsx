var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// Load foundation
// use css loader so that it can be required
// chain style loader as well
require('style!css!foundation-sites/dist/foundation.min.css');

// Load our own styles
require('style!css!applicationStyles');

$(document).foundation();

// Use ES6 destructuring to import stuff needed for React Routing
// var Route = require('react-router').Route // Otherwise
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="example" component={Example}></Route>
            <IndexRoute components={Weather}></IndexRoute>
        </Route>
    </Router>,
    document.getElementById('app')
);
