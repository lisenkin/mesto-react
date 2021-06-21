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
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =  React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =  React.useState(false);
  const [selectedCard, setSelectedCard] =  React.useState({ isOpen: false });

//закрытие всех попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ isOpen: false })
  }

  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true) }
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) }
  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) }
  const handleCardClick = (data) => { setSelectedCard({ isOpen: true, ...data }) }

  return (
    <div className={"page"}>
      <Header
        srcLogo={logo}
        altLogo={"лого место"}
      />

      <Main
        altAvatar={"аватарка"}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={(data) => { handleCardClick(data) }}
        />
  

      <Footer text={"2021 mesto lisenkin"} />

      <PopupWithForm
        name={"popup-edit-card"}
        title={"Редактировать профиль"}
        textButton={"Сохранить"}
        isOpen={isEditProfilePopupOpen ? 'popup_visible' : ''} 
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_type_name" type="text" placeholder="ваше имя"  name="name" id="popup-input-name"
          minLength="2" maxLength="40"  required/>
        <span className="popup__error popup-input-name-error"></span>
        <input className="popup__input popup__input_type_status" type="text"  name="about" placeholder="о себе" id="popup-input-status"
          minLength="2" maxLength="200" required/>
         <span className="popup__error popup-input-status-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={"popup-add-card"}
        title={"Новое место"}
        textButton={"Создать"}
        isOpen={isAddPlacePopupOpen ? 'popup_visible' : '' }
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_type_place-name" type="text" name="name" placeholder="Название"
          id="popup-input-place-name" minLength="2" maxLength="30" required/>
        <span className="popup__error popup-input-place-name-error"></span>
        <input className="popup__input popup__input_type_photo" type="url" name="link" placeholder="Ссылка на картинку"
          id="popup-input-url" required/>
        <span className="popup__error popup-input-url-error"></span>
       
      </PopupWithForm>

      <PopupWithForm
        name={"popup-add-avatar"}
        title={"Обновить аватар"}
        textButton={"Обновить"}
        isOpen={isEditAvatarPopupOpen ? 'popup_visible' : ''}
        onClose={closeAllPopups}
      >
           <input className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на аватар"
        name="link" required/>
          <span className="popup__error popup-input-url-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={"popup-remove-card"}
        title={"Вы уверены?"}
        textButton={"Да"}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;