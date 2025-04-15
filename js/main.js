// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000, // Slower transition speed
    effect: "fade", // Fade effect for smoother transitions
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function() {
            // Reset and trigger content animations
            document.querySelectorAll('.hero-content').forEach(content => {
                content.style.opacity = '0';
                content.style.transform = 'translateX(-100px)';
            });
            
            setTimeout(() => {
                const activeSlide = this.slides[this.activeIndex];
                const content = activeSlide.querySelector('.hero-content');
                if (content) {
                    content.style.opacity = '1';
                    content.style.transform = 'translateX(0)';
                }
            }, 100);
        }
    }
});

// Initialize Testimonials Swiper
const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000, // 5 seconds delay between slides
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    effect: "slide", // Changed from fade to slide for better transition
    speed: 1000, // Transition speed in milliseconds
    navigation: {
        nextEl: ".testimonials-slider .swiper-button-next",
        prevEl: ".testimonials-slider .swiper-button-prev",
    }
});

// Add functionality to "View All Reviews" button
document.querySelector(".view-all-reviews-btn").addEventListener("click", () => {
    window.location.href = "#contact"; // Redirect to the contact section or another page
});

// Remove theme toggle code
const logo = document.querySelector('.company-logo');
const lightLogoPath = logo.src;
logo.src = lightLogoPath;