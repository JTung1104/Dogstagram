var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/search_constants');
var SearchStore = new Store(AppDispatcher);

var _users = {};

var resetUserSearch = function (results) {
  _users = {};

  results.forEach(function(user) {
    _users[user.id] = user;
  });
};

SearchStore.all = function () {
  return Object.assign({}, _users);
};

SearchStore.findById = function (id) {
  return _users[id];
};

SearchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SearchConstants.RESULTS_RECEIVED:
      resetUserSearch(payload.results);
      SearchStore.__emitChange();
      break;
  }
};

module.exports = SearchStore;
