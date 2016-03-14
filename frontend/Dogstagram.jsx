var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Modal = require('react-modal');
var App = require('./components/app');
var Index = require('./components/index');
var UserShow = require('./components/user_show');
var PostShow = require('./components/post_show');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="users/:id" component={UserShow}/>
    <Route path="posts/:id" component={PostShow}/>
  </Route>
);

$(function (){
  var appElement = document.getElementById('root');

  if (appElement) {
    Modal.setAppElement(appElement);
    ReactDOM.render(
      <Router>{routes}</Router>,
        appElement
    );
  }
});
