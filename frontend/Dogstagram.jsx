var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var ApiUtil = require('./util/api_util');
var PostStore = require('./stores/post');
var App = require('./components/app');
var Index = require('./components/index');

//     <Route path="photos/:photoId" component={StuffShow}>
//       <Route path="photoDetail" componet
//
// <Link to="photos/" + this.state.photo_id
//
var routes = (
  <Route component={App} path="/">
    <IndexRoute component={Index}/>
  </Route>
);

$(document).ready(function (){
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});

window.ApiUtil = ApiUtil;
window.PostStore = PostStore;
