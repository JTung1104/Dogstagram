var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');
var UserStore = new Store(AppDispatcher);

var _users = [];

var resetUsers = function (users) {
  _users = users;
};

UserStore.findById = function (id) {
  var user = _users.find(function(user) {
    return (user.id === id);
  });

  return user;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USER_RECEIVED:
      resetUsers(payload.user);
      UserStore.__emitChange();
      break;
  }
};

UserStore.all = function () {
  return _users.slice();
};

module.exports = UserStore;
