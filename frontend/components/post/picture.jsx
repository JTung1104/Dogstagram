import React from 'react';
import Modal from 'react-modal';
import PictureHover from './picture_hover';

const Picture = ({ photoOptions, imageUrl, userShow, handleDelete, post }) => (
    <div className="picture">
        <PictureHover imageUrl={imageUrl} userShow={userShow} post={post}/>
        <img src={"http://res.cloudinary.com/dsolojfgkabc/image/upload/" + photoOptions + imageUrl}/>
    </div>
);

export default Picture;