import React from "react";
import { Link, useLocation } from "react-router-dom";


function PageWithLogin(props){
    const { title, textButton } = props;


    const location = useLocation();
    const isLocationSignUp = location.pathname === "/sign-up";
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(password, email);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }


    return(
        <div className="popup__content  popup__content_auth-page">
            <h2 className="popup__title popup__title_auth-page ">{title}</h2>
                <form className={`popup__form`} onSubmit={handleSubmit}>

                    <input type="email" className="popup__input popup__input_type_email " name="email"
          required
          placeholder="Email"
          value={email || ""}
          onChange={handleChangeEmail}
                    />
                    <span className="email-input-error popup__input-error"></span>

                    <input type="password" className="popup__input popup__input_type_password" 
          name="password"
          required
          minLength="2"
          maxLength="200"
          placeholder="Пароль"
          value={password || ""}
          onChange={handleChangePassword} />

                    <span className="password-input-error popup__input-error"></span>

                    <button className="popup__save-button popup__save-button_auth-page" type="submit">{textButton}</button>
                </form>

                {props.children}
                
                
            {isLocationSignUp && (
                <div className="popup__content_signin">
                    <p className="popup__content_text_signin">Уже зарегистрированы? </p>
                    <Link to={"/sign-in"} className="popup__content_login-link">Войти</Link>
                </div>
              )
            }
            
                </div>
    )
}

export default PageWithLogin;