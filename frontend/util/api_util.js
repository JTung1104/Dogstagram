var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchPosts: function () {
    $.ajax({
      method: "GET",
      url: "api/posts",
      success: function (data) {
        ApiActions.receiveAllPosts(data);
      },
      dataType: "json"
    });
  }
};
