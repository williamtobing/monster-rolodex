import React from "react";

import Fade from "react-reveal/Fade";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Fade bottom>
          <Card key={monster.id} monster={monster} />
        </Fade>
      ))}
    </div>
  );
};
