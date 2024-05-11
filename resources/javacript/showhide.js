// Function to show section by ID
function showSection(sectionId) {
    console.log('Showing section:', sectionId); // Debug statement
    // Hide all sections
    document.querySelectorAll('#section-container > section').forEach(section => {
      section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'flex';
  }

  // Add event listeners to links
  document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('about');
  });

  document.getElementById('projects-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('projects');
  });

  document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('contact');
  });