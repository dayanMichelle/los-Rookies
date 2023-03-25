import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import banner from "public/assets/img/banner.jpg";

export const Banner = () => {
  return (
    <Image className={styles.banner} placeholder="blur" src={banner} alt="" />
  );
};
