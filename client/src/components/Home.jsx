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
                    <h1>John Dow</h1>
                    <h2>Senior Full Stack Developer</h2>
                    <p>Passionate about creating scalable web applications and user-friendly experiences. With over 8 years of experience in both frontend and backend development, John excels at solving complex technical challenges and delivering high-quality solutions.</p>
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
                    <p><strong>Phone</strong><br></br>(555) 123-4567</p><p><strong>Email</strong><br></br>john.dow@gmail.com</p>
                </div>
                <div class="footer-right">
                    <p>Follow Me</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/"><img src="../images/facebook-icon.png" alt="Facebook"/></a>
                        <a href="https://x.com/"><img src="../images/twitter-icon.png" alt="Twitter"/></a>
                        <a href="https://www.instagram.com/"><img src="../images/instagram-icon.png" alt="Instagram"/></a>
                        <a href="https://www.youtube.com/"><img src="../images/youtube-icon.png" alt="YouTube"/></a>
                    </div>
                </div>
            </footer>
        </>
    )
};