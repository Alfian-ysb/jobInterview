import React from 'react'

const Card = ({image, name, description, category, price, rating, reviews, badge}) => {
  return (
    <article className="product-card">
        <div className="product-image-wrap">
            <img src={image} alt={name} className="product-image" />
            {badge && <div className="product-badge">{badge}</div>}
        </div>
        <div className="product-details">
            <div className="product-heading">
                <p className="product-category">{category}</p>
                <h2>{name}</h2>
            </div>
            <p className="product-description">{description}</p>
            <div className="product-meta">
                <span className="product-price">{price}</span>
                <span className="product-rating">{rating} ({reviews} reviews)</span>
            </div>
        </div>
    </article>
  )
}

export default Card