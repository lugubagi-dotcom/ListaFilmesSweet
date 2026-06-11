"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="principal">
      <header className="header">
        <div className="logo-container">
          <Link href="/">
            <img src="/logo3.0.png" alt="Logo WishLy Filmes" className="logo"/>
          </Link>
        </div>
        <div className="buttons-container">
          <Link href="/recomendacoes">
            <button className="login">Recomendações</button>
          </Link>
          <Link href="/settings">
            <button className="cadastro">Configurações</button>
          </Link>
        </div>
      </header>
      
      <main className="main-content">
        <div className="home-intro" style={{ textAlign: 'center', padding: '0 20px' }}>
          <h2 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '15px' }}>
            Sua lista de desejos, <br/>
            <span className="destaque-chic">Simplificada.</span>
          </h2>
        </div>

        <div className="descricao">
          <p style={{ padding: "0 8px" }}>
            O espetáculo vai começar. Busque seus clássicos favoritos ou sorteie a estrela da noite. O <span className="destaque-chic">WishLy</span> trará recomendações personalizadas direto para a sua tela.
          </p>
        </div>

        <div className="interativo">
          <input type="text" placeholder="Qual obra você procura?" className="search-bar"/>
          <button className="pesquisar-botao">Pesquisar</button>
          <button className="random-botao">Sortear Filme!</button>
        </div>
      </main>
      
      <footer className="footer" style={{ textAlign: 'center', padding: '60px 20px 20px', color: 'rgba(212, 175, 55, 0.6)', fontSize: '0.9rem' }}>
        <p>© 2026 WishLy Filmes. Todos os direitos reservados.</p>
      </footer>
    </div>
    //filmes recomendados e tals, quando eu souber como fazer
  );
}