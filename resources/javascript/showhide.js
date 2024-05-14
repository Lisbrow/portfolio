// Function to show section by ID
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('#section-container > section').forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s'; // Add transition for opacity
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'flex';
    setTimeout(() => {
        selectedSection.style.opacity = 1;
    }, 30); // Delay to ensure display change takes effect before fading in
    
    // Show the header and footer
    showHeaderAndFooter(); // Show header and footer
}

// Function to show header and footer
function showHeaderAndFooter() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header.style.display = 'flex';
    footer.style.display = 'flex';
    setTimeout(() => {
        header.style.opacity = 1;
    }, 200); // Delay to ensure display change takes effect before fading in
    setTimeout(() => {
        footer.style.opacity = 1;
    }, 200); // Delay to ensure display change takes effect before fading in
}

// Add event listeners to header links
document.getElementById('about-link').addEventListener('click', function (event) {
    event.preventDefault();
    showSection('about');
    showHeaderAndFooter(); // Call showHeaderAndFooter when the link is clicked
});

document.getElementById('projects-link').addEventListener('click', function (event) {
    event.preventDefault();
    showSection('projects');
    showHeaderAndFooter(); // Call showHeaderAndFooter when the link is clicked
});

document.getElementById('contact-link').addEventListener('click', function (event) {
    event.preventDefault();
    showSection('contact');
    showHeaderAndFooter(); // Call showHeaderAndFooter when the link is clicked
});

// Add event listeners to links in the splash section
document.querySelectorAll('#splash-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1); // Get the section ID from the href attribute
        showSection(sectionId);
        showHeaderAndFooter(); // Call showHeaderAndFooter when a link in the splash section is clicked

        // Trigger exit animation for splash section
        const splashSection = document.getElementById('splash');
        splashSection.classList.add('exit');
        setTimeout(() => {
            splashSection.style.display = 'none'; // Hide the splash section after animation completes
        }, 1000);
    });
});