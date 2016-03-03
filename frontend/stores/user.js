var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var UserStore = new Store(AppDispatcher);

var _users = {};

var resetUsers = function (users) {
  _users = {};

  users.forEach(function(user) {
    _users[user.id] = user;
  });
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
  }
};

UserStore.all = function () {
  return Object.assign({}, _users);
};

module.exports = UserStore;
