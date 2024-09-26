import React from "react";
import {Link} from "react-router-dom"
import "../navstyle.css"

export default function NavBar(){
    return(
        <header>
            <div class="nav"><Link to="/home">Home</Link><Link to="/aboutme">About Me</Link><Link tp="/projects">Projects</Link><Link to="/contact">Contact</Link></div>
        </header>
    )
}