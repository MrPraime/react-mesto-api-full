import React, {useContext} from 'react';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main(props) {


  const currentUser = useContext(CurrentUserContext);
  React.useEffect(() => {
    props.onPage("Выйти", "/sign-in");
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <button
          className="profile__edit-button-avatar"
          type="button"
          onClick={props.onEditAvatar}
        >
          <img
            src={currentUser.avatar}
            alt="Фото аватара"
            className="profile__avatar"
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>


	  <section className="elements">   { props.cards.map(item => (
                    <Card
                        onCardDelete = {props.onCardDelete}
                        onCardLike = {props.onCardLike} 
                        onCardClick={props.onCardClick}
                        key={item._id} 
                        card={item}
                    />
                ))
                }
	  </section>
    
    </main>
  );
}

export default Main;
