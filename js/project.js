function showSection(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('.projects-div');
    allSections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    // Handle active state for buttons
    const allButtons = document.querySelectorAll('.project-buttons button');
    allButtons.forEach(button => button.classList.remove('active'));

    // Find the corresponding button based on data-section and apply active class
    const activeButton = document.querySelector(`button[data-section="${sectionId}"]`);
    activeButton.classList.add('active');
}
