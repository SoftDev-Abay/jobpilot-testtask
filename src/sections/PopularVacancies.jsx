import React from "react";
import CardBg from "../components/CardBg";
import "./PopularVacancies.scss";
import { mostPopularVacanciesData } from "../assets/index";
const PopularVacancies = () => {
  return (
    <CardBg background="white" contentClassName="vacancies-section-wrapper">
      <h1>Most Popular Vacancies</h1>
      <div className="vacancies-container">
        {mostPopularVacanciesData.map((vacancy) => (
          <div className="vacancy-item" key={vacancy.id + "vacancy-item"}>
            <a className="name">{vacancy.title}</a>
            <div className="open-amount">
              {vacancy.openPositions} Open Positions
            </div>
          </div>
        ))}
      </div>
    </CardBg>
  );
};

export default PopularVacancies;
