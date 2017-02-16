import React from 'react';
import Modal from 'react-modal';
import PictureHover from './picture_hover';
import makeCn from '../../util/makeCn';
import styles from './picture.css';
const cn = makeCn({ _:styles });

const Picture = ({ photoOptions, imageUrl, userShow, handleDelete, post }) => (
    <div className={cn("_picture relative")}>
        <PictureHover imageUrl={imageUrl} userShow={userShow} post={post}/>
        <img src={"http://res.cloudinary.com/dsolojfgkabc/image/upload/" + photoOptions + imageUrl}/>
    </div>
);

export default Picture;