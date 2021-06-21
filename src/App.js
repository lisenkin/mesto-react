import React from "react";
import { useState } from 'react';
import logo from './images/Vector.svg';

import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/popupWithImage';

//попробуем так
//стоило так радостно вспоминать классы что б снова переписывать  на функции( 
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =  React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =  React.useState(false);
  const [selectedCard, setSelectedCard] =  React.useState({ isOpen: false });

//закрытие всех попапов (установим всем фолс)
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(""); //сброси
  }

  //кто вообще сказал что реакт легче 9 спринта? 

  //эдит профиль
  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true) }
  //добавить место
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) }
  //аватарка
  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) }
  // большая картинка
  const handleCardClick = (data) => { setSelectedCard({ isOpen: true, ...data }) }

  return (
    <div className={"page"}>
      <Header
        srcLogo={logo}
        altLogo={"лого место"}
      />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        />
  

      <Footer text={"2021 mesto lisenkin"} />

      <PopupWithForm
        name={"popup-edit-card"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen ? 'popup_visible' : ''} 
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_type_name" type="text" placeholder="ваше имя"  name="name" id="popup-input-name"
          minLength="2" maxLength="40"  required/>
        <span className="popup__error popup-input-name-error"></span>
        <input className="popup__input popup__input_type_status" type="text"  name="about" placeholder="о себе" id="popup-input-status"
          minLength="2" maxLength="200" required/>
         <span className="popup__error popup-input-status-error"></span>
         <button className="popup__button-submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name={"popup-add-card"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen ? 'popup_visible' : '' }
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_type_place-name" type="text" name="name" placeholder="Название"
          id="popup-input-place-name" minLength="2" maxLength="30" required/>
        <span className="popup__error popup-input-place-name-error"></span>
        <input className="popup__input popup__input_type_photo" type="url" name="link" placeholder="Ссылка на картинку"
          id="popup-input-url" required/>
        <span className="popup__error popup-input-url-error"></span>
        <button className="popup__button-submit" type="submit">Создать</button>
       
      </PopupWithForm>

      <PopupWithForm
        name={"popup-add-avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen ? 'popup_visible' : ''}
        onClose={closeAllPopups}
      >
           <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на аватар"
        name="link" required/>
          <span className="popup__error popup-input-url-error"></span>
          <button className="popup__button-submit" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name={"popup-remove-card"}
        title={"Вы уверены?"}
        textButton={"Да"}
      />

      <ImagePopup
         isOpen={selectedCard ?  'popup_visible' : ''} 
         card={selectedCard}
        onClose={closeAllPopups}
      />
       
    </div>
  );
}

export default App;