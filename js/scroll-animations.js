function createObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px'
    });

    return observer;
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = createObserver();
    const sections = document.querySelectorAll('section:not(#home)');
    
    sections.forEach(section => {
        section.classList.add('reveal-section');
        observer.observe(section);
    });
});