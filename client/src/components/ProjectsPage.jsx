import React from "react"
import Project from "./Project"
import NavBar from "./NavBar"
import "../../src/style.css"
export default function ProjectsPage(){
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
          }
        ]
    return(
        <>
            

            <h1 className="title">Projects</h1>

            <div className="itemsContainer" id="icontain">

                    {projects.map(project =>{
                        return <Project title = {project.title} tech ={project.technologies} desc ={project.description} img={project.screenshots[0].src} link={project.link} />
                    })}
                
            </div>
        </>
    )
}