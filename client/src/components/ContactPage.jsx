import React from "react"
import NavBar from "./NavBar"
import "../../src/css/stylecontact.css"

export default function ContactPage(){
    return(
        <>
            <form id="ContactForm">
                <input type="text-box" placeholder="Name" name="Name" id="Name" />
                <input type="text-box" placeholder="Mobile Phone Number" name="Number" id="Number" />
                 <input type="text-box" placeholder="Email address" name="Email" id="Email" />
                 <input type="text-box" placeholder="Subject message" name="Subject" id="Subject" />
                 <input type="text-box" placeholder="Your Message" name="Message" id="Message" />
                 <input type="submit" value="Submit" id="submitBtn" />
            </form>
            <div id="socials">
                 <img src="../images/linkedin.png"/>
                 <img src="../images/git.png"/>
            </div>
        </>     
    )
}