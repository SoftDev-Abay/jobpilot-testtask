import React from "react";
import quote from "../assets/svg/quote.svg";
import { FaStar } from "react-icons/fa";
import "./TestimonialCard.scss";
const TestimonialCard = ({ stars, text, name, job }) => {
  return (
    <>
      <div className="testimonials-card">
        <div className="top">
          <div className="stars-container">
            {[...Array(stars)].map((star, index) => (
              <FaStar key={index + "star" + name} className="star" />
            ))}
          </div>
          <div className="text">“{text}”</div>
        </div>
        <div className="bottom">
          <div className="user-info-wrapper">
            <div className="img-container">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="info">
              <div className="name">{name}</div>
              <div className="job">{job}</div>
            </div>
          </div>
          <img src={quote} alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
