"use client";

import React, { useState } from "react";
import styles from "./Form.module.css";
import { useRouter } from "next/navigation";

const Form = () => {
  const [codigoInput, setCodigoInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    codigoInput.length === 6 && router.push(`/votacion/${codigoInput}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const codigoInput = e.target.value;
    const pattern = new RegExp(/^[0-9]+$/);
    pattern.test(codigoInput) && setCodigoInput(codigoInput);
  };
  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <fieldset>
        <label htmlFor="codigo">
          Ingresa el código del show
          <input
            className={styles.codigo}
            id="codigo"
            type="text"
            placeholder="ingrese el código"
            minLength={6}
            maxLength={6}
            pattern="[0-9]+"
            required
            value={codigoInput}
            onChange={handleChange}
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
