$(document).ready(function () {
    // Smooth scrolling and highlighting the card body
    $('a.nav-link').on('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior
        var target = $(this).attr('href'); // Get the target section

        // If the target is the about section, highlight the card body
        if (target === '#about') {
            $('#aboutCardBody').addClass('highlight'); // Add highlight class to the About card body
        }

        // Smooth scroll to the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Duration of the scroll
    });
});

