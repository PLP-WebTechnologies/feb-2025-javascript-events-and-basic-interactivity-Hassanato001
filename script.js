// script.js

// --- Event Handling ---

// Button click to change header text
const changeTextButton = document.getElementById('changeTextButton');
const mainHeading = document.querySelector('header p');

changeTextButton.addEventListener('click', () => {
    if (mainHeading.textContent === "JAVASCRIPT INTERACTIVITY ASSIGNMENT") {
        mainHeading.textContent = "Interactive Elements Activated!";
    } else {
        mainHeading.textContent = "JAVASCRIPT INTERACTIVITY ASSIGNMENT";
    }
});

// Hover effects on navigation links
const navLinks = document.querySelectorAll('nav .tab-button');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#008394';
    });
    link.addEventListener('mouseout', () => {
        if (!link.classList.contains('active')) {
            link.style.backgroundColor = '#eee';
        }
    });
});

// Keypress detection
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    const homeSection = document.getElementById('home');
    if (event.key === 'H' || event.key === 'h') {
        homeSection.scrollIntoView({ behavior: 'smooth' });
        alert('Navigating to Home section on "H" keypress.');
    }
});

// Bonus: Secret action for double-click
const secretTrigger = document.querySelector('.secret-trigger');
secretTrigger.addEventListener('dblclick', () => {
    alert('Surprise! You double-clicked the secret text!');
    document.body.style.backgroundColor = '#ffe0b2'; // Light orange
    setTimeout(() => {
        document.body.style.backgroundColor = '#f4f4f4'; // Revert
    }, 2000);
});

// --- Interactive Elements ---

// Image gallery / slideshow
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

if (slides.length > 0) {
    showSlide(currentSlideIndex);

    nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    });

    prevButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    });
}

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-container .tab-button');
const sections = document.querySelectorAll('main > section');

tabButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const sectionId = event.target.dataset.sectionId;
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
        tabButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    });
});

// Set 'Home' tab as active on load
document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.querySelector('.tab-container .tab-button[data-section-id="home"]');
    const homeSection = document.getElementById('home');
    if (homeTab && homeSection) {
        homeTab.classList.add('active');
        homeSection.style.display = 'block';
    }
});

// --- Form Validation ---
const registrationForm = document.getElementById('registrationForm');
const fnameInput = document.getElementById('fname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessage = document.getElementById('formMessage');
const errorMessages = document.querySelectorAll('.error-message');

registrationForm.addEventListener('submit', (event) => {
    let isValid = true;
    errorMessages.forEach(msg => msg.textContent = '');
    formMessage.style.display = 'none';

    if (fnameInput.value.trim() === '') {
        document.getElementById('fnameError').textContent = 'Full name is required.';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            document.getElementById('emailError').textContent = 'Invalid email format.';
            isValid = false;
        }
    }

    if (passwordInput.value.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

        if (!document.getElementById('terms').checked) {
            document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
            isValid = false;
        }
    });
