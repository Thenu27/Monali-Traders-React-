import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RelatedProducts from './components/RelatedProducts';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Example product data
  const product = {
    id: 1,
    name: 'Premium Cotton Fabric',
    category: 'textiles',
    price: 12.99,
    rating: 4.5,
    stock: 28,
    description: 'High-quality cotton fabric ideal for a wide range of applications from clothing to home decor. Sourced from sustainable farms and processed using eco-friendly methods.',
    features: [
      'Made from 100% organic cotton',
      'Width: 60 inches',
      'Weight: 180 GSM',
      'Durable and long-lasting',
      'Suitable for various sewing projects'
    ],
    specifications: {
      Material: '100% Cotton',
      Weight: '180 GSM (Grams per Square Meter)',
      Width: '60 inches / 152 cm',
      Color: 'Natural White',
      Origin: 'India',
      Certification: 'GOTS Certified Organic'
    },
    images: [
      'https://source.unsplash.com/random/600x600/?cotton',
      'https://source.unsplash.com/random/600x600/?fabric',
      'https://source.unsplash.com/random/600x600/?textile'
    ]
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-detail-page">
      <Navbar />
      
      <div className="container">
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/products">Products</a> / <a href="/products/textiles">Textiles</a> / <span>{product.name}</span>
        </div>
        
        <div className="product-detail">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <div key={index} className="thumbnail">
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="product-info-detail">
            <h1>{product.name}</h1>
            
            <div className="product-meta">
              <div className="product-rating-detail">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(product.rating) ? 'full' : i < product.rating ? 'half' : 'empty'}`}>
                    {i < Math.floor(product.rating) || i < product.rating ? '★' : '☆'}
                  </span>
                ))}
                <span className="rating-count">({product.rating}) | 42 Reviews</span>
              </div>
              <p className="product-sku">SKU: MT-TEX-{product.id}</p>
            </div>
            
            <div className="product-price-detail">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="product-availability">
              <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
              {product.stock > 0 && <span className="stock-count">({product.stock} available)</span>}
            </div>
            
            <div className="short-description">
              <p>{product.description}</p>
            </div>
            
            <div className="product-actions">
              <div className="quantity-selector">
                <button onClick={decrementQuantity} disabled={quantity <= 1}>-</button>
                <input type="number" value={quantity} min="1" max={product.stock} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                <button onClick={incrementQuantity} disabled={quantity >= product.stock}>+</button>
              </div>
              
              <button className="btn add-to-cart-btn">Add to Cart</button>
              <button className="btn-outline wishlist-btn">Add to Wishlist</button>
            </div>
            
            <div className="product-categories">
              <span>Category:</span> <a href="/products/textiles">Textiles</a>
            </div>
            
            <div className="product-share">
              <span>Share:</span>
              <div className="social-icons">
                <a href="#" className="social-icon">F</a>
                <a href="#" className="social-icon">T</a>
                <a href="#" className="social-icon">I</a>
                <a href="#" className="social-icon">P</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="product-tabs">
          <div className="tabs-header">
            <button 
              className={activeTab === 'description' ? 'active' : ''} 
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={activeTab === 'specifications' ? 'active' : ''} 
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={activeTab === 'reviews' ? 'active' : ''} 
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (42)
            </button>
          </div>
          
          <div className="tabs-content">
            {activeTab === 'description' && (
              <div className="description-tab">
                <p>{product.description}</p>
                <h3>Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="specifications-tab">
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="reviews-tab">
                <div className="review-summary">
                  <div className="average-rating">
                    <h3>{product.rating}</h3>
                    <div className="stars">
                      {Array(5).fill().map((_, i) => (
                        <span key={i} className={`star ${i < Math.floor(product.rating) ? 'full' : i < product.rating ? 'half' : 'empty'}`}>
                          {i < Math.floor(product.rating) || i < product.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <p>Based on 42 reviews</p>
                  </div>
                  
                  <div className="rating-bars">
                    {[5, 4, 3, 2, 1].map(stars => (
                      <div key={stars} className="rating-bar">
                        <span>{stars} stars</span>
                        <div className="bar">
                          <div 
                            className="fill" 
                            style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%` }}
                          ></div>
                        </div>
                        <span>{stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="write-review">
                  <button className="btn">Write a Review</button>
                </div>
                
                <div className="review-list">
                  <div className="review-item">
                    <div className="reviewer-info">
                      <h4>John D.</h4>
                      <div className="review-rating">
                        {Array(5).fill().map((_, i) => (
                          <span key={i} className={`star ${i < 5 ? 'full' : 'empty'}`}>
                            {i < 5 ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      <span className="review-date">2 months ago</span>
                    </div>
                    <div className="review-content">
                      <h5>Excellent quality!</h5>
                      <p>This fabric is perfect for my sewing projects. The quality is outstanding and it washes beautifully without shrinking.</p>
                    </div>
                  </div>
                  
                  <div className="review-item">
                    <div className="reviewer-info">
                      <h4>Sara T.</h4>
                      <div className="review-rating">
                        {Array(5).fill().map((_, i) => (
                          <span key={i} className={`star ${i < 4 ? 'full' : 'empty'}`}>
                            {i < 4 ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      <span className="review-date">3 months ago</span>
                    </div>
                    <div className="review-content">
                      <h5>Good fabric, quick delivery</h5>
                      <p>The fabric arrived quickly and is of good quality. I would have preferred if it was a bit thicker, but overall I'm satisfied with my purchase.</p>
                    </div>
                  </div>
                  
                  <button className="btn-outline load-more">Load More Reviews</button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <RelatedProducts />
      </div>
      
      <Footer />
    </div>
  );
}

export default ProductDetailPage;