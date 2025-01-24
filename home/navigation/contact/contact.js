// Contact Page Script
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent! Thank you for reaching out.');
    });

    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', () => {
        alert('Login/SignUp functionality coming soon!');
    });

    const addVehicleBtn = document.querySelector('.add-vehicle');
    addVehicleBtn.addEventListener('click', () => {
        alert('Redirecting to Add Vehicle page...');
    });
});
