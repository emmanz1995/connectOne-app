import React from 'react';
import './card.scss';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Card = ({ post }) => {
    const navigate = useNavigate();
    const { _id, title, createdAt, image } = post;
    return (
        <div className="card-container" key={_id}>
            <div className="card-wrapper">
                <div>
                    <img className="img-responsive" src={image} alt={title} />
                </div>
                <div className="info-content">
                    <h4 className="card-title">{title}</h4>
                    <span>
                        <p className="text-container">Date Posted: {moment(createdAt).format('MM-DD-YY, hh:mm:ss')}</p><br/>
                        <div className="row">
                            <button className="btn btn-view-post" onClick={() => navigate(`/post/${_id}`)}>View More</button>
                             <div>
                                <i className="fas fa-trash" />{' '}
                                 <i className="far fa-edit" />
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;