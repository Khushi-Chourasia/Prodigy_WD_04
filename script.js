function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

//for toggling the navigation menu
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});