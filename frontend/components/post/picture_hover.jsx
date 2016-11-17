import React from 'react';
import Modal from 'react-modal';
import PostHeader from './post_header';
import CommentBox from './comment_box';

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
    flexDirection              : 'row',
    border                     : 'none',
    background                 : 'none',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '0px',
    height                     : '600px',
    width                      : '935px',
    overflow                   : 'none'
  }
};

//TODO: ASK MAX ABOUT PROPS OBJECT DESTRUCTURING
class PictureHover extends React.Component {
	constructor(props) {
		super(props);
		this.state = { modalIsOpen: false };
	}
	
	openModal() {
    	this.setState({ modalIsOpen: true });
  	}

    closeModal() {
    	this.setState({modalIsOpen: false});
    }
  	
  	render() {
	    if (this.props.userShow) {
	        var url = "http://res.cloudinary.com/dsolojfgkabc/image/upload/",
	            photoOptions="w_600,h_600,c_fill,f_auto/",
	            likes = this.props.post.likes.length,
	            comments = this.props.post.comments.length;

	        return (
	        	<div onClick={this.openModal} className="picture-hover">
	        		<div className="picture-stats-box">
	            		<span className="like-icon"></span>
	            		<span className="like-count">{likes}</span>
	            		<span className="comment-icon"></span>
	            		<span className="comment-count">{comments}</span>

			            <Modal
			                isOpen={this.state.modalIsOpen}
			                onRequestClose={this.closeModal}
			                style={customStyle}>

			            	<div className="modal picture">
			                	<img src={url + photoOptions + this.props.imageUrl}/>
			                </div>

			                <div className="modal-post-show">
			                	<PostHeader post={this.props.post}/>
			                	<CommentBox
			                  		handleDelete={this.props.handleDelete}
			                  		click={this.closeModal}
			                  		post={this.props.post}/>
			                </div>

			                <button className="modal-button" onClick={this.closeModal}/>
			            </Modal>
	          		</div>
	        	</div>
	      	);
	    } else {
	    	return(<div></div>);
	    }
	}
}

export default PictureHover;