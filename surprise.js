document.addEventListener('DOMContentLoaded', () => {
    const surpriseBox = document.querySelector('.surprise-box');
    const handle = document.querySelector('.surprise-handle');
    let isDragging = false;
    let startY;
    let startTranslate;

    handle.addEventListener('mousedown', startDragging);
    handle.addEventListener('touchstart', startDragging, { passive: true });

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });

    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);

    function startDragging(e) {
        isDragging = true;
        startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
        startTranslate = getCurrentTranslate();
        surpriseBox.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
        const diff = startY - currentY;
        const newTranslate = Math.max(0, Math.min(startTranslate - diff, window.innerHeight - 50));
        
        surpriseBox.style.transform = `translateY(${newTranslate}px)`;
    }

    function stopDragging() {
        if (!isDragging) return;
        isDragging = false;
        surpriseBox.style.transition = 'transform 0.3s ease';
        
        const currentTranslate = getCurrentTranslate();
        if (currentTranslate < window.innerHeight / 2) {
            surpriseBox.classList.add('open');
        } else {
            surpriseBox.classList.remove('open');
        }
    }

    function getCurrentTranslate() {
        const style = window.getComputedStyle(surpriseBox);
        const matrix = new WebKitCSSMatrix(style.transform);
        return matrix.m42;
    }
});