import React from 'react';
import './card.scss';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Card = ({ post }) => {
    const navigate = useNavigate();
    const { _id, title, createdAt, image, postedBy } = post;
    return (
        <div className="card" key={_id}>
            <div className="card__header">
                <div>
                    <span>
                       <h2>{title}</h2>
                        <p>{moment(createdAt).format('DD MMMM YY')}</p>
                    </span><br />
                    <p>Posted By {postedBy?.username}</p>
                    <div className="card__action">
                        <span>
                            <i className="fas fa-trash" />{' '}
                            <i className="far fa-edit" />
                        </span>
                        <span>
                            1444 <i className="far fa-star" />
                        </span>
                    </div><br/><br/>
                    <button onClick={() => navigate(`/post/${_id}`)} className="btn__view">View More</button>
                </div>
            </div>
            <div className="card__img__container">
                <img src={image} alt={title} className="card__image" />
            </div>
        </div>
    );
}

export default Card;