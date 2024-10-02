import React from "react"
import Project from "./Project"
import "../../src/css/style.css"
import useScrollToTop from "../aboutMe.js"; // Importing custom scroll-to-top hook

export default function ProjectsPage(){
  useScrollToTop("topbutton"); // Using a custom hook to scroll to the top when the button is clicked
    //NOTE: Components return html. Your return statements must always return a single parent element
    //a safe bet is to wrap all of your html in empty tags.
    const projects = [
          {
            "title": "Glazer Children's Museum",
            "description": "Developed a web-based application for use in children's museum in downtown Tampa ",
            "technologies": ["HTML", "CSS", "JavaScript", "React", "Node.js", "AWS", "MongoDB"],
            "liveDemo": "https://thelearningproject.vercel.app",
            "codeRepository": "https://github.com/shrncr/gcm",
            "screenshots": [
              {
                "src": "gcm.png",
                "alt": "Screenshot of Project 1"
              }
            ],
            "category": "Web Applications"
          },
          {
            "title": "Pin The Bay",
            "description": "A geoguesser for places around Tampa Bay!",
            "technologies": ["React", "Node.js", "MongoDB"],
            "liveDemo": "https://pinthebay.com",
            "codeRepository": "https://github.com/shrncr/ptb",
            "screenshots": [
              {
                "src": "ptb.png",
                "alt": "Screenshot of Project 2"
              }
            ],
            "category": "Web Dev"
          },
          {
            "title": "NightlyReel",
            "description": "Suggests similar movies/shows within a range of streaming services!",
            "technologies": ["React", "Node.js", "MongoDB"],
            "liveDemo": "https://nightlyreel.com",
            "codeRepository": "https://github.com/shrncr/ptb",
            "screenshots": [
              {
                "src": "nightlyreel.png",
                "alt": "Screenshot of Project 2"
              }
            ],
            "category": "Web Dev"
          },
          {
            "title": "Skin Irritant Scanner",
            "description": "Checks products on Sephora.com for irritating skin ingredients with custom searching algorithm.",
            "technologies": ["Javascript", "Html/Css"],
            "liveDemo": "https://chromewebstore.google.com/detail/skin-irritant-scanner/dfjalffpecaoggbgcjcfpggjkgabjdkj",
            "codeRepository": "https://github.com/shrncr/irritantscanner",
            "screenshots": [
              {
                "src": "skinscanner.jpg",
                "alt": "Picture of Skin Irritant Scanner in Use"
              }
            ],
            "category": "Web Dev"
          },{
            "title": "Program Profiler",
            "description": "Intended to check for academic dishonesty in coding assignments. Creates a program profile for a student based on previous submissions and compares incoming programs to this profile. Provides a similarity score indicating if student followed their typical programming practices.",
            "technologies": ["Python", "Numpy", "Pandas", "SciPy"],
            "liveDemo": "https://github.com/shrncr/programProfiler",
            "codeRepository": "https://github.com/shrncr/programProfiler",
            "screenshots": [
              {
                "src": "profiler.png",
                "alt": "Picture of program profiler"
              }
            ],
            "category": "Machine Learning"
          }
        ]
    return(
      
        <>
            <h1 className="title">Projects</h1>

            <div className="itemsContainer" id="icontain">

                    {projects.map(project =>{
                        return <Project title = {project.title} tech ={project.technologies} desc ={project.description} img={project.screenshots[0].src} link={project.liveDemo} />
                    })}
                
            </div>
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
    )
}