var React = require('react');
var PostStore = require('../stores/post');
var ApiUtil = require('../util/api_util');
var Post = require('./post');

var Index = React.createClass({
  getInitialState: function () {
    return {
      posts: PostStore.all()
    };
  },
  render: function () {
    var posts = this.state.posts.map(function(post, idx) {
      return (
        <article key={idx} className="post">

        </article>
      );
    });

    return (
      <div>
        Index Div
      </div>
    );
  }
});

module.exports = Index;
