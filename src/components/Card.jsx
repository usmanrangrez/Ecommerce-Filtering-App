import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
      <img src={img} alt="Shoe" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <AiFillStar className="ratings-star" />
          <AiFillStar className="ratings-star" />
          <AiFillStar className="ratings-star" />
          <AiFillStar className="ratings-star" />
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <BiShoppingBag className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
