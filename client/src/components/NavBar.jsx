import React from "react";
import {Link} from "react-router-dom"
import "../navstyle.css"

export default function NavBar(){
    return(
        <header>
            <div class="nav"><a href="Homepage.html">Home</a><Link to="/aboutme">About Me</Link><a href="projects.html">Projects</a><a href="contact.html">Contact</a></div>
        </header>
    )
}