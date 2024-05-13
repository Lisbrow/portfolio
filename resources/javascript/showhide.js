// Function to show section by ID
function showSection(sectionId) {
    console.log('Showing section:', sectionId); // Debug statement
    // Hide all sections
    document.querySelectorAll('#section-container > section').forEach(section => {
        section.style.opacity = 0; // Set opacity to 0 to hide
        section.style.transition = 'opacity 1s'; // Add transition for opacity
        section.style.display = 'none'; // Set display to none
    });
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'flex'; // Changed from 'block' to 'flex' for flexbox layout
    setTimeout(() => {
        selectedSection.style.opacity = 1; // Set opacity to 1 to show
    }, 30); // Delay to ensure display change takes effect before fading in
    // Show the header and footer
    showHeaderAndFooter(); // Show header and footer
}

// Function to show header and footer
function showHeaderAndFooter() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header.style.display = 'flex'; // Set header to display as flex container
    footer.style.display = 'flex'; // Set footer to display as flex container
    setTimeout(() => {
        header.style.opacity = 1; // Set opacity to 1 to show
    }, 200);
    setTimeout(() => {
        footer.style.opacity = 1; // Set opacity to 1 to show
    }, 200);
}

// Add event listeners to links
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
        }, 1000); // Adjust this timeout based on the animation duration
    });
});