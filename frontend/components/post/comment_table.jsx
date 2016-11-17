import React from 'react';
import ReactDOM from 'react-dom';
import CommentItem from './comment_item';

const CommentTable extends React.Component {
    constructor({ post, click }) {
        super({ post, click });
        this.setState({ shouldScrollBottom: false });
    }
    
    componentWillUpdate() {
        var node = ReactDOM.findDOMNode(this);
        this.state.shouldScrollBottom = node.scrollTop + node.offsetHeight === (node.scrollHeight + 1);
    }
    
    componentDidUpdate() {
        if (post.comments.length > 0) {
            if (this.state.shouldScrollBottom || post.comments[post.comments.length - 1].user_id === currentUserId) {
                var node = ReactDOM.findDOMNode(this);
                node.scrollTop = (node.scrollHeight + 1)
            }
        }
    }

    render() {
        var classes = window.location.hash.includes("users") ? "comment-table user-show" : "comment-table";
        var CommentItems = post.comments.map((comment, idx) => <CommentItem key={idx} click={click} post={post} comment={comment}/>);

        return (
          <div className={classes}>
            {CommentItems}
          </div>
        );
    }
}

export default CommentTable;