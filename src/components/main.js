import api from '../utils/api.js'
import { useEffect, useState } from 'react';
import Card from './Card.js';


function Main(props) {

  const [userName, setUserName] = useState('Loading...');
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    api.getUserInfo()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch(err => console.log(`Error: ${err}`))
      .finally(() => setIsLoading(false))
  }, []);

  useEffect(() => {
    setIsLoading(true)
    api.getInitialCards()
      .then(res => {
        setCards(res) // тут name link src , но с ними перечисленными все белое.
      })
      .catch(err => console.log(`Error: ${err}`))
      .finally(() => setIsLoading(false))
  }, []);

  return (
    <main className={"page__content content"}>
      <section className={"page__profile profile"}>
        <div className={"profile__overlay"} onClick={props.onEditAvatar}>
          <img src={userAvatar} alt={props.altAvatar} className={"profile__avatar"} />
        </div>
        <div className={"profile__info"}>
          <div className={"profile__info-textblock"}>
            <h1 className={"profile__name"}>{userName}</h1>
            <button className={"profile__button-edit"} type={"button"} onClick={props.onEditProfile}></button>
          </div>
          <p className={"profile__status"}>{userDescription}</p>
        </div>
        <button className={"profile__button-add"} type={"button"} onClick={props.onAddPlace}></button>
      </section>
      <section className={"page__places places"}>
      </section>
      {isLoading
        ? <p>Loading...</p>
        : (<section className={"places__list page__places places"}>
          {cards.map(item => (
            <Card
              key={item._id}
              card={item}
              handleClick={props.onCardClick}
            />
          )
          )}
        </section>)
      }
    </main>
  );
}
export default Main
