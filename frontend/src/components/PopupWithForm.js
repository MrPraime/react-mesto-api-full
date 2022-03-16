import React from 'react';

export default function PopupWithForm(props) {
    return ( 
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_is-opened' : null}`}>
        <div className="popup__content  popup__content_type_reg">	
            <button className="popup__close-button" onClick={props.onClose} type='button'></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className={`popup__form popup__form${props.name}`} name={`${props.name}`} onSubmit={props.onSubmit}>
                <fieldset className="popup__form-set">
                <div>{props.children}</div>
                    <button className="popup__save-button" >{props.isLoading ? `${props.buttonText}...` : `${props.buttonText}`} </button>
                </fieldset>
            </form>
        </div>
    </div>
    )
}

