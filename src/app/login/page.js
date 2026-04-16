"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      alert("Login realizado!");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="principal-login">
      <header className="header">
        <div className="logo-container">
          <Link href="/">
            <img src="/logo3.0.png" className="logo"/>
          </Link>
        </div>
        <div className="buttons-container">
          <Link href="/cadastro">
            <button className="cadastro">Pegar Ingresso</button>
          </Link>
        </div>
      </header>

      <main className="container-principal"> 
        <div className="container-login">
          <h2><span className="destaque-chic">Bem-vindo ao WishLy!</span></h2>
          <h2> Faça seu login para começar a favoritar seus preferidos da telona!</h2>

          <Input
            type="text"
            placeholder="Email"
            className="input-login"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Senha"
            className="input-login"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href="/esqueci-senha" className="link-esqueci-senha">
            Esqueci minha senha
          </Link>

          <Button className="botao-login" onClick={handleLogin}>
            Entrar
          </Button>

          <hr className="linha"/>

          <p className="descricao">Ainda não tem uma conta? <Link href="/cadastro" className="link-cadastro">Cadastre-se aqui!</Link></p>
          
        </div>
      </main>
    </div>
  );
}