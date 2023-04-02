import { Iceberg } from "next/font/google";
import styles from "./Logo.module.css";

const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });

type LogoProps = {
  fontSize: string;
};

export const Logo = ({ fontSize }: LogoProps) => {
  return (
    <h2 style={{ ...iceberg.style, fontSize }} className={styles.title}>
      los rookies
    </h2>
  );
};
