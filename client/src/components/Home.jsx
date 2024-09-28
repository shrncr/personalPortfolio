import React from "react"
import NavbAr from "./NavBar"
import "../../src/css/styleHome.css"

export default function Home(){
    return(
        <>
            <h1 class="title">Personal Portfolio</h1>
    
            <section class="main">
                <div class="profile-section">
                    <img class="profile-img" src="../images/profilepic.jpg" alt="Profile picture of person"/>
                    <div class="introbox">
                    <h1>Your Name</h1>
                    <h2>Professional Title (e.g., Web Developer)</h2>
                    <p>A brief statement about your career goals and a welcome message.</p>
                    </div>
                </div>
            </section>

            <section class="circular-button-container">
                <a href="/Resume.pdf" download = "Resume.pdf" class="circular-button yellow">Resume</a>
                <a href="/projects" class="circular-button blue">Projects</a>
                <a href="/contact" class="circular-button orange">Contact</a>
            </section>
            
            
            <footer class="footer">
                <div class="footer-left">
                    <p><strong>Phone</strong><br></br>707-707-7079</p><p><strong>Email</strong><br></br>leo.messi@gmail.com</p>
                </div>
                <div class="footer-right">
                    <p>Follow Me</p>
                    <div class="social-icons">
                        <a href="#"><img src="../images/facebook-icon.png" alt="Facebook"/></a>
                        <a href="#"><img src="../images/twitter-icon.png" alt="Twitter"/></a>
                        <a href="#"><img src="../images/instagram-icon.png" alt="Instagram"/></a>
                        <a href="#"><img src="../images/youtube-icon.png" alt="YouTube"/></a>
                    </div>
                </div>
            </footer>
        </>
    )
};