"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // 使用 useRouter
  const submitAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止表单的默认提交行为
    console.log("email: ", email);
    console.log("password: ", password);

    if (email == "") {
      setEmailError("Email required");
    } else {
      setEmailError("");
    }
    if (password == "") {
      setPasswordError("Password required");
    } else {
      setPasswordError("");
    }

    if (email != "" && password != "") {
      console.log("success***");
      router.push("/success"); // 客户端跳转
      // redirect("/success"); // redirect 是一个仅在 服务器端 工作的函数
    }
  };
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <form onSubmit={submitAction} className={styles.container}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
        data-cy="emailInput"
      ></input>
      {/* show error */}

      {emailError != "" && (
        <div data-cy="emailError" className={styles.textDestructive}>
          {emailError}
        </div>
      )}

      <input
        type="password"
        placeholder="Password"
        name="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
        data-cy="passwordInput"
      ></input>
      {passwordError != "" && (
        <div data-cy="passwordError" className={styles.textDestructive}>
          {passwordError}
        </div>
      )}

      <button type="submit" data-cy="submit">
        Register Now
      </button>

      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
}
