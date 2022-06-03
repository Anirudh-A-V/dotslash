import React from "react";
import CardItem from "./CardItem.js";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Events</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../public/images/img_9.jpg"
              text="Est duis tempor veniam occaecat tempor laborum ea irure tempor cillum aliquip nisi deserunt ut."
              label="Card 1 details"
              title='Lorem Lipsum'
              path="/competitions"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
