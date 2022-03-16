import React from "react";

function InfoToolTip(props) {
  const { isRegistrationSuccsses } = props;

  const popupImageClassName = isRegistrationSuccsses
      ? "popup__image_type_success"
      : "popup__image_type_fail";
      

  return (
    <div
      className={`popup popup_type_${props.name} ${props.isOpen && "popup_is-opened"}`}
    >
      <div className="popup__container popup__content_reg">
      <button className="popup__close-button" onClick={props.onClose}></button>
        <div className={popupImageClassName}></div>
        <p className="popup__title popup__title_info-tool-tip">
          {isRegistrationSuccsses
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoToolTip;
