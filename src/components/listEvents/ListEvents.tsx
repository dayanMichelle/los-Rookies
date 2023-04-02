import { Evento } from "@/components";
import styles from "./ListEvents.module.css";

type ListEventsProps = {
  events: {
    nombre: string;
    fecha: string;
    ganador: string;
  }[];
};

const ListEvents = ({ events }: ListEventsProps) => {
  return (
    <div className={styles.container}>
      {events.map(({ nombre, fecha, ganador }) => (
        <Evento key={nombre} nombre={nombre} fecha={fecha} ganador={ganador} />
      ))}
    </div>
  );
};

export default ListEvents;
