import React from "react";
import "../styles/starrating.css";

export default function StartRating({ rate, setRate }) {

  const handleRate = e => {
    setRate(e.target.value);
    console.log(rate);
  };

  return (
    <div className="rate-main">
      <div className="rate">
        <input
          onClick={e => {
            handleRate(e);
          }}
          type="radio"
          id="star1"
          name="rate"
          value={5}
        />
        <label htmlFor="star1" />
        <input
          onClick={e => {
            handleRate(e);
          }}
          type="radio"
          id="star2"
          name="rate"
          value={4}
        />
        <label htmlFor="star2" />
        <input
          onClick={e => {
            handleRate(e);
          }}
          type="radio"
          id="star3"
          name="rate"
          value={3}
        />
        <label htmlFor="star3" />
        <input
          onClick={e => {
            handleRate(e);
          }}
          type="radio"
          id="star4"
          name="rate"
          value={2}
        />
        <label htmlFor="star4" />
        <input
          onClick={e => {
            handleRate(e);
          }}
          type="radio"
          id="star5"
          name="rate"
          value={1}
        />
        <label htmlFor="star5" />
      </div>
    </div>
  );
}
