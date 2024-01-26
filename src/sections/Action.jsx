import React from "react";
import CardBg from "../components/CardBg";
import "./Action.scss";
import action1 from "../assets/img/action1.png";
import action2 from "../assets/img/action2.png";
import arrowRightIcon from "../assets/svg/arrowRightIcon.svg";

const Action = () => {
  return (
    <CardBg>
      <div className="actions-wrapper">
        <div className="action">
          <img src={action1} className="action-img action1-img" />
          <div className="action-body">
            <header>
              <h3>Become a Candidate</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                cursus a dolor convallis efficitur.
              </p>
            </header>
            <button>
              <span>Register now</span>
              <img src={arrowRightIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="action">
          <img src={action2} className="action-img action2-img" />
          <div className="action-body">
            <header className="action-white-header">
              <h3>Become a Employers</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                cursus a dolor convallis efficitur.
              </p>
            </header>
            <button>
              <span>Register now</span>
              <img src={arrowRightIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </CardBg>
  );
};

export default Action;
