import React from "react";
import "../css/navstyle.css"

export default function NavBar(){
    return(
        <header class = "nav">
            <div>
                <a href="/">Home</a>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
        </header>
    )
}