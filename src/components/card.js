import React from "react";

function Card(props) {
    //вынесем сюда открытие по клику
    function handleImageClick() {
        props.handleClick(props.card)
      }

    return (
      <article className="place"> 
        <img
          className="place__photo"
          alt={props.card.name}
        src={props.card.link}
        onClick={handleImageClick}
        />
    
        <button className="place__button-remove place__button-remove_hidden" type="button"></button>
         <div className="place__textarea">
           <h2 className="place__text">{props.card.name}</h2>
           <div className="place__column-block">
             <button className="place__like" type="button"></button>
             <span className="place__score-like">0</span>
           </div>
         </div>
      </article>
    );
  }
  

  export default Card; 