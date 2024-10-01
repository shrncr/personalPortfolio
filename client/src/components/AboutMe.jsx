import React from "react"
import NavBar from "./NavBar"
import "../../src/css/styleAbout.css"
import useScrollToTop from "../aboutMe.js"

export default function AboutMe(){
    useScrollToTop("topbutton");
    return (
        <>
           

            <section class = "title">
                <h1>About Me</h1>
            </section>

            <section class = "main">
                <section class = "maincol">
                    <img src = "/images/profilepic.jpg" alt = "Profile picture of person." width ="100%" height="80%"/>
                    <a href = "/Resume.pdf" download="Resume.pdf"><button class = "button"><h3>Download Resume</h3> </button></a>
                </section>

                <section class = "maincol">
                    <p> I'm ---, a computer science student at University of Tampa. Growing up in a small town in Iowa, I was always fascinated by technology. My curiosity led me to pursue a major in Computer Science, where I quickly developed a passion for programming and algorithms.</p>
                    <p>After my sophomore year, I interned at a tech startup, working on a smart home mobile app. This hands-on experience taught me the importance of clean, efficient code, and teamwork. My junior year brought a research assistant position focusing on AI and machine learning, where I helped develop a real-time chatbot. This sparked my interest in AI, leading me to take more specialized courses.</p>
                    <p>Outside of academics, I'm an avid gamer and enjoy building custom gaming PCs. I also contribute to open-source projects on GitHub. In my free time, I love playing with my dog, cooking, and hiking.</p>
                </section>
            
                <section class = "maincol">
                    <section class = "img-grid">
                        <section class = "column">
                            <img src = "/images/utlogo.png" alt = "University of Tampa Logo"/>
                            <img src = "/images/hiking.jpg" alt = "Man hiking on mountain with snow."/>
                            <img src = "/images/dog.jpg" alt = "German shepherd "/>
                        </section>
                        <section class = "column">
                            <img src = "/images/tech.jpg" alt="Glowing phone with smart home icons."/>
                            <img src = "/images/cooking.jpg" alt="Photo with a variety of veggies spread on table with cast iron skillet in the center, as well as other cooking utensils."/>
                            <img src = "/images/gaming.jpg" alt="Computer and console gaming essentials. Keyboard, mouse,controller, nintendo switch, etc."/>
                        </section>
        
                    </section>
                </section>
            </section>
            <section class = "title">
                <h2>Skills</h2>
            </section>
            <section class = "bars">
                <label for="html">HTML Proficiency</label>
                <progress id="html" value="75" max="100">75%</progress>
                <label for="html">Python Proficiency</label>
                <progress id="html" value="95" max="100">95%</progress>
            </section>
            <section class = "bars">
                <label for="html">CSS Proficiency </label>
                <progress id="html" value="60" max="100">60%</progress>
                <label for="html">Javascript Proficiency</label>
                <progress id="html" value="50" max="100">50%</progress>
            </section>
            <section class ="totop">
                <a><button class = "button" id = "topbutton"><h3>Back to Top</h3></button></a>
            </section>
            

        </>
    )
};