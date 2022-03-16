import React from 'react';

function ImagePopup(props) {

    const currentCardExist = !(Object.keys(props.card).length === 0);

    return (
    <div className={`popup popup_modal ${currentCardExist && 'popup_is-opened'}`}>
        <div className="popup__content popup__content_modal">
            <button className="popup__close-button popup__close-button_modal" onClick={props.onClose}></button>
            <img src={props.card.link} alt={props.card.name} className="popup__image"/>
            <h2 className="popup__text">{props.card.name}</h2>
        </div>
    </div>
    )
}


export default ImagePopup;


