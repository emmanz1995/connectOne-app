import React, { useEffect, useState } from 'react';
import './comments.scss';
import {getComments, onAddComment} from '../../app/action/comments';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

const Comments = ({ postId }) => {
    const commentContent = useSelector(state => state?.comments);
    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const handleComment = (evt) => {
        evt.preventDefault();
        const formData = {
            comment: comment
        }
        dispatch(onAddComment(formData, postId))
    }
    useEffect(() => {
        dispatch(getComments(postId))
    }, [dispatch, postId])
    return (
        <div>
            <div className="comment-section">
                <p>{commentContent?.length > 0 ? commentContent?.map(content => (
                    <div key={content._id} className="row comment__section">
                        <div>
                            <p>{content?.comment}</p>
                        </div>
                        <div>
                            <p>{content?.reader?.username} | {moment(content?.createdAt).format('DD/MM/YYYY, hh:mm')}</p>
                        </div>
                    </div>
                )): <p>No Comments found!</p>}</p>
            </div>
            <br />
            <form onSubmit={handleComment}>
            <textarea
                className="input-comment"
                name="comment"
                placeholder="Type your Comment"
                cols="30"
                rows="5"
                value={comment}
                onChange={(evt) => setComment(evt.target.value)}
            />
                <button type="submit" className="btn-comment">Comment on Post</button>
            </form>
        </div>
    );
}

export default Comments;
