document.addEventListener('DOMContentLoaded', function() {
    const poemLines = document.querySelectorAll('.poem-line');
    
    function checkScroll() {
        poemLines.forEach(line => {
            const rect = line.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8);
            
            if (isVisible) {
                setTimeout(() => {
                    line.classList.add('visible');
                }, line.dataset.delay * 800);
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});