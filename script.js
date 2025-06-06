
function openModal(){
    const btn = document.querySelector(".open");
    btn.addEventListener("click", () => {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="wrapper">
                <div class="modal">
                    <h2>Oiii meu amorr</h2>
                    <p>Amor, cada dia ao seu lado é como um sonho que não quero acordar. Seu sorriso ilumina meus dias e seu amor aquece meu coração como nada mais no mundo. Você é minha paz, minha alegria e meu maior tesouro. Prometo cuidar de você e desse amor tão lindo para sempre. Sou infinitamente grato por ter você em minha vida.</p>
                    <button class="close">Fechar</button>
                </div>
            </div>
        `);
        
        const close = document.querySelector(".close");
        close.addEventListener("click", () => {
            const wrapper = document.querySelector(".wrapper");
            wrapper.remove();
        });
    });
}

document.addEventListener('DOMContentLoaded', openModal);

document.addEventListener('DOMContentLoaded', function() {
    
    const photoCards = document.querySelectorAll('.photo-card');
    const photoModal = document.createElement('div');
    photoModal.className = 'photo-modal'
    
    const modalImg = document.createElement('img');
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-photo'
    closeBtn.innerHTML = '&times;'
    
    photoModal.appendChild(modalImg);
    photoModal.appendChild(closeBtn);
    document.body.appendChild(photoModal);
    
    photoCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            modalImg.src = imgSrc;
            photoModal.style.display = 'flex'
        });
    });
    
    closeBtn.addEventListener('click', () => {
        photoModal.style.display = 'none'
    });
    
    photoModal.addEventListener('click', (e) => {
        if (e.target === photoModal) {
            photoModal.style.display = 'none'
        }
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('ourSong');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const timeDisplay = document.getElementById('timeDisplay');

   
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

   
    function updateTime() {
        timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }

    playBtn.addEventListener('click', function() {
        audio.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline-block';
    });

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateTime);

  
    pauseBtn.style.display = 'none';

    
})



    
    const quizData = [
        {
            question: "Onde foi nosso primeiro beijo?",
            options: ["Na praça", "Na pista", "Na chaos", "Na minha casa"],
            answer: 2, 
            feedback: "Foi na chaos mesmo, aquele momento mágico que nunca esqueci! ❤️"
        },
        {
            question: "Onde nos conhecemos?",
            options: ["No fim de uma festa", "Na casa de alguém", "Na escola", "Na praia"],
            answer: 0,
            feedback: "Exato! No final daquela festa inesquecível onde nossos olhares se encontraram pela primeira vez 😍"
        },
        {
            question: "Que dia eu te pedi em namoro?",
            options: ["14/02", "13/01", "24/02", "13/02"],
            answer: 3,
            feedback: "Isso mesmo! 13/02, a data mais especial da minha vida 💘"
        },
        {
            question: "Qual minha comida favorita?",
            options: ["Hambúrguer", "Churrasco", "Comida do meu mohmoh", "Peixe"],
            answer: 2, 
            feedback: "Certooo! Nada se compara à sua comida feita com amor 🍲💕"
        },
        {
            question: "Quem eu mais amo nesse mundo?",
            options: ["Você", "Você", "Você", "Você"],
            answer: 3, 
            feedback: "Sempre você, em todas as opções, em todos os universos possíveis! Te amo infinito! 💞"
        }
    ];

    
    const quizContainer = document.querySelector('.quiz-container');
    const questionEl = document.querySelector('.quiz-question p');
    const optionsEl = document.querySelector('.quiz-options');
    const feedbackEl = document.querySelector('.quiz-feedback');
    const nextBtn = document.querySelector('.quiz-next');
    const progressEl = document.querySelector('.quiz-progress');

  
    let currentQuestion = 0;
    let score = 0;
    let selectedOption = null;

   
    function loadQuestion() {
        const question = quizData[currentQuestion];
        questionEl.textContent = question.question;
        
        optionsEl.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectOption(index));
            optionsEl.appendChild(button);
        });
        
        feedbackEl.textContent = '';
        feedbackEl.style.backgroundColor = 'transparent';
        nextBtn.disabled = true;
        progressEl.textContent = `${currentQuestion + 1} de ${quizData.length}`;
    }

    function selectOption(index) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        options[index].classList.add('selected');
        selectedOption = index;
        nextBtn.disabled = false;
    }

    function showFeedback(isCorrect) {
        if (isCorrect) {
            feedbackEl.innerHTML = quizData[currentQuestion].feedback;
            feedbackEl.style.backgroundColor = 'rgba(0, 200, 0, 0.1)';
            score++;
        } else {
            feedbackEl.innerHTML = "Quase! Mas eu te amo mesmo assim 😘<br>" + 
                                 "A resposta certa era: <strong>" + 
                                 quizData[currentQuestion].options[quizData[currentQuestion].answer] + 
                                 "</strong>";
            feedbackEl.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        }
    }
document.addEventListener('DOMContentLoaded', function() {
   
    const quizData = [
        {
            question: "Onde foi nosso primeiro beijo?",
            options: ["Na praça", "Na pista", "Na chaos", "Na minha casa"],
            answer: 2, 
            feedback: "Foi na chaos mesmo, aquele momento mágico que nunca esqueci! ❤️"
        },
        {
            question: "Onde nos conhecemos?",
            options: ["No fim de uma festa", "Na casa de alguém", "Na escola", "Na praia"],
            answer: 0, 
            feedback: "Exato! No final daquela festa inesquecível onde nossos olhares se encontraram pela primeira vez 😍"
        },
        {
            question: "Que dia eu te pedi em namoro?",
            options: ["14/02", "13/01", "24/02", "13/02"],
            answer: 3,
            feedback: "Isso mesmo! 13/02, a data mais especial da minha vida 💘"
        },
        {
            question: "Qual minha comida favorita?",
            options: ["Hambúrguer", "Churrasco", "Comida do meu mohmoh", "Peixe"],
            answer: 2, 
            feedback: "Certooo! Nada se compara à sua comida feita com amor 🍲💕"
        },
        {
            question: "Quem eu mais amo nesse mundo?",
            options: ["Você", "Você", "Você", "Você"],
            answer: 0,
            feedback: "Sempre você, em todas as opções, em todos os universos possíveis! Te amo infinito! 💞"
        }
    ];

    
    const quizContainer = document.querySelector('.quiz-container');
    const questionEl = document.querySelector('.quiz-question p');
    const optionsEl = document.querySelector('.quiz-options');
    const feedbackEl = document.querySelector('.quiz-feedback');
    const nextBtn = document.querySelector('.quiz-next');
    const progressEl = document.querySelector('.quiz-progress');

   
    let currentQuestion = 0;
    let score = 0;
    let selectedOption = null;

   
    function loadQuestion() {
        const question = quizData[currentQuestion];
        questionEl.textContent = question.question;
        
        optionsEl.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectOption(index));
            optionsEl.appendChild(button);
        });
        
        feedbackEl.textContent = '';
        feedbackEl.style.backgroundColor = 'transparent';
        nextBtn.disabled = true;
        progressEl.textContent = `${currentQuestion + 1} de ${quizData.length}`;
    }

    function selectOption(index) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        options[index].classList.add('selected');
        selectedOption = index;
        nextBtn.disabled = false;
    }

   function showFeedback(isCorrect) {
    const currentQuestionData = quizData[currentQuestion];
    
  
    const allOptionsCorrect = currentQuestionData.options.every((opt, index) => 
        index === currentQuestionData.answer || opt === currentQuestionData.options[currentQuestionData.answer]
    );
    
    if (isCorrect || allOptionsCorrect) {
      
        feedbackEl.innerHTML = currentQuestionData.feedback;
        feedbackEl.style.backgroundColor = 'rgba(0, 200, 0, 0.1)';
        feedbackEl.style.color = '#2a8000';
        score++;
    } else {
       
        feedbackEl.innerHTML = "Quase! Mas eu te amo mesmo assim 😘<br>" + 
                             (allOptionsCorrect ? "" : 
                             "A resposta certa era: <strong>" + 
                             currentQuestionData.options[currentQuestionData.answer] + 
                             "</strong>");
        feedbackEl.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        feedbackEl.style.color = '#a00000';
    }
    
    
    feedbackEl.style.transition = 'all 0.5s ease';
    feedbackEl.style.padding = '15px';
    feedbackEl.style.borderRadius = '10px';
    feedbackEl.style.margin = '10px 0';
}
    function showResults() {
        const percentage = Math.round((score / quizData.length) * 100);
        let message = '';
        
        if (percentage >= 80) {
            message = `Incrível! ${percentage}% acertos! Você realmente me conhece como ninguém! Eu te amo mais que tudo! ❤️`;
        } else if (percentage >= 50) {
            message = `${percentage}% acertos! Você me conhece bem, mas podemos melhorar... Que tal mais tempo juntos? 😊`;
        } else {
            message = `${percentage}% acertos! Acho que precisamos nos conhecer melhor... Que tal um encontro hoje? 💕`;
        }
        
        quizContainer.innerHTML = `
            <h2 class="quiz-title">Resultado do Quiz</h2>
            <div class="quiz-result">
                <p>${message}</p>
                <button class="quiz-restart">Fazer novamente</button>
            </div>
        `;
        
        document.querySelector('.quiz-restart').addEventListener('click', () => {
            currentQuestion = 0;
            score = 0;
            quizContainer.innerHTML = `
                <h2 class="quiz-title">Quiz do Nosso Amor</h2>
                <div class="quiz-progress">1 de ${quizData.length}</div>
                <div class="quiz-question"><p>${quizData[0].question}</p></div>
                <div class="quiz-options"></div>
                <div class="quiz-feedback"></div>
                <button class="quiz-next" disabled>Próxima Pergunta</button>
            `;
            
      
            const newOptionsEl = quizContainer.querySelector('.quiz-options');
            quizData[0].options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option');
                button.addEventListener('click', () => selectOption(index));
                newOptionsEl.appendChild(button);
            });
            
            quizContainer.querySelector('.quiz-next').addEventListener('click', () => {
                const isCorrect = selectedOption === quizData[currentQuestion].answer;
                showFeedback(isCorrect);
                
                setTimeout(() => {
                    currentQuestion++;
                    if (currentQuestion < quizData.length) {
                        loadQuestion();
                    } else {
                        showResults();
                    }
                }, 5000);
            });
        });
    }

   
    nextBtn.addEventListener('click', () => {
        const isCorrect = selectedOption === quizData[currentQuestion].answer;
        showFeedback(isCorrect);
        
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 5000);
    });

   
    loadQuestion();
})



document.querySelectorAll('.leaf').forEach(leaf => {
    leaf.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        const display = document.querySelector('.message-display');
        
       
        this.style.transform = 'scale(1.3) rotate(360deg)';
        this.style.color = '#ff3a3a';
    
        display.textContent = message;
        display.classList.add('show');
        
    
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.color = '';
        }, 1000);
        
        
        setTimeout(() => {
            display.classList.remove('show');
        }, 5000);
    });
})


const secondModal = document.getElementById('secondModal');
const openSecondModalBtn = document.querySelector('.open-second-modal');
const closeSecondModal = document.querySelector('.close-modal');
const romanticBtn = document.querySelector('.romantic-btn');


openSecondModalBtn.addEventListener('click', function() {
    secondModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
});


closeSecondModal.addEventListener('click', function() {
    secondModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});


secondModal.addEventListener('click', function(e) {
    if (e.target === secondModal) {
        secondModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});


romanticBtn.addEventListener('click', function() {
    secondModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    
    const toast = document.getElementById('loveToast');
    toast.classList.add('show');
    
   
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
});



function updateLoveTime() {
    
    const startDate = new Date(2025, 1, 13); 
    
    const now = new Date();
    const diff = now - startDate;
    
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
   
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}


setInterval(updateLoveTime, 1000);


updateLoveTime();