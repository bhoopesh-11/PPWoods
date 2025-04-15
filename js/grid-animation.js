document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Skip hero section
        if (section.id === 'home') return;

        // Create grid container
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        // Move section content inside container
        const content = section.innerHTML;
        section.innerHTML = '';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'section-content';
        contentDiv.innerHTML = content;
        
        // Add grid background
        const gridBackground = document.createElement('div');
        gridBackground.className = 'grid-background';
        
        gridContainer.appendChild(gridBackground);
        gridContainer.appendChild(contentDiv);
        section.appendChild(gridContainer);

        // Simplified mouse move effect
        section.addEventListener('mousemove', (e) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            gridBackground.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
        });

        section.addEventListener('mouseleave', () => {
            gridBackground.style.transform = 'translate(0, 0)';
        });
    });
});
