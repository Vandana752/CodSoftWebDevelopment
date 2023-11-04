// Function to handle scroll effects
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3;

    if (aboutPosition < screenHeight) {
        aboutSection.classList.add('show');
    }
});
