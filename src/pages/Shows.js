import React, { useState } from "react"; // Import React and the useState hook for state management
import MediaCard from "../components/MediaCard"; // Import the MediaCard component to display each show
import { shows } from "../data/shows"; // Import the shows data (array of show objects)
import "../App.css"; // Import global CSS styles

const Shows = () => {
  // useState hook to manage the currently selected filter; default is "All"
  const [filter, setFilter] = useState("All");

  // List of filter categories for buttons
  const filters = ["All", "Comedy", "Drama", "Action", "Animation", "Mystery", "Horror", "Sci-Fi", "Fantasy"];

  // Function to generate "tags" for each show based on its properties
  const buildTags = (s) => {
    const tags = [];
    if (s.genre) tags.push(String(s.genre).toLowerCase()); // Add genre as a tag if it exists
    if (s.type) tags.push(String(s.type).toLowerCase());   // Add type as a tag if it exists
    if (s.year && Number(s.year) < 2000) tags.push("classic"); // Add "classic" tag for shows before year 2000
    return tags; // Return array of tags for the show
  };

  // Filter the shows based on the selected filter
  const filtered = shows.filter((s) => {
    if (filter === "All") return true; // If "All" is selected, include all shows
    const tags = buildTags(s); // Get tags for the show
    return tags.includes(filter.toLowerCase()); // Include show if its tags match the filter
  });

  return (
    <div className="app-container">
      <h2 style={{ marginBottom: "12px" }}>Shows</h2> {/* Page heading */}
      
      {/* Filter buttons */}
      <div className="filter-group" style={{ marginBottom: 16 }}>
        {filters.map((f, idx) => (
          <button
            key={`filter-${idx}`} // Unique key for React list rendering
            className={`filter-pill ${filter === f ? "active" : ""}`} // Highlight active filter
            onClick={() => setFilter(f)} // Update state when button is clicked
            type="button"
          >
            {f} {/* Display filter name */}
          </button>
        ))}
      </div>

      {/* Grid to display shows */}
      <div className="grid">
        {filtered.length === 0 ? (
          <div className="small">No shows found.</div> // Message if no shows match filter
        ) : (
          filtered.map((s, index) => (
            <MediaCard key={`show-${s.id ?? index}`} item={s} /> // Render each show using MediaCard component
          ))
        )}
      </div>
    </div>
  );
};

export default Shows; // Export the component so it can be used in other parts of the app





