import React from "react";
import NavBar from "./NavBar"; // Import NavBar component
import "../../src/css/styleAbout.css"; // Import custom CSS
import useScrollToTop from "../aboutMe.js"; // Import custom hook

// Centralized JSON data object
const jsonData = {
  title: "About Me",
  profileImage: "/images/profilepic.jpg",
  resumeLink: "/Resume.pdf",
  person: {
    name: "John Dow",
    intro: "I'm John Dow, a computer science student at the University of Tampa. Growing up in a small town in Iowa, I was always fascinated by technology. My curiosity led me to pursue a major in Computer Science, where I quickly developed a passion for programming and algorithms.",
    experience: "After my sophomore year, I interned at a tech startup, working on a smart home mobile app. This hands-on experience taught me the importance of clean, efficient code, and teamwork. My junior year brought a research assistant position focusing on AI and machine learning, where I helped develop a real-time chatbot. This sparked my interest in AI, leading me to take more specialized courses.",
    hobbies: "Outside of academics, I'm an avid gamer and enjoy building custom gaming PCs. I also contribute to open-source projects on GitHub. In my free time, I love playing with my dog, cooking, and hiking.",
  },
  gallery: [
    { src: "/images/utlogo.png", alt: "University of Tampa Logo" },
    { src: "/images/hiking.jpg", alt: "Man hiking on mountain with snow." },
    { src: "/images/dog.jpg", alt: "My German Shepherd!" },
    { src: "/images/tech.jpg", alt: "Glowing phone with smart home icons." },
    { src: "/images/cooking.jpg", alt: "Cooking with a variety of veggies." },
    { src: "/images/gaming.jpg", alt: "Computer and console gaming essentials." },
  ],
  skills: [
    { name: "HTML", proficiency: 75 },
    { name: "Python", proficiency: 95 },
    { name: "CSS", proficiency: 60 },
    { name: "JavaScript", proficiency: 50 },
  ],
  contactInfo: {
    phone: "(555)-123-4567",
    email: "john.dow@gmail.com",
  },
  socialMedia: [
    { href: "https://www.facebook.com/", icon: "../images/facebook.png", alt: "Facebook" },
    { href: "https://x.com/", icon: "../images/twitter-icon.png", alt: "Twitter" },
    { href: "https://www.instagram.com/", icon: "../images/insta.png", alt: "Instagram" },
    { href: "https://www.youtube.com/", icon: "../images/youtube.png", alt: "YouTube" },
  ],
};

export default function AboutMe() {
  useScrollToTop("topbutton");

  return (
    <>
      {/* Title Section */}
      <section className="title">
        <h1>{jsonData.title}</h1>
      </section>

      {/* Main Content Section */}
      <section className="main">
        <section className="maincol">
          <img
            src={jsonData.profileImage}
            alt="Profile picture of person."
            width="100%"
            height="80%"
          />
          <a href={jsonData.resumeLink} download="Resume.pdf">
            <button className="button">
              <h3>Download Resume</h3>
            </button>
          </a>
        </section>

        <section className="maincol">
          <p>{jsonData.person.intro}</p>
          <p>{jsonData.person.experience}</p>
          <p>{jsonData.person.hobbies}</p>
        </section>

        {/* Image Gallery Section */}
        <section className="maincol">
          <section className="img-grid">
            {jsonData.gallery.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </section>
        </section>
      </section>

      {/* Skills Section */}
      <section className="title">
        <h2>Skills</h2>
      </section>
      <section className="bars">
        {jsonData.skills.map((skill, index) => (
          <div key={index}>
            <label htmlFor={skill.name.toLowerCase()}>{skill.name} Proficiency</label>
            <progress id={skill.name.toLowerCase()} value={skill.proficiency} max="100">
              {skill.proficiency}%
            </progress>
          </div>
        ))}
      </section>

      {/* Back to Top Button */}
      <section className="totop">
        <button className="button" id="topbutton">
          <h3>Back to Top</h3>
        </button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-left">
          <p>
            <strong>Phone</strong>
            <br />
            {jsonData.contactInfo.phone}
          </p>
          <p>
            <strong>Email</strong>
            <br />
            {jsonData.contactInfo.email}
          </p>
        </div>
        <div className="footer-right">
          <p>Follow Me</p>
          <div className="social-icons">
            {jsonData.socialMedia.map((social, index) => (
              <a key={index} href={social.href}>
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
