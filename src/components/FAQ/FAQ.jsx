import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How can I purchase your products, and what payment options are available?",
      answer: "Most accessories are available on an EX-stock basis. For other items, orders are accepted for import and supply. Payments require an advance, with the balance due upon delivery. All payments must be made in cash"
    },
    {
      question: "What types of Ariel bundle cable accessories do you offer?",
      answer: "We offer high-quality Ariel Bundle Cable Accessories from Serbia and China, including ABC Accessories (Dead End Assembly, Large Angle Assembly, Piercing Connectors LV), Safety Items (FRP Ladders), and Stringing Tools (Pulleys, Draw Vice & Clamps, Swivel Joints, etc.)."
    },
    {
      question: "What are the services you provide?",
      answer: "We specialize in trading high-quality electrical products, sourcing primarily from France, China, Taiwan, and various European countries. Our offerings include Ariel Bundle Cable Accessories, Safety Equipment, Cable Stringing Tools, and a variety of Cable Connectors such as Sleeves, Compression Clamps (H-Type), AL/CU Lugs, and more."
    },
    {
      question: "Where is your company located",
      answer: "We are headquartered in Sri Lanka(Colombo), providing reliable electrical solutions to meet diverse industry needs."
    },
    // {
    //   question: "What are ",
    //   answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also view your order status by logging into your account and visiting the 'Order History' section."
    // }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="faq-item"
          >
            <button
              className={`faq-question ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <span className="question-text">{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            
            <div 
              className={`faq-answer-container ${openIndex === index ? 'open' : ''}`}
            >
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;