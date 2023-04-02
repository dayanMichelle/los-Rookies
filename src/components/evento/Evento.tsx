import styles from "./Evento.module.css";

type EventoProps = {
  nombre: string;
  fecha: string;
  ganador: string;
};

export const Evento = ({ nombre, fecha, ganador }: EventoProps) => {
  return (
    <div className={styles.event}>
      <h5>{nombre}</h5>
      <p>{fecha}</p>
      <p>{ganador}</p>
    </div>
  );
};
