import React from "react";
import CardBg from "../components/CardBg";
import "./PopularCategories.scss";
import arrowRightIcon from "../assets/svg/arrowRightIcon.svg";
import InfoBox from "../components/InfoBox";
import { mostPopularCategories } from "../assets/index";
const PopularCategories = () => {
  return (
    <CardBg background="white" cardClassName="section-popular-vacancies">
      <header>
        <h1>Popular category</h1>
        <button type="button">
          <span>View All</span>
          <img src={arrowRightIcon} alt="" />
        </button>
      </header>
      <div className="popular-categories">
        {mostPopularCategories.map((category) => (
          <InfoBox
            key={category.id + "popular-category"}
            title={category.title}
            subtitle={category.openPositions + " Open Positions"}
            icon={category.icon}
            className={"category-box"}
            // imgBoxBg="#E7F0FA"
          />
        ))}
      </div>
    </CardBg>
  );
};

export default PopularCategories;
