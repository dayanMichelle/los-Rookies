"use client";
import React from "react";
import styles from "./AddEvent.module.css";
import CardList from "../cardList/CardList";

const cards = [
  {
    id: 1,
    instaName: "@lorenzo",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 2,
    instaName: "@sanza",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
];

const AddEvent = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <fieldset>
        <label htmlFor="correo">
          Ingresa el nombre del evento:
          <input
            className={styles.codigo}
            id="evento"
            type="text"
            placeholder="ingrese el nombre del evento"
            required
          />
        </label>
        <label htmlFor="fecha">
          Ingresa la fecha:
          <input className={styles.codigo} id="fecha" type="date" required />
        </label>
        <h6>Participantes</h6>
        <CardList cards={cards} />
        <input
          className={styles.submit}
          tabIndex={0}
          type="submit"
          value="Log in"
        />
      </fieldset>
    </form>
  );
};

export default AddEvent;
