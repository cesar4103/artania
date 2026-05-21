function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="MP Adventista" />
        </div>
        <div className="menu">
          <a href="#eventos">eventos</a>
          <a href="#contato">contato</a>
          <a href="#material">materiais</a>
          <a href="#endereco">endereço</a>
        </div>
      </nav>

      <div className="video">
        <video controls width="100%">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      <h2 id="eventos">Eventos</h2>

      <div className="eventos">
        {[
          { img: "evento1.jpg", link: "https://instagram.com/iasdcentralitapetininga" },
          { img: "evento2.jpg", link: "https://instagram.com/iasdcentralitapetininga" },
          { img: "evento3.jpg", link: "https://instagram.com/iasdcentralitapetininga" },
          { img: "evento4.jpg", link: "https://instagram.com/iasdcentralitapetininga" },
        ].map((e, i) => (
          <a
            key={i}
            href={e.link}
            target="_blank"
            rel="noreferrer"
            className="evento-card"
          >
            <img src={`/eventos/${e.img}`} alt={`evento-${i}`} />
          </a>
        ))}
      </div>

      <h2 id="contato">Dados de contato</h2>
      <div className="contacto">
        <p>instagram @iasdcentralitapetininga</p>
        <p>conheça nossos jovens @itapejovem</p>
        <p>número de contato (15) 9 9115-9812</p>
      </div>

      <h2 id="material">Materiais para baixar</h2>
      <div className="material">
        <a href="/material/archivo1.pdf" download>batismo de primavera</a>
        <a href="/material/archivo2.pdf" download>todos os membro envolvidos</a>
        <a href="/material/archivo2.pdf" download>todos os membro envolvidos</a>
        <a href="/material/archivo2.pdf" download>todos os membro envolvidos</a>
        <a href="/material/archivo2.pdf" download>todos os membro envolvidos</a>
        <a href="/material/archivo3.pdf" download>PDF 3</a>
        <a href="/material/archivo3.pdf" download>PDF 3</a>
        <a href="/material/archivo3.pdf" download>PDF 3</a>
      </div>

      <h2 id="endereco">Endereço</h2>
      <div className="endereco-container">
        <div className="endereco-texto">
          <p>Pr. Gaspar Ricardo, 7 - Centro, Itapetininga - SP, 18200-020</p>
        </div>
        <div className="map-wrapper">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-48.0510%2C-23.5865%2C-48.0450%2C-23.5825&layer=mapnik&marker=-23.584689%2C-48.048368"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
          <div className="map-overlay">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pr.+Gaspar+Ricardo,+7+-+Centro,+Itapetininga+-+SP"
              target="_blank"
              rel="noreferrer"
              className="map-btn"
            >
              Ver no mapa
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} <span>MP Adventista pagina nao oficial </span> — Itapetininga, SP</p>
      </footer>

    </div>
  )
}

export default App