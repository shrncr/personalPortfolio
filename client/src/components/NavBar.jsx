import React from "react";
import {Link} from "react-router-dom"
import "../../src/css/navstyle.css"

export default function NavBar(){
    return(
        <header>
            <div class="nav">
                <a href="/">Home</a>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a></div>
        </header>
    )
}