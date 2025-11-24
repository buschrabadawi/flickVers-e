import React, { useState } from "react"; // Import React and useState for managing state
import MediaCard from "../components/MediaCard"; // Import the MediaCard component to display each movie
import { movies } from "../data/movies"; // Import the movies data (array of movie objects)
import "../App.css"; // Import global CSS styles

const Movies = () => {
  // useState hook to keep track of the currently selected filter; default is "All"
  const [filter, setFilter] = useState("All");

  // Create an array of unique movie types (genres) + "All" at the start
  // new Set() ensures each type appears only once
  const genres = ["All", ...new Set(movies.map((m) => m.type))];

  // Filter movies based on the selected filter
  // If filter is "All", include all movies; otherwise, only movies matching the selected type
  const filtered = filter === "All" ? movies : movies.filter((m) => m.type === filter);

  return (
    <div className="app-container">
      <h2 style={{ marginBottom: "16px" }}>Movies</h2> {/* Page heading */}
      
      {/* Filter buttons */}
      <div className="filter-group">
        {genres.map((g, idx) => (
          <button
            key={`genre-${idx}`} // Unique key for React list rendering
            className={`filter-pill ${filter === g ? "active" : ""}`} // Highlight active filter
            onClick={() => setFilter(g)} // Update state when button is clicked
          >
            {g.charAt(0).toUpperCase() + g.slice(1)} {/* Capitalize first letter of genre */}
          </button>
        ))}
      </div>

      {/* Grid to display movies */}
      <div className="grid">
        {filtered.length === 0 && <div className="small">No movies found.</div>} {/* Show message if no movies match filter */}
        {filtered.map((item, index) => (
          <MediaCard key={`movie-${item.id ?? index}`} item={item} /> // Render each movie using MediaCard
        ))}
      </div>
    </div>
  );
};

export default Movies; // Export component for use in other parts of the app







