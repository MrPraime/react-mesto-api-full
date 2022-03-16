import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
    
    const currentUser = React.useContext(CurrentUserContext);

  
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (`element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden' }`);
    const isLiked = props.card.likes.some(item => item._id === currentUser._id);
    const cardLikeButtonClassName = (`element__like-button ${isLiked ? 'element__like-button_active' : 'element__like-button'}`);

  

    const handleClick = () => {
        props.onCardClick(props.card);
    };
        
    const handleLikeClick = () => {
        props.onCardLike(props.card);
    };

    const handleDeleteClick = () => {
        props.onCardDelete(props.card);
    };

    return (
                  <div className="element">
                    <button className={cardDeleteButtonClassName} type="button"  onClick={handleDeleteClick}></button>
                    <img src={props.card.link} alt={props.card.name} onClick={handleClick} className="element__image" />
                    <div className="element__bar">
                      <h3 className="element__text">{props.card.name}</h3>
                      <div className="element__likes">
                        <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                        <h4 className="element__numberLikes">{props.card.likes.length}</h4>
                      </div>
                    </div>
                  </div>
               );
}

export default Card;