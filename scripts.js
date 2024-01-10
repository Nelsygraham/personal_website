// Add your custom JavaScript code here

// Example: Smooth scrolling for navigation links
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// script.js
function openResume() {
    window.open('resume.pdf', '_blank');
}

// Add this JavaScript function to toggle the visibility of project details
function toggleDetails(projectDetailsId) {
    var projectDetails = document.getElementById(projectDetailsId);
    
    if (projectDetails.style.display === 'none') {
        projectDetails.style.display = 'block';
    } else {
        projectDetails.style.display = 'none';
    }
}

