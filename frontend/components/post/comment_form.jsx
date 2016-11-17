import React from 'react';
import ApiUtil from '../../util/api_util';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.setState({ body: "" });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        var comment = { body: this.state.body, post_id: this.props.post.id };
        ApiUtil.createComment(comment, () => this.setState({body: ""}));
    }

    linkState(key) {
        return (event => this.setState({[key]:event.currentTarget.value}));
    }
    
    render() {
        return (
            <div className="comment-form-div">
                <form onSubmit={this.handleSubmit} className="comment-form">
                    <input className="comment-field"
                        type="text"
                        placeholder="Add a comment..."
                        onChange={this.linkState('body')}
                        value={this.state.body}/>
                </form>
            </div>
        );
    }
}

export default CommentForm;
