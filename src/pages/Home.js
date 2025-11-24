import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link component for client-side routing
import { movies } from "../data/movies"; // Import movies data
import { shows } from "../data/shows"; // Import shows data
import "../App.css"; // Import global CSS

const Home = () => {
  // Create an array of featured items:
  // Take first 2 movies and first show from the data
  const featured = [...movies.slice(0, 2), ...shows.slice(0, 1)];

  return (
    <div className="app-container">
      
      {/* Hero section */}
      <div className="home-hero">
        <h1 className="home-title">Hey there — welcome to FlickVerse! 🎬</h1>
        <p className="home-text">
          Enjoy a simple and clean movie world made for all movie and show
          lovers. Relax, explore, and discover new favorites at your own pace.
        </p>
        {/* Button linking to the Movies page */}
        <Link to="/movies" className="home-btn">
          Start Exploring
        </Link>
      </div>

      {/* Featured Picks section */}
      <h2 className="featured-title">Featured Picks</h2>
      <div className="featured-grid">
        {featured.map((item, index) => (
          <div key={`featured-${item.id ?? index}`} className="featured-card">
            {/* Display poster image */}
            <img src={item.poster} alt={item.title} className="featured-image" />
            {/* Show title, year, and rating */}
            <div className="featured-info">
              <h4>{item.title}</h4>
              <p>{item.year} • {item.rating}/10</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; // Export component for use in routing


