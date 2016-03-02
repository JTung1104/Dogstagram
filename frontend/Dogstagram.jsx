var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Modal = require('react-modal');
var ApiUtil = require('./util/api_util');
var PostStore = require('./stores/post');
var UserStore = require('./stores/user');
var App = require('./components/app');
var Index = require('./components/index');
var UserShow = require('./components/user_show');
var PostShow = require('./components/post_show');

//     <Route path="photos/:photoId" component={StuffShow}>
//       <Route path="photoDetail" componet
//
// <Link to="photos/" + this.state.photo_id

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="users/:id" component={UserShow}/>
    <Route path="posts/:id" component={PostShow}/>
  </Route>
);

$(document).ready(function (){
  var appElement = document.getElementById('root');
  Modal.setAppElement(appElement);

  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById("root")
  );
});

window.ApiUtil = ApiUtil;
window.PostStore = PostStore;
window.UserStore = UserStore;
