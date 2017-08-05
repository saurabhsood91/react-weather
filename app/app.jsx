var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

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
