import React from "react"
import { useState } from "react"
import NavBar from "./NavBar"
import "../../src/css/stylecontact.css"

export default function ContactPage(){
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        subject: "",
        message: ""
      });
      const [formErrors, setFormErrors] = useState({
        name: " ",
        number: " ",
        email: " ",
        subject: " ",
        message: " "
      });
      const validateField = (name, value) => {
        let errors = { ...formErrors };
    
        switch (name) {
          case "name":
            errors.name = value.trim() === "" ? "Name is required" : "";
            break;
          case "number":
            const phoneRegex = /^[0-9]{10}$/; // Example: 10 digits only
            errors.number = !phoneRegex.test(value) ? "Invalid phone number" : "";
            break;
          case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            errors.email = !emailRegex.test(value) ? "Invalid email address" : "";
            break;
          case "subject":
            errors.subject = value.trim() === "" ? "Subject is required" : "";
            break;
          case "message":
            errors.message = value.trim() === "" ? "Message cannot be empty" : "";
            break;
          default:
            break;
        }
    
        setFormErrors(errors);
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setFormData({
          ...formData,
          [name]: value
        });
        validateField(name, value);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.values(formErrors).every((error) => error === "") &&
                        Object.values(formData).every((field) => field !== "");
        let errs = Object.values(formErrors);
        if (!isValid) {
          alert("Please correct the form errors before submitting\n" + errs.filter(fella => fella !== ""));

        } else {
          // Submit the form (e.g., send an API request)
          alert("Form submitted successfully!");
        }
      };

    return(
        <>
            <form id="ContactForm">
                <input type="text-box" placeholder="Name" name="name" value={formData.name} id="name" onChange={handleChange} className={formErrors.name == " " ? "": (formErrors.name !== "" ? "invalid" : "valid")}/>
                <input type="text-box" placeholder="Mobile Phone Number" name="number" value={formData.number} id="number" onChange={handleChange} className={formErrors.number == " " ? "": (formErrors.number !== "" ? "invalid" : "valid")} />
                 <input type="text-box" placeholder="Email address" name="email" value={formData.email} id="email" onChange={handleChange} className={formErrors.email == " " ? "": (formErrors.email !== "" ? "invalid" : "valid")} />
                 <input type="text-box" placeholder="Subject message" name="subject" value={formData.subject} id="subject" onChange={handleChange}className={formErrors.subject == " " ? "": (formErrors.subject !== "" ? "invalid" : "valid")}/>
                 <input type="text-box" placeholder="Your Message" name="message" value={formData.message} id="message" onChange={handleChange} className={formErrors.message == " " ? "": (formErrors.message !== "" ? "invalid" : "valid")}/>
                 <input type="submit" value="Submit" id="submitBtn" onClick={handleSubmit}/>
            </form> 
            <div id="socials">
                 <a href="https://www.linkedin.com/" target="_blank"><img src="../images/linkedin.png" /></a>
                 <a href="https://github.com/" target="_blank"><img src="../images/git.png"/></a>
            </div>
        </>     
    )
}