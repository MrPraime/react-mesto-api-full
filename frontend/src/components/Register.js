import React from "react";
import PageWithLogin from "./PageWithLogin";



function Register(props) {

  React.useEffect(() => {
    props.onPage("Войти", "/sign-in");
  }, []);

    return ( 
        <PageWithLogin
          title="Регистрация"
          textButton="Зарегистрироваться"
          onSubmit={props.onSubmit}
      />

    )
}

export default Register;