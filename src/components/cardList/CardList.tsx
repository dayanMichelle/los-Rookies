"use client";
import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./CardList.module.css";

const cards = [
  {
    id: 1,
    instaName: "@lorenzo",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 2,
    instaName: "@sanza",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 3,
    instaName: "@xdianoreal",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 4,
    instaName: "@folancia",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 5,
    instaName: "@porhoyxmanana",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 6,
    instaName: "@firulais",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
];
const CardList = () => {
  const [select, setSelect] = useState(1);
  const handleClick = (id: number) => {
    setSelect(id);
  };
  return (
    <div className={styles.container}>
      {cards.map(({ id, instaName, photo }) => (
        <Card
          select={select}
          key={id}
          id={id}
          handleClick={handleClick}
          instaName={instaName}
          photo={photo}
        />
      ))}
    </div>
  );
};

export default CardList;
