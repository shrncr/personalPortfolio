import React from "react";
import NavBar from "./NavBar"; // Importing the NavBar component
import "../../src/css/styleHome.css"; // Importing custom CSS

export default function Home() {
  return (
    <div>
      
      <main>
        {/* Main title for the portfolio */}
        <h1 className="title">Personal Portfolio</h1>

        {/* Profile section */}
        <section className="main">
          <div className="profile-section">
            {/* Profile image */}
            <img
              className="profile-img"
              src="../images/profilepic.jpg"
              alt="Profile picture of person"
            />
            {/* Introduction box with name, title, and bio */}
            <div className="introbox">
              <h1>John Dow</h1>
              <h2>Senior Full Stack Developer</h2>
              <p>
                Passionate about creating scalable web applications and
                user-friendly experiences. With over 8 years of experience in
                both frontend and backend development, John excels at solving
                complex technical challenges and delivering high-quality
                solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Circular buttons section for navigation to Resume, Projects, and Contact */}
        <section className="circular-button-container">
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="circular-button yellow"
          >
            Resume
          </a>
          <a href="/projects" className="circular-button blue">
            Projects
          </a>
          <a href="/contact" className="circular-button orange">
            Contact
          </a>
        </section>
      </main>

      {/* Footer section containing contact details and social media icons */}
      <footer className="footer">
        <div className="footer-left">
          <p>
            <strong>Phone</strong>
            <br />
            (555)-123-4567
          </p>
          <p>
            <strong>Email</strong>
            <br />
            john.dow@gmail.com
          </p>
        </div>
        <div className="footer-right">
          <p>Follow Me</p>
          {/* Social media icons */}
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <img src="../images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://x.com/">
              <img src="../images/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="../images/insta.png" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="../images/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
