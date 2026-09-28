import React from 'react'

const Card = ({image, name, category, price, description, rating, reviews, badge}) => {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={image} alt={name} className="product-image" />
        {badge && <span className="product-badge">{badge}</span>}
      </div>
      <div className="product-details">
        <div className="product-heading">
          <div>
            <p className="product-category">{category}</p>
            <h2>{name}</h2>
          </div>
          <span className="product-price">${price}</span>
        </div>
        <p className="product-description">{description}</p>
        <div className="product-meta">
          <span aria-label={`${rating} out of 5 stars`}>
            <span className="star">&#9733;</span> {rating}
          </span>
          <span>{reviews} reviews</span>
        </div>
        <button type="button" className="add-button">Add to bag</button>
      </div>
    </article>
  )
}

export default Card


{products.map((product) => (
  <Card image={product.image} name={product.name} category={product.category} price={product.price} description={product.description} rating={product.rating} reviews={product.reviews} badge={product.badge} />
))}
