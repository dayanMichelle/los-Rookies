"use client";

import { useRouter } from "next/navigation";
import { ListEvents } from "@/components";
import style from "./Admin.module.css";

const eventosRealizados = [
  {
    nombre: "La noche hoy",
    fecha: "23-2023-1",
    ganador: "Oscar Wilde",
  },
  {
    nombre: "La noche de ayer",
    fecha: "23-2023-1",
    ganador: "Oscar Wilde",
  },
  {
    nombre: "Por hoy y mañana",
    fecha: "23-2023-1",
    ganador: "Oscar Wilde",
  },
  {
    nombre: "Por la semana",
    fecha: "23-2023-1",
    ganador: "Oscar Wilde",
  },
  {
    nombre: "La noche hoy",
    fecha: "23-2023-1",
    ganador: "Oscar Wilde",
  },
  {
    nombre: "La noche de ayer",
    fecha: "23-2023-1",
    ganador: "Oscar Wilde",
  },
  {
    nombre: "Por hoy y mañana",
    fecha: "23-2023-1",
    ganador: "Oscar Wilde",
  },
  {
    nombre: "Por la semana",
    fecha: "23-2023-1",
    ganador: "Oscar Wilde",
  },
];

const eventosProgramados = [
  {
    nombre: "La noche hoy",
    fecha: "23-2023-1",
    ganador: "Sin definir",
  },
  {
    nombre: "La noche de ayer",
    fecha: "23-2023-1",
    ganador: "Sin definir",
  },
  {
    nombre: "Por hoy y mañana",
    fecha: "23-2023-1",
    ganador: "Sin definir",
  },
  {
    nombre: "Por la semana",
    fecha: "23-2023-1",
    ganador: "Sin definir",
  },
];
const Admin = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      {/* TODO: Crear un componente button para dejar esta page como server
      component */}
      <button
        onClick={() => router.push("admin/evento")}
        className={style.buttonAdd}
      >
        + agregar evento
      </button>
      <div>
        <section>
          <h4>Eventos programados</h4>
          <div className={style.programados}>
            <ListEvents events={eventosProgramados} />
          </div>
        </section>
        <hr style={{ marginTop: "20px" }} />
        <section>
          <h4 className={style.title}>Eventos Realizados</h4>
          <div className={style.programados}>
            <ListEvents events={eventosRealizados} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
