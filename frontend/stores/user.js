var Store = require('flux/utils').Store,
     AppDispatcher = require('../dispatcher/dispatcher'),
     UserConstants = require('../constants/user_constants'),
     UserStore = new Store(AppDispatcher);

import merge from 'lodash/merge';

var _users = {},
    _search = {};

var resetUsers = function (users) {
  _search = {};

  users.forEach(function(user) {
    _search[user.id] = user;
  });

  addUsers(users);
};

var addUsers = function (users) {
  users.forEach(function(user) {
    _users[user.id] = user;
  });
};

var addFollower = function (relationship) {
  var user = UserStore.findById(relationship.followed_id);

  user.followed = true;
  user.followers.push(UserStore.findById(currentUserId));
};

var removeFollower = function (relationship) {
  var user = UserStore.findById(relationship.followed_id);

  var index;

  for (var i = 0; i < user.followers.length; i++) {
    if (user.followers[i].id === currentUserId) {
      index = i;
      break;
    }
  }

  user.followed = false;
  user.followers.splice(index, 1);
};

UserStore.findById = function (id) {
  return _users[id];
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      addUsers(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.USERS_RECEIVED:
      addUsers(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.FOLLOW_RECEIVED:
      addFollower(payload.relationship);
      UserStore.__emitChange();
      break;
    case UserConstants.FOLLOW_DELETED:
      removeFollower(payload.relationship);
      UserStore.__emitChange();
      break;
    case UserConstants.RESULTS_RECEIVED:
      resetUsers(payload.results);
      UserStore.__emitChange();
      break;
  }
};

UserStore.all = function () {
  return merge({}, _users);
};

UserStore.results = function () {
  return merge({}, _search);
};


module.exports = UserStore;
