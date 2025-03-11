
import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import NavBar from '../../components/NavBar/NavBar';

const ProductPage = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Fiber Glass Safety Ladders", category: "Safety Equipment",  
      description: "Our Fiberglass Safety Ladders are lightweight, durable, and electrically insulated, making them ideal for electrical and industrial applications. Designed for stability and safety, they offer resistance to corrosion, weather, and electrical conductivity, ensuring reliable performance in various working conditions.", 
      image: `${import.meta.env.BASE_URL}assets/Safety Ladders-min.png` },
    { id: 2, name: "Premium Safety Belts", category: "Safety Equipment",  
      description: "Our Premium Safety Belts are designed for maximum comfort and protection, providing secure support for workers in high-risk environments. Made from durable, high-quality materials, they ensure reliability, stability, and enhanced safety during operations", 
      image: `${import.meta.env.BASE_URL}assets/SafetyBelts.jpg` },
    { id: 3, name: "HRC Fuse Cartridge", category: "Fuses and Protection Devices", 
      description: "Our HRC Fuse Cartridges provide reliable circuit protection, ensuring safety in high-voltage electrical systems. Designed for durability and efficiency, they offer excellent short-circuit protection and high breaking capacity.", 
      image: `${import.meta.env.BASE_URL}/assets/FuseNew.png` },
    { id: 4, name: "Aerial Bundle Cable Accessories", category: "Cable and Conductor Accessories", 
      description: "Our Aerial Bundle Cable Accessories are designed for secure and efficient power distribution. We offer a range of high-quality accessories, including Dead End Assemblies, Large Angle Assemblies, Piercing Connectors (LV), and more, ensuring durability and reliable performance.", 
      image: `${import.meta.env.BASE_URL}assets/ArielBundle-min.jpg` },
    { id: 5, name: "Compression Clamps Aluminum H Type", category: "Cable and Conductor Accessories", 
      description: "Our Compression Clamps (Aluminum H-Type) are designed for secure and efficient cable connections. Made from high-quality aluminum, they ensure strong conductivity, corrosion resistance, and reliable performance in electrical installations.", 
      image: `${import.meta.env.BASE_URL}assets/Clamps.jpg` },
    { id: 6, name: "Standard Copper Lugs", category: "Cable and Conductor Accessories", 
      description: "Our Standard Copper Lugs provide secure and efficient cable terminations. Made from high-conductivity copper, they ensure excellent electrical performance, durability, and corrosion resistance for various industrial and electrical applications.", 
      image: `${import.meta.env.BASE_URL}assets/Lugs.jpg` },
    { id: 7, name: "Standard Bi-Metallic Lugs", category: "Cable and Conductor Accessories", 
      description: "Genuine leather sofa with modern design and durable construction.", 
      image: `${import.meta.env.BASE_URL}assets/BiLugs.png` },
    { id: 8, name: "LED Street Lamps", category: "Lighting Solutions", price: 249.99, 
      description: "Our LED Street Lamps offer energy-efficient, long-lasting, and high-performance lighting solutions. Designed for durability and optimal illumination, they provide superior brightness, low power consumption, and weather resistance for streets, highways, and public spaces.", 
      image: `${import.meta.env.BASE_URL}assets/LED.png` },
    { id: 9, name: "Stringing Tools for Overhead Cables", category: "Stringing and Welding Accessories", price: 129.99, 
      description: "Our Stringing Tools for Overhead Cables are designed for efficient and safe installation of power lines. We offer high-quality tools, including Pulleys, Draw Vices, Clamps, Swivel Joints, and More, ensuring durability, precision, and ease of use in overhead cable stringing operations.", 
      image: `${import.meta.env.BASE_URL}assets/Overhead-Cables.png` },
      { id: 10, name: "Weld Metal and Weld Metal Accessories", category: "Stringing and Welding Accessories", price: 129.99, 
        description: "Our Weld Metal and Weld Metal Accessories ensure strong, reliable, and corrosion-resistant electrical connections. Designed for exothermic welding applications, we provide high-quality welding powder, molds, clamps, and other essential accessories for secure and long-lasting bonding.", 
        image: `${import.meta.env.BASE_URL}assets/WieldImagesNew.jpg`}

  ];

  // Extract unique categories
  const categories = ["All Products", ...new Set(products.map(product => product.category))];

  // State for filtered products, selected category, modal, and selected product
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  // Filter products based on selected category and price range
  useEffect(() => {
    let result = products;
    
    // Filter by category
    if (selectedCategory !== "All Products") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    // result = result.filter(product => 
    //   product.price >= priceRange.min && product.price <= priceRange.max
    // );
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange]);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle price range change
  // const handlePriceChange = (e) => {
  //   setPriceRange({
  //     ...priceRange,
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };

  // Open modal with product details
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <NavBar/>

    <div className="products-page">
      <header className="products-header">
        <h1>Our Products</h1>
        <p>Browse our selection of high-quality products</p>
      </header>
      
      <div className="products-container">
        <aside className="products-sidebar">
          <div className="filter-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className={selectedCategory === category ? 'active' : ''}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
        </aside>
        
        <main className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card" onClick={() => openProductModal(product)}>
                <div className="product-image">
                  <img className='product-image-src' src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products match your current filters.</p>
              <button onClick={() => {
                setSelectedCategory("All");
                setPriceRange({ min: 0, max: 1000 });
              }}>Reset Filters</button>
            </div>
          )}
        </main>
      </div>
      
      {modalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              
              <div className="modal-details">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-category">{selectedProduct.category}</p>
                {/* <p className="modal-price">${selectedProduct.price.toFixed(2)}</p> */}
                <p className="modal-description">{selectedProduct.description}</p>
                
                <div className="contact-info">
                  <h3>Interested in this product?</h3>
                  <p>Contact our sales team:</p>
                  <p><strong>Email:</strong>sales@monalitraders.com</p>
                  <p><strong>Phone:</strong>+94 71 487 3274 </p>               {/* <p><strong>Hours:</strong> Monday-Friday, 9AM-5PM EST</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ProductPage;