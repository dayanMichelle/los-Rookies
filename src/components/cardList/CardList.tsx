"use client";
import React, { useState } from "react";
import Card from "../card/Card";
import styles from "./CardList.module.css";

type CardListProps = {
  cards: {
    id: number;
    instaName: string;
    photo: string;
  }[];
};
const CardList = ({ cards }: CardListProps) => {
  return (
    <div className={styles.container}>
      {cards.map(({ id, instaName, photo }) => (
        <Card key={id} id={id} instaName={instaName} photo={photo} />
      ))}
    </div>
  );
};

export default CardList;
