import React from 'react';
import ReactDOM from 'react-dom';
import CommentItem from './comment_item';
import makeCn from '../../util/makeCn';
import styles from './comment_table.css';
const cn = makeCn({ _:styles });

class CommentTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shouldScrollBottom: false };
    }
    
    componentWillUpdate() {
        var node = ReactDOM.findDOMNode(this);
        this.state.shouldScrollBottom = node.scrollTop + node.offsetHeight === (node.scrollHeight + 1);
    }
    
    componentDidUpdate() {
        var post = this.props.post;
        if (post.comments.length > 0) {
            if (this.state.shouldScrollBottom || post.comments[post.comments.length - 1].user_id === currentUserId) {
                var node = ReactDOM.findDOMNode(this);
                node.scrollTop = (node.scrollHeight + 1)
            }
        }
    }

    render() {
        var post = this.props.post;
        var click = this.props.click;
        var classes = window.location.hash.includes("users") ? "_table _user-show tl" : "_table tl";
        var CommentItems = post.comments.map((comment, idx) => <CommentItem key={idx} click={click} post={post} comment={comment}/>);

        return (
          <div className={cn(classes)}>
            {CommentItems}
          </div>
        );
    }
}

export default CommentTable;