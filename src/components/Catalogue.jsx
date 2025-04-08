import './Catalogue.css'

const Catalogue = () => {
  return (
    <section className="catalogue-section">
      <div className="catalogue-content">
        <div className="catalogue-info">
          <h2>Nosso Catálogo Completo</h2>
          <p>
            Descubra a nossa ampla gama de produtos. Oferecemos soluções personalizáveis para todas as necessidades do seu negócio.
          </p>
        </div>
        <div className="catalogue-button-container">
          <a 
            href="https://generalcatalogue2025.eu/deliver2yougift/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="catalogue-button"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Catalogue