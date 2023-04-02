import Image from "next/image";
import styles from "./Card.module.css";

type CardProps = {
  id: number;
  instaName: string;
  photo: string;
  handleClick: (id: number) => void;
  select: number;
};

export const Card = ({
  select,
  id,
  instaName = "@lola_funny",
  photo = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  handleClick,
}: CardProps) => {
  const styleImage = select === id ? { border: "2px blue solid" } : {};

  return (
    <div className={styles.card}>
      <h4>{instaName}</h4>
      <Image
        style={styleImage}
        onClick={() => handleClick(id)}
        className={styles.img}
        width={250}
        height={200}
        src={photo}
        alt={`photo de ${instaName}`}
      />
    </div>
  );
};
