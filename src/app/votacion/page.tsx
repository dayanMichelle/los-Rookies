import React from "react";
import { Banner } from "@/components";
import { Form } from "@/components/form";
import styles from "./Votacion.module.css";

const Votacion = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Form />
    </div>
  );
};

export default Votacion;
