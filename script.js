// script.js

function submitForm() {
    // Add JavaScript functionality here
    alert("Form submitted!");
    // You can perform additional actions, such as sending data to a server.
}

function showSection(sectionId) {
    // Hide all clickable sections
    var sections = document.querySelectorAll('.clickable-section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the selected
