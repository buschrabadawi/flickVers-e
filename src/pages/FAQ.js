import React, { useState } from "react"; // Import React and useState hook
import "../styles/FAQ.css"; // Import CSS styles for FAQ page

// Array of FAQ objects with question and answer
const faqs = [
  { question: "What is FlickVerse?", answer: "FlickVerse is a website where you can explore and discover movies and TV shows easily." },
  { question: "How do I find a movie or show?", answer: "Use the Movies or Shows page to browse content and filter by genre or rating." },
  { question: "Can I suggest a movie or show?", answer: "Suggestions are not available yet, but contact us for recommendations." },
  { question: "Is FlickVerse free to use?", answer: "Yes! FlickVerse is completely free to explore movies and TV shows." }
];

const FAQ = () => {
  // State to keep track of which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle FAQ: if already open, close it; otherwise, open the clicked FAQ
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="faq-page">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        
        {/* Loop through all FAQ items */}
        {faqs.map((faq, index) => (
          <div key={`faq-${index}`}>
            {/* Question div clickable to toggle answer */}
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>

            {/* Display answer only if this FAQ is open */}
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; // Export component for use in routing


