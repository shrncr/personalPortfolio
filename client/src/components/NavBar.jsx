import React from "react";
import { Link } from "react-router-dom"; // Importing Link component for internal navigation
import "../../src/css/navstyle.css"; // Importing custom CSS for the navigation bar

export default function NavBar() {
  return (
    <header class = "nav">
      {/* Navigation bar */}
      <div>
        {/* Navigation links to different pages */}
        <a href="/">Home</a> {/* Link to the home page */}
        <a href="/aboutme">About Me</a> {/* Link to the About Me page */}
        <a href="/projects">Projects</a> {/* Link to the Projects page */}
        <a href="/contact">Contact</a> {/* Link to the Contact page */}
      </div>
    </header>
  );
}
