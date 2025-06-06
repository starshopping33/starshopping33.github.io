document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedPairs = 0;
    const totalPairs = cards.length / 2;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

        if (isMatch) {
            matchedPairs++;
            disableCards();
            if (matchedPairs === totalPairs) {
                setTimeout(showCongratulations, 500);
            }
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function showCongratulations() {
        const message = document.createElement('div');
        message.className = 'congrats-message';
        message.innerHTML = `
            <div class="congrats-content">
                <h2>🎉 Parabéns! 🎉</h2>
                <p>Você completou o jogo da memória!</p>
                <p>Te amo muito ❤️</p>
                <button class="play-again">Jogar Novamente</button>
            </div>
        `;
        
        document.body.appendChild(message);
        
        const playAgainBtn = message.querySelector('.play-again');
        playAgainBtn.addEventListener('click', () => {
            message.remove();
            resetGame();
        });
    }

    function resetGame() {
        matchedPairs = 0;
        cards.forEach(card => {
            card.classList.remove('flip');
            card.addEventListener('click', flipCard);
            let randomPos = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
        resetBoard();
    }

    cards.forEach(card => card.addEventListener('click', flipCard));
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
});