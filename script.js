document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// JavaScript code for each slideshow
let slideIndex1 = 0; // Initial slide index for slideshow 1
let slideIndex2 = 0; // Initial slide index for slideshow 2
let slideIndex3 = 0; // Initial slide index for slideshow 3
let slideIndex4 = 0; // Initial slide index for slideshow 4

function showSlides(slideshowId, n) {
    const slides = document.querySelectorAll('#' + slideshowId + ' .slide'); // Select slides based on slideshowId
    
    if (n >= slides.length) {
        n = 0; // Reset to the first image
    }
    if (n < 0) {
        n = slides.length - 1; // Go to the last image
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[n].style.display = 'block';
    
    // Update slideIndex for the current slideshow
    if (slideshowId === 'slideshow1') {
        slideIndex1 = n;
    } else if (slideshowId === 'slideshow2') {
        slideIndex2 = n;
    } else if (slideshowId === 'slideshow3') {
        slideIndex3 = n;
    }
    else if (slideshowId === 'slideshow4') {
        slideIndex4 = n;
    }
}

function plusSlides(slideshowId, n) {
    if (slideshowId === 'slideshow1') {
        showSlides('slideshow1', slideIndex1 += n);
    } else if (slideshowId === 'slideshow2') {
        showSlides('slideshow2', slideIndex2 += n);
    } else if (slideshowId === 'slideshow3') {
        showSlides('slideshow3', slideIndex3 += n);
    } else if (slideshowId === 'slideshow4') {
        showSlides('slideshow4', slideIndex4 += n);
    }
}

// Initial display for each slideshow
showSlides('slideshow1', slideIndex1);
showSlides('slideshow2', slideIndex2);
showSlides('slideshow3', slideIndex3);
showSlides('slideshow4', slideIndex4);
