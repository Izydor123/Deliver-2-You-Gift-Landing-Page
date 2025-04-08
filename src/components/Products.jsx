import './Products.css'

const Products = ({ title, description, images, links }) => {

  return (
    <section className="product-line">
      <div className="product-content">
        <div className="product-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="product-images">
          {images.map((image, index) => (
            <div className="image-container">
              <a href={links[index]} target='_blank' rel="noopener noreferrer"><img src={image} target="_blank" loading="lazy" alt={`${title} - ${index + 1}`} key={title} /></a>
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <a 
          href={links[3]}
          target="_blank" 
          rel="noopener noreferrer" 
          className="product-button"
        >
          Mais
        </a>
      </div>
    </section>
  )
}

export default Products
