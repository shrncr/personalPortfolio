import React from "react";
import NavBar from "./NavBar";
import "../../src/css/styleHome.css";
import useScrollToTop from "../aboutMe.js";

export default function Home() {
  useScrollToTop("topbutton");

  // Centralized JSON data object
  const jsonData = {
    title: "Personal Portfolio",
    person: {
      name: "Peter Pan",
      title: "Senior Full Stack Developer",
      bio: "Passionate about creating scalable web applications and user-friendly experiences. With over 8 years of experience in both frontend and backend development, John excels at solving complex technical challenges and delivering high-quality solutions.",
    },
    profileImage: "../images/profilepic.jpg",
    circularButtons: [
      { text: "Resume", href: "/Resume.pdf", className: "yellow", download: true },
      { text: "Projects", href: "/projects", className: "blue" },
      { text: "Contact", href: "/contact", className: "orange" },
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

  return (
    <div>
      <main>
        <h1 className="title">{jsonData.title}</h1>

        <section className="main">
          <div className="profile-section">
            <img
              className="profile-img"
              src={jsonData.profileImage}
              alt="Profile picture of person"
            />
            <div className="introbox">
              <h1>{jsonData.person.name}</h1>
              <h2>{jsonData.person.title}</h2>
              <p>{jsonData.person.bio}</p>
            </div>
          </div>
        </section>

        <section className="circular-button-container">
          {jsonData.circularButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`circular-button ${button.className}`}
              download={button.download || false}
            >
              {button.text}
            </a>
          ))}
        </section>
      </main>

      <section className="totop">
        <button className="button" id="topbutton">
          <h3>Back to Top</h3>
        </button>
      </section>

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
    </div>
  );
}
