document.addEventListener('DOMContentLoaded', function() {
    // Function to convert PDF pages to images
    async function loadPdfPages() {
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';
        
        try {
            const pdf = await pdfjsLib.getDocument('Assets/brochure.pdf').promise;
            const flipbook = $('#flipbook');
            
            // Clear any existing content
            flipbook.empty();
            
            // Load each page
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 1.5 });
                
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                await page.render({ canvasContext: context, viewport }).promise;
                
                const div = document.createElement('div');
                div.className = 'page';
                const img = document.createElement('img');
                img.src = canvas.toDataURL();
                div.appendChild(img);
                flipbook.append(div);
            }
            
            // Initialize turn.js
            flipbook.turn({
                width: 800,
                height: 600,
                autoCenter: true,
                elevation: 50,
                gradients: true,
                acceleration: true
            });
            
            // Add button controls
            $('#prev-page').on('click', function() {
                flipbook.turn('previous');
            });
            
            $('#next-page').on('click', function() {
                flipbook.turn('next');
            });
            
        } catch (error) {
            console.error('Error loading PDF:', error);
        }
    }
    
    loadPdfPages();
});
