import React from 'react';
import ReactDom from 'react-dom';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import Modal from 'react-modal';
import Index from './components/index';
import UserShow from './components/profile/user_show';

var routes = (
  <Route path="/">
    <IndexRoute component={Index}/>
    <Route path="users/:id" component={UserShow}/>
  </Route>
);

$(function (){
  var appElement = document.getElementById('root');

  if (appElement) {
    Modal.setAppElement(appElement);
    ReactDOM.render(
      <Router history={hashHistory}>{routes}</Router>,
      appElement
    );
  }
});
