import React from 'react';
import Trash from '../../assets/icons/trash.svg';
import Update from '../../assets/icons/update.svg';
import StarOutline from '../../assets/icons/star (1).svg';
import StarFilled from '../../assets/icons/star.svg';
import Comment from '../../assets/icons/comments.svg';
import Bookmark from '../../assets/icons/bookmark.svg';
import './postCard.scss';
import { useDispatch } from 'react-redux';
import { onLikePost, onDisLikePost } from '../../app/action/posts';

const PostCards = ({ post, deletePost }) => {
    const dispatch = useDispatch();
    const userInfo = JSON.parse(localStorage.getItem('jwt'));
    const handleLikePost = (id) => {
        dispatch(onLikePost(id))
    }
    const handleDisLikePost = (id) => {
        dispatch(onDisLikePost(id))
    }
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
                        {userInfo ? <img src={StarOutline} alt="" width="600" height="400" className="icon" onClick={()=> handleLikePost(post?._id)} /> : <img src={StarFilled} alt="" width="600" height="400" className="icon" onClick={()=> handleDisLikePost(post?._id)} />} {post?.like?.length}
                    </div>
                    <a className="comment-icon" href={`/post/${post?._id}`}>
                        <img src={Comment} alt="" width="600" height="400" className="icon" />{' '} 4
                    </a>
                </span>
                <div className="bookmark-icon">
                    <img src={Bookmark} alt="" width="600" height="400" className="icon" />
                </div>
            </div>
        </div>
    );
}

export default PostCards;
