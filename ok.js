document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        // You can add your own code to handle the form submission, like sending an AJAX request to your server
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // For now, let's just reset the form
        contactForm.reset();
    });
});
