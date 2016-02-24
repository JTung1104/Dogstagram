var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchPosts: function () {
    $.ajax({
      method: "GET",
      url: "/api/posts",
      success: function (data) {
        ApiActions.receiveAllPosts(data);
      },
      dataType: "json"
    });
  },
  fetchSinglePost: function (id) {
    $.ajax({
      method: "GET",
      url: "/api/posts/" + id,
      success: function (data) {
        ApiActions.receiveSinglePost(data);
      },
      dataType: "json"
    });
  },
  createPost: function (data) {
    $.ajax({
      method: "POST",
      url: "/api/posts/",
      data: {post: data},
      success: function (post) {
        ApiActions.receiveSinglePost([post]);
      },
      dataType: "json"
    });
  },
  deletePost: function (id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id,
      success: function (post) {
        ApiActions.receiveSinglePost([post]);
      },
      dataType: "json"
    });
  }
};

module.exports = ApiUtil;
