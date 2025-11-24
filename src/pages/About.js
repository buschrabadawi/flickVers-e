import React from 'react'; // Import React
import '../App.css'; // Import global CSS
import { movies } from '../data/movies'; // Import movies data
import { shows } from '../data/shows'; // Import shows data

const About = () => {
  // Select a few images from movies and shows to showcase on the About page
  const featuredImages = [...movies.slice(0, 2), ...shows.slice(0, 2)];

  return (
    <div className="app-container">
      <h2>About FlickVerse</h2>

      <br></br>
      <br></br>

      {/* First paragraph explaining the origin of FlickVerse */}
      <p>
        FlickVerse was created out of my love for movies and TV shows. 
        I’ve always been fascinated by the stories, creativity, and emotion 
        that films and series bring into our lives, and I wanted to build a 
        cozy, simple website where anyone can explore and enjoy them.
      </p>

      <br></br>

      {/* Second paragraph with personal inspiration */}
      <p>
        I still remember the first movie that completely captured my imagination. 
        That feeling of being transported into another world is what inspired 
        me to create FlickVerse — a place where everyone can experience that magic.
      </p>

      <br></br>

      {/* Featured images section */}
      <div className="about-images">
        {featuredImages.map((item, index) => (
          <img
            key={`about-${item.id ?? index}`} // Unique key for React
            src={item.poster} // Image source
            alt={item.title} // Alt text for accessibility
            className="about-image" // CSS class for styling
          />
        ))}
      </div>

      <br></br>
      <br></br>

      {/* Additional paragraphs describing the website's purpose */}
      <p>
        The idea behind FlickVerse is to make discovering your next favorite 
        movie or show easy and fun. Whether you’re looking for something 
        new, revisiting a classic, or just browsing for inspiration, 
        FlickVerse lets you explore freely at your own pace.
      </p>

      <br></br>

      <p>
        With this website, my goal is to combine my passion for cinema 
        with a clean, user-friendly experience that brings together movies, 
        TV shows, and recommendations — all in one place. 
        It’s a personal space for movie lovers, by a movie lover.
      </p>

      <br></br>

      {/* Closing paragraph inviting users to explore */}
      <p>
        Ready to discover your next favorite film or show? Dive in and enjoy!
      </p>
    </div>
  );
};

export default About; // Export component to be used in routing

  

