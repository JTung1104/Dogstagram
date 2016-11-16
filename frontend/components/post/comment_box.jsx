import React from 'react';
import CommentTable from './comment_table';
import NumLikes from './num_likes';
import CommentForm from './comment_form';
import DeleteButton from './delete_button';
import LikeButton from './like_button';

const CommentBox = ({ post, click, handleDelete }) => (
    <div className="comment-box">
      <NumLikes post={post}/>
      <CommentTable click={click} post={post}/>
      <LikeButton post={post}/>
      <CommentForm post={post}/>
      <DeleteButton handleDelete={handleDelete} closeModal={click} post={post}/>
    </div>
);

export default CommentBox;