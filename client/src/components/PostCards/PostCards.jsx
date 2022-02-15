import React from 'react';
import Trash from '../../assets/icons/trash.svg';
import Update from '../../assets/icons/update.svg';
import './postCard.scss';

const PostCards = ({ post }) => {
    return (
        <div className="postCard">
            <div className="postCard__header">
                <span>
                    <h2>{post?.title}</h2>
                </span>
                <span style={{ display: 'flex'}}>
                    <div className="icon-wrapper">
                        <img src={Update} alt="" width="600" height="400" className="icon" />
                    </div>
                    <div className="icon-wrapper">
                        <img src={Trash} alt="" width="600" height="400" className="icon" />
                    </div>
                </span>
            </div>
            <div className="postCard__body">
                <img src={post?.image} alt="post image" width="600" height="400" className="post-image" />
            </div>
            <div className="postCard__footer">
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default PostCards;
