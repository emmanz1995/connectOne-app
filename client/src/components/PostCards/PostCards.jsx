import React from 'react';
import Trash from '../../assets/icons/trash.svg';
import Update from '../../assets/icons/update.svg';
import StarOutline from '../../assets/icons/star (1).svg';
import Comment from '../../assets/icons/comments.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import './postCard.scss';

const PostCards = ({ post, deletePost }) => {
    const userInfo = JSON.parse(localStorage.getItem('jwt'));
    return (
        <div className="postCard" key={post?._id}>
            <div className="postCard__header">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gridGap: '10px'}}>
                        <div className="img-container">
                            <img src={post?.postedBy?.avatar} alt="" width="600" height="400" className="image" />
                        </div>
                        {post?.postedBy?.username}
                    </div>
                    {userInfo?._id === post?.postedBy?._id && (
                        <span style={{ display: 'flex'}}>
                        <div className="icon-wrapper">
                            <img src={Trash} alt="" width="600" height="400" className="icon" onClick={() => deletePost(post?._id)} />
                        </div>
                    </span>
                    )}
                </div>
                <div>
                    <span>
                        <h2>{post?.title}</h2>
                    </span>
                </div>
            </div>
            <div className="postCard__body">
                <img src={post?.image} width="600" height="400" className="post-image"  alt="" />
            </div>
            <div className="postCard__footer">
                <span style={{ display: 'flex', alignItems: 'center', gridGap: '30px'}}>
                    <div className="star-icon">
                        <img src={StarOutline} alt="" width="600" height="400" className="icon" /> {post?.like?.length}
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
