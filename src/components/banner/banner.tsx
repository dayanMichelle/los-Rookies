import Image from "next/image";
import banner from "public/assets/img/banner.jpg";
import styles from "./banner.module.css";

export const Banner = () => {
  return (
    <Image className={styles.banner} placeholder="blur" src={banner} alt="" />
  );
};
