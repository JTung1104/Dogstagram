import React from 'react';
import ApiUtil from '../../util/api_util';
import makeCn from '../../util/makeCn';
import styles from './comment_form.css';
const cn = makeCn({ _:styles });

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { body: "" };
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
            <div className={cn("_box")}>
                <form onSubmit={this.handleSubmit} className={cn("w-75 ma0 helvetica")}>
                    <input className={cn("_field outline-0 bn relative helvetica pa0 f6")}
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
