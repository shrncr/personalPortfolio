import React from "react";
import { useState } from "react"; // Importing useState hook for form state management
import NavBar from "./NavBar"; // Importing the NavBar component
import "../../src/css/stylecontact.css"; // Importing custom CSS for the Contact page
import useScrollToTop from "../aboutMe.js"; // Importing custom scroll-to-top hook

export default function ContactPage() {
  useScrollToTop("topbutton"); // Using a custom hook to scroll to the top when the button is clicked
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    subject: "",
    message: ""
  });

  // State to store form validation error messages
  const [formErrors, setFormErrors] = useState({
    name: " ",
    number: " ",
    email: " ",
    subject: " ",
    message: " "
  });

  // Function to validate each form field
  const validateField = (name, value) => {
    let errors = { ...formErrors }; // Copy current form errors

    switch (name) {
      case "name":
        errors.name = value.trim() === "" ? "Name is required" : "";
        break;
      case "number":
        const phoneRegex = /^[0-9]{10}$/; // Regex to validate 10-digit phone numbers
        errors.number = !phoneRegex.test(value) ? "Invalid phone number" : "";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email addresses
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

    setFormErrors(errors); // Update the form errors state
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name and value from the input field
    setFormData({
      ...formData, // Update the corresponding form field data
      [name]: value
    });
    validateField(name, value); // Validate the field as it's being changed
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const isValid = Object.values(formErrors).every((error) => error === "") &&
                    Object.values(formData).every((field) => field !== ""); // Check if all fields are valid and not empty

    let errs = Object.values(formErrors); // Get all form errors for displaying

    if (!isValid) {
      alert("Please correct the form errors before submitting\n" + errs.filter(fella => fella !== "")); // Show alert if there are validation errors
    } else {
      // If form is valid, show a success alert (this is where the form submission logic would go)
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      {/* Contact form */}
      <form id="ContactForm">
        {/* Name field with validation class based on error state */}
        <input
          type="text-box"
          placeholder="Name"
          name="name"
          value={formData.name}
          id="name"
          onChange={handleChange}
          className={formErrors.name === " " ? "" : (formErrors.name !== "" ? "invalid" : "valid")}
        />

        {/* Phone number field with validation */}
        <input
          type="text-box"
          placeholder="Mobile Phone Number"
          name="number"
          value={formData.number}
          id="number"
          onChange={handleChange}
          className={formErrors.number === " " ? "" : (formErrors.number !== "" ? "invalid" : "valid")}
        />

        {/* Email field with validation */}
        <input
          type="text-box"
          placeholder="Email address"
          name="email"
          value={formData.email}
          id="email"
          onChange={handleChange}
          className={formErrors.email === " " ? "" : (formErrors.email !== "" ? "invalid" : "valid")}
        />

        {/* Subject field with validation */}
        <input
          type="text-box"
          placeholder="Subject message"
          name="subject"
          value={formData.subject}
          id="subject"
          onChange={handleChange}
          className={formErrors.subject === " " ? "" : (formErrors.subject !== "" ? "invalid" : "valid")}
        />

        {/* Message field with validation */}
        <input
          type="text-box"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          id="message"
          onChange={handleChange}
          className={formErrors.message === " " ? "" : (formErrors.message !== "" ? "invalid" : "valid")}
        />

        {/* Submit button */}
        <input type="submit" value="Submit" id="submitBtn" onClick={handleSubmit} />
      </form>

      {/* Social media links */}
      <div id="socials">
        <a href="https://www.linkedin.com/" target="_blank">
          <img src="../images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/" target="_blank">
          <img src="../images/git.png" alt="GitHub" />
        </a>
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
  );
}
