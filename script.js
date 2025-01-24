// Get the popup and overlay elements
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');

// Buttons to open/close the popup
const loginButtons = document.querySelectorAll('.login-btn');
const closeButton = document.querySelector('.popup .close-btn');
const userButton = document.querySelector('.user-btn');
const renterButton = document.querySelector('.renter-btn');

// Open the popup when login buttons are clicked
loginButtons.forEach(button => {
    button.addEventListener('click', () => {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });
});

// Close the popup when overlay is clicked
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

// Example functionality for User and Renter buttons
userButton.addEventListener('click', () => {
    alert('Welcome User!');
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

renterButton.addEventListener('click', () => {
    alert('Welcome Renter!');
    overlay.style.display = 'none';
    popup.style.display = 'none';
});


// Function to open the popup
function openPopup() {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
}

// Redirect to User Login Form
function redirectToUserLogin() {
    window.location.href = 'user/user-login.html'; // Replace with your actual user login form URL
}

// Redirect to Renter Login Form
function redirectToRenterLogin() {
    window.location.href = 'renter/renter-login.html'; // Replace with your actual renter login form URL
}

// Event listeners for buttons
document.querySelector('.login-btn').addEventListener('click', openPopup);
document.querySelector('.user-btn').addEventListener('click', redirectToUserLogin);
document.querySelector('.renter-btn').addEventListener('click', redirectToRenterLogin);
document.querySelector('.overlay').addEventListener('click', closePopup);
