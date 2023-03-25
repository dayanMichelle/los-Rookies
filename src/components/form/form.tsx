"use client";

import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [codigoInput, setCodigoInput] = useState("");
  return (
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
  );
};

export default Form;
