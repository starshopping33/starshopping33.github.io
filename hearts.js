document.addEventListener('DOMContentLoaded', function() {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.width = (Math.random() * 20 + 10) + 'px';
        heart.style.height = heart.style.width;
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        heart.style.animationDuration = Math.random() * 4 + 3 + 's';
        
        heart.innerHTML = '❤️';
        heart.style.fontSize = heart.style.width;
        heart.style.lineHeight = heart.style.height;
        
        document.body.appendChild(heart);
        
     
        setTimeout(() => {
            heart.remove();
        }, parseFloat(heart.style.animationDuration) * 1000);
    }
    
   
    setInterval(createHeart, 300);
});


