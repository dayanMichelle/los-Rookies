import { Card } from "@/components";
import styles from "./CardList.module.css";

type CardListProps = {
  cards: {
    id: number;
    instaName: string;
    photo: string;
  }[];
};

export const CardList = ({ cards }: CardListProps) => {
  return (
    <div className={styles.container}>
      {cards.map(({ id, instaName, photo }) => (
        <Card
          key={id}
          select={0}
          id={id}
          instaName={instaName}
          photo={photo}
          handleClick={() => {}}
        />
      ))}
    </div>
  );
};
