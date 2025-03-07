import React from 'react';
import './ProductList.css';

const ProductList = ({ activeCategory }) => {
  const products = [
    {
      id: 1,
      name: 'Premium Cotton Fabric',
      category: 'textiles',
      price: 12.99,
      rating: 4.5,
      image: 'https://source.unsplash.com/random/300x300/?fabric'
    },
    {
      id: 2,
      name: 'Silk Blend Textiles',
      category: 'textiles',
      price: 24.99,
      rating: 4.8,
      image: 'https://source.unsplash.com/random/300x300/?silk'
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      category: 'electronics',
      price: 79.99,
      rating: 4.2,
      image: 'https://source.unsplash.com/random/300x300/?earbuds'
    },
    {
      id: 4,
      name: 'Portable Bluetooth Speaker',
      category: 'electronics',
      price: 49.99,
      rating: 4.0,
      image: 'https://source.unsplash.com/random/300x300/?speaker'
    },
    {
      id: 5,
      name: 'Organic Coffee Beans',
      category: 'agricultural',
      price: 18.50,
      rating: 4.7,
      image: 'https://source.unsplash.com/random/300x300/?coffee'
    },
    {
      id: 6,
      name: 'Premium Rice Variety Pack',
      category: 'agricultural',
      price: 22.99,
      rating: 4.6,
      image: 'https://source.unsplash.com/random/300x300/?rice'
    },
    {
      id: 7,
      name: 'Industrial Safety Gloves',
      category: 'industrial',
      price: 15.75,
      rating: 4.4,
      image: 'https://source.unsplash.com/random/300x300/?gloves'
    },
    {
      id: 8,
      name: 'Digital Measuring Tools',
      category: 'industrial',
      price: 89.99,
      rating: 4.3,
      image: 'https://source.unsplash.com/random/300x300/?measuring'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
          stars.push(<span key={`full-${i}`} className="star full">★</span>);
        }
        
        if (hasHalfStar) {
          stars.push(<span key="half" className="star half">★</span>);
        }
        
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }
        
        return stars;
      };
    
      return (
        <div className="product-list">
          <div className="product-list-header">
            <h2>{activeCategory === 'all' ? 'All Products' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Products`}</h2>
            <div className="product-sort">
              <label>Sort by:</label>
              <select>
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <button className="btn-small">Quick View</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      {renderStars(product.rating)}
                      <span className="rating-text">({product.rating})</span>
                    </div>
                    <div className="product-price">${product.price.toFixed(2)}</div>
                    <button className="btn">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="pagination">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      );
    };
    
    export default ProductList;
    