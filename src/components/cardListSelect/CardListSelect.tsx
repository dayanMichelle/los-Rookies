"use client";
import { useState } from "react";
import { Card } from "@/components";
import styles from "./CardList.module.css";

type CardListProps = {
  cards: {
    id: number;
    instaName: string;
    photo: string;
  }[];
};

const CardListSelect = ({ cards }: CardListProps) => {
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

export default CardListSelect;
