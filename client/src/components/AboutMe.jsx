import React from "react";
import NavBar from "./NavBar"; // Importing the NavBar component
import "../../src/css/styleAbout.css"; // Importing custom CSS for the About Me page
import useScrollToTop from "../aboutMe.js"; // Importing custom scroll-to-top hook

export default function AboutMe() {
  useScrollToTop("topbutton"); // Using a custom hook to scroll to the top when the button is clicked
  
  return (
    <>
      {/* About Me title section */}
      <section className="title">
        <h1>About Me</h1>
      </section>

      {/* Main content section */}
      <section className="main">
        
        {/* Profile image and resume download button */}
        <section className="maincol">
          <img
            src="/images/profilepic.jpg"
            alt="Profile picture of person."
            width="100%"
            height="80%"
          />
          <a href="/Resume.pdf" download="Resume.pdf">
            <button className="button">
              <h3>Download Resume</h3>
            </button>
          </a>
        </section>

        {/* Personal description section */}
        <section className="maincol">
          <p>
            I'm John Dow, a computer science student at the University of Tampa. Growing up
            in a small town in Iowa, I was always fascinated by technology. My curiosity
            led me to pursue a major in Computer Science, where I quickly developed a
            passion for programming and algorithms.
          </p>
          <p>
            After my sophomore year, I interned at a tech startup, working on a smart
            home mobile app. This hands-on experience taught me the importance of clean,
            efficient code, and teamwork. My junior year brought a research assistant
            position focusing on AI and machine learning, where I helped develop a
            real-time chatbot. This sparked my interest in AI, leading me to take more
            specialized courses.
          </p>
          <p>
            Outside of academics, I'm an avid gamer and enjoy building custom gaming PCs.
            I also contribute to open-source projects on GitHub. In my free time, I love
            playing with my dog, cooking, and hiking.
          </p>
        </section>

        {/* Image gallery section */}
        <section className="maincol">
          <section className="img-grid">
            <section className="column">
              <img src="/images/utlogo.png" alt="University of Tampa Logo" />
              <img
                src="/images/hiking.jpg"
                alt="Man hiking on mountain with snow."
              />
              <img src="/images/dog.jpg" alt="My German Shepherd!" />
            </section>
            <section className="column">
              <img
                src="/images/tech.jpg"
                alt="Glowing phone with smart home icons."
              />
              <img
                src="/images/cooking.jpg"
                alt="Variety of veggies spread on a table with a cast iron skillet in the center, as well as other cooking utensils."
              />
              <img
                src="/images/gaming.jpg"
                alt="Computer and console gaming essentials. Keyboard, mouse, controller, Nintendo Switch, etc."
              />
            </section>
          </section>
        </section>
      </section>

      {/* Skills section */}
      <section className="title">
        <h2>Skills</h2>
      </section>

      {/* Progress bars for skills */}
      <section className="bars">
        <label htmlFor="html">HTML Proficiency</label>
        <progress id="html" value="75" max="100">
          75%
        </progress>
        <label htmlFor="python">Python Proficiency</label>
        <progress id="python" value="95" max="100">
          95%
        </progress>
      </section>
      <section className="bars">
        <label htmlFor="css">CSS Proficiency</label>
        <progress id="css" value="60" max="100">
          60%
        </progress>
        <label htmlFor="javascript">Javascript Proficiency</label>
        <progress id="javascript" value="50" max="100">
          50%
        </progress>
      </section>

      {/* Back to Top button */}
      <section className="totop">
        <a>
          <button className="button" id="topbutton">
            <h3>Back to Top</h3>
          </button>
        </a>
      </section>
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
    </>
  );
}
