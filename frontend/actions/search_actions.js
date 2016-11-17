import AppDispatcher from '../dispatcher/dispatcher';
import UserConstants from '../constants/user_constants';

var SearchActions = {
  receiveSearchResults: function (results) {
    AppDispatcher.dispatch({
      actionType: UserConstants.RESULTS_RECEIVED,
      results: results
    });
  }
};

export default SearchActions;