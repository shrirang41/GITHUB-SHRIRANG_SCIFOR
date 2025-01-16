// Adding interactivity to the buttons
document.addEventListener('DOMContentLoaded', () => {
    // Hero Section buttons
    const heroButtons = document.querySelectorAll('.hero-swipe .btn');
    heroButtons[0].addEventListener('click', () => alert('Previous slide'));
    heroButtons[1].addEventListener('click', () => alert('Next slide'));
  
    // Service buttons
    const serviceButtons = document.querySelectorAll('.service-box button');
    serviceButtons.forEach((button, index) => {
      button.addEventListener('click', () => alert(`Service ${index + 1} selected!`));
    });
  
    // Navigation buttons
    const navItems = document.querySelectorAll('#nav-list li');
    navItems.forEach((item) => {
      item.addEventListener('click', () => alert(`${item.textContent} clicked`));
    });
  
    // Contact button
    document.querySelector('.contact').addEventListener('click', () => {
      alert('Contact us at info@example.com');
    });
  });
  
