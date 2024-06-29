function validateForm(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const company = document.getElementById('company').value.trim();
    const companySize = document.getElementById('company-size').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || !surname || !company || !companySize || !email || !phoneNumber || !message) {
        alert('Please fill out all fields.');
        return false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    alert('Form submitted successfully!');
    document.getElementById('contact-form').reset();
}