import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const Card_List = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default Card_List;
