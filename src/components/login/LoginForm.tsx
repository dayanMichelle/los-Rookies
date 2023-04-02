"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    password === correo && router.push("/admin/");
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <fieldset>
        <label htmlFor="correo">
          Ingresa el correo:
          <input
            className={styles.codigo}
            id="correo"
            type="text"
            placeholder="ingrese el correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Ingresa el correo:
          <input
            className={styles.codigo}
            id="password"
            type="password"
            placeholder="ingrese el correo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
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

export default LoginForm;
