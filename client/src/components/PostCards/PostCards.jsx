import React from 'react';
import Trash from '../../assets/icons/trash.svg';
import Update from '../../assets/icons/update.svg';
import StarOutline from '../../assets/icons/star (1).svg';
import Comment from '../../assets/icons/comments.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
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
                <span style={{ display: 'flex', alignItems: 'center', gridGap: '30px'}}>
                    <div className="star-icon">
                        <img src={StarOutline} alt="" width="600" height="400" className="icon" /> 76
                    </div>
                    <div className="comment-icon">
                        <img src={Comment} alt="" width="600" height="400" className="icon"/>{' '} 4
                    </div>
                </span>
                <div className="bookmark-icon">
                    <img src={Bookmark} alt="" width="600" height="400" className="icon" />
                </div>
            </div>
        </div>
    );
}

export default PostCards;
