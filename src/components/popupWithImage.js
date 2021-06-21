function ImagePopup({ srcImage, text }) {
    return (
      <section className="popup popup_dark popup-img" id="popup-image">
        <figure className="popup__figure">
          <button className="popup__button-close" type="button"></button>
          <img className="popup__image" alt="Картинка" src={srcImage} />
          <figcaption className="popup__caption">{text}</figcaption>
        </figure>
      </section>
    );
  }
  
  export default ImagePopup; 