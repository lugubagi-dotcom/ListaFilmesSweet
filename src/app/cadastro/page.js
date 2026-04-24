"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "../../lib/auth-client";

export default function Home() {
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await authClient.signUp.email({
        email: email, 
        password: password,
        name: full_name,
      });

      if (error) {
        alert("Erro ao cadastrar: " + error.message);
        return;
      }

      alert("Cadastro realizado com sucesso! 🎉");

    } catch (err) {
      console.error("Erro inesperado:", err);
      alert("O servidor não respondeu. Veja o console.");
    }
  };

  return (
    <div className="principal-login">
      <header className="header">
        <div className="logo-container">
          <Link href="/">
            <img src="/logo3.0.png" className="logo" alt="Logo"/>
          </Link>
        </div>
        <div className="buttons-container">
          <Link href="/login">
            <button className="login">Entrar</button>
          </Link>
        </div>
      </header>

      <main className="container-principal"> 
        <div className="container-login">
          <h2><span className="destaque-chic">Bem-vindo ao WishLy!</span></h2>
          <h3>Faça seu cadastro para começar a favoritar seus filmes preferidos!</h3>

          <Input
            type="text"
            placeholder="Nome Completo"
            className="input-login"
            onChange={(e) => setFullName(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Username"
            className="input-login"
            onChange={(e) => setUsername(e.target.value)}
          />

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

          <Button className="botao-login" onClick={handleRegister}>
            Cadastrar
          </Button>

          <hr className="linha"/>

          <p className="descricao">Já tem uma conta? <Link href="/login" className="link-cadastro">Faça o Login aqui!</Link></p>
          
        </div>
      </main>
    </div>
  );
}