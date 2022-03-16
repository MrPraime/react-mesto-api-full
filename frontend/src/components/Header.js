import logo from "../images/header/headerLogo.svg";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const { linkName, linkRoute } = props;

  function signOut() {
    props.signOut();
  }

  const location = useLocation();
  const islocationBasic = location.pathname === "/";

  return (
    <header className="header">
      <Link to={"/"}>
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>

      <div className="header__container">
        <p className="header__email">{props.isLoggedIn && props.userEmail}</p>
        {!islocationBasic ? (
          <Link to={linkRoute} className="header__link">
            {linkName}
          </Link>
        ) : (
          <Link to={linkRoute} className="header__link" onClick={signOut}>
            {linkName}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
