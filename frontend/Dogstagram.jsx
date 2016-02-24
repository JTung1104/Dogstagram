var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var ApiUtil = require('./util/api_util');
var PostStore = require('./stores/post');
var App = require('./components/app');

var routes = (
  <Route component={App} path="/" />
)

$(document).ready(function (){
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});

window.ApiUtil = ApiUtil;
window.PostStore = PostStore;
