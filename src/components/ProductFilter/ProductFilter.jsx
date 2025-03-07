import React from 'react';
import './ProductFilter.css';

const ProductFilter = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'agricultural', name: 'Agricultural' },
    { id: 'industrial', name: 'Industrial Equipment' }
  ];

  return (
    <div className="product-filter">
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category.id}>
            <button 
              className={activeCategory === category.id ? 'active' : ''} 
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="price-filter">
        <h3>Price Range</h3>
        <div className="price-inputs">
          <input type="number" placeholder="Min" />
          <span>-</span>
          <input type="number" placeholder="Max" />
        </div>
        <button className="btn">Apply</button>
      </div>
      
      <div className="filter-section">
        <h3>Origin</h3>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Asia
          </label>
          <label>
            <input type="checkbox" /> Europe
          </label>
          <label>
            <input type="checkbox" /> North America
          </label>
          <label>
            <input type="checkbox" /> South America
          </label>
          <label>
            <input type="checkbox" /> Africa
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;