import React, {useState, useContext} from "react";
import PopupWithForm from './PopupWithForm.js'
import CurrentUserContext from '../contexts/CurrentUserContext.js';


export default function EditProfilePopup(props){

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


function handleName(e) {
    setName(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }


  React.useEffect(() => {
    if (props.isOpen === true) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen, currentUser]);


  const handleSubmit = (e) => {
    e.preventDefault();

    props.onUpdateUser({
        name, 
        about: description
    });
};


    return( 
        <PopupWithForm  
            title="Редактировать профиль" 
            name="edit-form" 
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
            buttonText="Сохранить" >

            <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Жак-Ив Кусто" id="name-input" required minLength="2" maxLength="40" 
           value={name ? name : ""} onChange={handleName}
             />
            <span className="name-input-error popup__input-error"></span>

            <input type="text" className="popup__input popup__input_type_about" name="about" placeholder="Исследователь океана" id="about-input" required minLength="2" maxLength="200" 
            value={description ? description : ""} onChange={handleDescription}
            />
            <span className="about-input-error popup__input-error"></span>
        </PopupWithForm>
        )
}
