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
  }
};

UserStore.all = function () {
  var users = {};

  Object.keys(_users).forEach(function(key) {
    users[key] = _users[key];
  });

  return users;
};

module.exports = UserStore;
