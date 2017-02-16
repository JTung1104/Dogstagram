import React from 'react';
import CommentTable from './comment_table';
import NumLikes from './num_likes';
import CommentForm from './comment_form';
import DeleteButton from './delete_button';
import LikeButton from './like_button';
import makeCn from '../../util/makeCn';
import styles from './comment_box.css';
const cn = makeCn({ _:styles });

const CommentBox = ({ post, click, handleDelete }) => (
    <div className={cn("_box tl")}>
      <NumLikes post={post}/>
      <CommentTable click={click} post={post}/>
      <LikeButton post={post}/>
      <CommentForm post={post}/>
      <DeleteButton handleDelete={handleDelete} closeModal={click} post={post}/>
    </div>
);

export default CommentBox;