import React from "react"; // Import React
import "../styles/MediaCard.css"; // Import CSS styles for the MediaCard component

// MediaCard component receives an "item" prop representing a movie or show
const MediaCard = ({ item }) => {
  // Determine the color of the rating badge based on the rating value
  let ratingColor = "#4caf50"; // Green for high ratings
  if (item.rating < 6) ratingColor = "#f44336"; // Red for low ratings
  else if (item.rating < 8) ratingColor = "#ff9800"; // Orange for medium ratings

  // Determine which genre/type to display
  const genre = item.genre ? item.genre : item.type ? item.type : "";

  return (
    <div className="media-card">
      
      {/* Poster section with rating badge overlay */}
      <div
        className="media-poster"
        style={{ backgroundImage: `url(${item.poster})` }} // Set poster as background image
      >
        {/* Rating badge with dynamic color */}
        <span className="rating-badge" style={{ backgroundColor: ratingColor }}>
          {item.rating}
        </span>
      </div>

      {/* Info section below the poster */}
      <div className="media-info">
        <h3 className="media-title">{item.title}</h3> {/* Show title */}
        
        {/* Display genre/type if available */}
        {genre && <span className="genre-chip">{genre}</span>}
        
        {/* Display year and rating */}
        <p className="media-meta">{item.year} · Rating: {item.rating}</p>
        
        {/* Short description of the movie/show */}
        <p className="media-desc">{item.description}</p>
      </div>
    </div>
  );
};

export default MediaCard; // Export component for use in Movies/Shows pages


