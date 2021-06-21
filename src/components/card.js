function Card(props) {
    return (
      <article className="place"> 
        <img
          className="place__photo"
          alt={props.title}
          src={props.src}
          onClick={props.handleClick}
        />      
        <button className="place__button-remove place__button-remove_hidden" type="button"></button>
         <div className="place__textarea">
           <h2 className="place__text"></h2>
           <div className="place__column-block">
             <button className="place__like" type="button"></button>
             <span className="place__score-like">0</span>
           </div>
         </div>
      </article>
    );
  }
  

  export default Card; 