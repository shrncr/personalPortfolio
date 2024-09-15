document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('ContactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name = document.getElementById('Name').value.trim();
        const phone = document.getElementById('Number').value.trim();
        const email = document.getElementById('Email').value.trim();
        const subject = document.getElementById('Subject').value.trim();
        const message = document.getElementById('Message').value.trim();
    
        if (name === '') {
            alert('Please enter your name.');
            return;
        }
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        const phonePattern = /^[0-9]{10,15}$/;
        if (phone !== '' && !phonePattern.test(phone)) {
            alert('Please enter a valid phone number (10-15 digits, numbers only).');
            return;
        }
    
        if (message === '') {
            alert('Please enter your message.');
            return;
        }
    
        alert('Form submitted successfully!');
    });
    
})
