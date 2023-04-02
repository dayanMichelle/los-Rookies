import React from "react";
import style from "./Admin.module.css";
import Evento from "@/components/evento/Evento";
import ListEvents from "@/components/listEvents/ListEvents";
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
  return (
    <div className={style.container}>
      <button className={style.buttonAdd}>+ agregar evento</button>
      <div>
        <section className={style.programados}>
          <h4>Eventos programados</h4>
          <ListEvents events={eventosRealizados} />
        </section>
        <section className={style.programados}>
          <h4>Eventos Realizados</h4>
          <ListEvents events={eventosProgramados} />
        </section>
      </div>
    </div>
  );
};

export default Admin;
