import React, { useEffect, useState } from 'react';
import './comments.scss';
import {getComments, onAddComment} from '../../app/action/comments';
import { useSelector, useDispatch } from 'react-redux';

const Comments = ({ postId }) => {
    const commentContent = useSelector(state => state?.comments);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const handleComment = (evt) => {
        evt.preventDefault();
        dispatch(onAddComment(comment, postId))
    }
    useEffect(() => {
        dispatch(getComments(postId))
    }, [dispatch, postId])
    return (
        <div>
            <div className="comment-section">
                <p>{commentContent?.length > 0 ? commentContent?.map(content => (
                    <div key={content._id}>
                        <p>{content?.comment}</p>
                    </div>
                )): <p>No Comments found!</p>}</p>
            </div>
            <form onSubmit={handleComment}>
            <textarea
                className="input-comment"
                name="comment"
                placeholder="Type your Comment"
                cols="30"
                rows="10"
                value={comment}
                onChange={(evt) => setComment(evt.target.value)}
            />
                <button type="submit" className="btn-comment">Comment on Post</button>
            </form>
            {/*<CommentForm postId={postId} />*/}
        </div>
    );
}

export default Comments;
