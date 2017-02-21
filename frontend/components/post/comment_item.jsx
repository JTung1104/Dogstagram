import React from 'react';
import Modal from 'react-modal';
import ApiUtil from '../../util/api_util';
import makeCn from '../../util/makeCn';
import styles from './comment_item.css';
const cn = makeCn({ _:styles });

var customStyle = {
  overlay : {
    position          : 'fixed',
    display           : 'flex',
    justifyContent    : 'center',
    alignItems        : 'center',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.5)'
  },
  content : {
    position                   : 'static',
    display                    : 'flex',
    justifyContent             : 'space-around',
    alignItems                 : 'center',
    flexDirection              : 'column',
    border                     : 'none',
    backgroundColor            : 'rgba(128,128,128,0.4)',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '2px',
    minWidth                   : '100px',
    minHeight                  : '100px',
    height                     : '100px',
    width                      : '500px'
  }
};

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        if (typeof this.props.click === "function") { this.props.click(); }
        window.location.href = "#/users/" + this.props.comment.user_id;
    }
    
    openModal(event) {
        event.preventDefault();
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
       this.setState({ modalIsOpen: false });
    }
  
    getDeleteCommentButton() {
        if (this.props.comment.user_id === currentUserId || this.props.post.user_id === currentUserId) {
            return (
                <button
                    title="Delete Comment"
                    className={cn("_delete fr bn bg-transparent")}
                    onClick={this.openModal}/>
            );
        }
    }

    handleDelete(event) {
        event.preventDefault();
        ApiUtil.destroyComment(this.props.comment);
        this.closeModal();
    }

    render() {
        return (
            <div className={cn("_item tl helvetica")}>
                <a 
                    onClick={this.onClick}
                    className={cn("_username pointer brand-blue montserrat tl")}>
                    {this.props.comment.user}
                </a>

                <p className={cn("tl m0 di helvetica")}>
                    {this.props.comment.body}
                </p>

                {this.getDeleteCommentButton()}

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyle}>

                    <button className="confirm-delete" onClick={this.handleDelete}>
                        Delete Comment
                    </button>

                    <button className="cancel-delete" onClick={this.closeModal}>
                        Cancel
                    </button>
                </Modal>
            </div>
        );
    }
}

export default CommentItem;