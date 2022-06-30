import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p> {isReadMore ? info : `${info.substring(0, 300)} ...`} </p>
        <button onClick={toggleReadMore}>
          {isReadMore ? "Show less" : "Read More"}
        </button>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
