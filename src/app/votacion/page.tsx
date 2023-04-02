import { Banner, Form, Logo } from "@/components";
import styles from "./Votacion.module.css";

const Votacion = () => {
  return (
    <div className={styles.containerPage}>
      <Banner />
      <div className={styles.container}>
        <Logo fontSize="64px" />
        <Form />
      </div>
    </div>
  );
};

export default Votacion;
