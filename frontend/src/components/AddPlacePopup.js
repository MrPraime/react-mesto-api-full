import React, {useRef} from "react";
import PopupWithForm from './PopupWithForm.js'

export default function AddPlacePopup(props){

    const nameInput = useRef();
    const linkInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onAddPlace({
            name : nameInput.current.value,
            link: linkInput.current.value
        });
        
    };

    React.useEffect(() => {
        nameInput.current.value = "";
        linkInput.current.value = "";
    }, [props.isOpen]);

    return(
        <PopupWithForm  
        title="Новое место" 
            name="-item-form" 
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            isLoading={props.isLoading}
            buttonText="Создать" >

                    <input type="text" className="popup__input popup__input_type_title" name="title" required  minLength="2" maxLength="30" id="text-input" placeholder="Название"
                    ref={nameInput} />
                    <span className="text-input-error popup__input-error"></span>

                    <input type="url" className="popup__input popup__input_type_url" name="imageUrl" id="url-input" required placeholder="Ссылка на картинку"
                    ref={linkInput} />
                    <span className="url-input-error popup__input-error"></span>
      
        </PopupWithForm>
    )

}






