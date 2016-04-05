var AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var SearchActions = {
  receiveSearchResults: function (results) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RESULTS_RECEIVED,
      results: results
    });
  }
};
module.exports = SearchActions;
