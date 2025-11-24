import React from "react";
import "../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-brand">FlickVerse</div>
    </div>

    <div className="footer-column">
      <h4>Explore</h4>
      <a href="/movies">Movies</a>
      <a href="/shows">Shows</a>
      <a href="/about">About</a>
    </div>

    <div className="footer-column">
      <h4>Support</h4>
      <a href="mailto:support@flickverse.com">support@flickverse.com</a>
      <a href="/faq">FAQ</a>
    </div>

    <div className="footer-column">
      <h4>FAQ</h4>
      <a href="/faq#how-to-search">How to search?</a>
      <a href="/faq#recommendations">Recommendations?</a>
      <a href="/faq#troubleshooting">Troubleshooting</a>
    </div>

    <div className="footer-bottom">
      <small>© {new Date().getFullYear()} FlickVerse — All rights reserved</small>
    </div>
  </footer>
);

export default Footer;




