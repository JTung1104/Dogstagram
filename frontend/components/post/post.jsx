import React from 'react';
import Picture from './picture';
import PostHeader from './post_header';
import CommentBox from './comment_box';
import makeCn from '../../util/makeCn';
import styles from './post.css';
const cn = makeCn({ _:styles });

const Post = ({ post, handleDelete }) => (
  <article className={cn("_post bg-white rounded")}>
    <PostHeader post={post}/>
    <Picture post={post}
             photoOptions={"w_600,c_scale,f_auto/"}
             imageUrl={post.image_url}/>
     <CommentBox post={post} handleDelete={handleDelete}/>
  </article>
);

export default Post;