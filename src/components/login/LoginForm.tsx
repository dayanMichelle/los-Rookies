"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginService } from "@/services/auth";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await loginService({
      email,
      password,
    });

    if (error) {
      return console.log(error);
    }
    console.log(data);
    router.push("/admin/");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Ingresa el correo:
          <input
            className={styles.codigo}
            id="password"
            type="password"
            placeholder="ingrese la contraseña"
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
