// Vehicles Page Script
document.addEventListener('DOMContentLoaded', () => {
    const vehicleCards = document.querySelectorAll('.vehicle-card button');
    vehicleCards.forEach((button) => {
        button.addEventListener('click', () => {
            alert('More details functionality is under development!');
        });
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
