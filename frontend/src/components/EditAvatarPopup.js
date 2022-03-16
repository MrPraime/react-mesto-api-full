import React,  { useRef } from "react";
import PopupWithForm from './PopupWithForm.js'

export default function EditAvatarPopup(props){

    const avatarInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
      
        props.onUpdateAvatar(avatarInput.current.value);

        avatarInput.current.value = "";

      } 

    return( 
            <PopupWithForm  
                title="Обновить аватар" 
                name="edit-avatar" 
                isOpen={props.isOpen}
                onClose={props.onClose}
                onSubmit={handleSubmit}
                isLoading={props.isLoading}
                buttonText="Сохранить" >
                        <input type="url" className="popup__input popup__input_type_url" name="newAvatarUrl" id="url-input-avatar" required placeholder="Ссылка на аватар"
                        ref={avatarInput}/>
                        <span className="url-input-avatar-error popup__input-error"></span>
                
          </PopupWithForm>
        )
}