var React = require('react'),
 ReactDOM = require('react-dom'),
 Router = require('react-router').Router,
 Route = require('react-router').Route,
 IndexRoute = require('react-router').IndexRoute,
 Modal = require('react-modal'),
 App = require('./components/app'),
 Index = require('./components/index'),
 UserShow = require('./components/user_show'),
 PostShow = require('./components/post_show');

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
