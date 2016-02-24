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
  },
  fetchSinglePost: function (id) {
    $.ajax({
      method: "GET",
      url: "api/posts/" + id,
      success: function (data) {
        ApiActions.receiveSinglePost(data);
      },
      dataType: "json"
    });
  }
};

module.exports = ApiUtil;
