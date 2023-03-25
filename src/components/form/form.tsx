"use client";

import React, { useState } from "react";
import styles from "./Form.module.css";
import { Logo } from "../logo";

const Form = () => {
  const [codigoInput, setCodigoInput] = useState("");
  return (
    <div className={styles.container}>
      <Logo fontSize="64px" />
      <form action="" className={styles.form}>
        <fieldset>
          <label htmlFor="codigo">
            Ingresa el código del show
            <input
              className={styles.codigo}
              id="codigo"
              type="text"
              placeholder="ingrese el código"
              required
              value={codigoInput}
              onChange={(e) => setCodigoInput(e.target.value)}
            />
          </label>
          <input
            className={styles.submit}
            tabIndex={0}
            type="submit"
            value="votar"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
