import React from "react";

import PageWithLogin from "./PageWithLogin";

function Login(props) {
  
    React.useEffect(() => {
        props.onPage("Регистрация", "/sign-up");
      }, []);

        return ( 
            <PageWithLogin
            title="Вход"
            textButton="Войти"
            onSubmit={props.onSubmit}
            />

        )
}

export default Login;