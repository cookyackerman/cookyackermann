function toggleInfo(card) {
            card.style.background = card.style.background === 'rgb(200, 230, 201)' ? 'white' : '#c8e6c9';
        }

        function checkAnswer(option, isCorrect) {
            const result = document.getElementById('quizResult');
            const allOptions = document.querySelectorAll('.quiz-option');
            
            allOptions.forEach(opt => opt.style.pointerEvents = 'none');
            
            if (isCorrect) {
                result.className = 'quiz-result correct';
                result.textContent = '¡Correcto! 🎉 Reutilizar es mejor que reciclar. Siempre piensa primero si puedes darle un nuevo uso.';
                option.style.background = '#4caf50';
                option.style.color = 'white';
            } else {
                result.className = 'quiz-result incorrect';
                result.textContent = '❌ No es la mejor opción. Recuerda: REDUCIR > REUTILIZAR > RECICLAR';
                option.style.background = '#f44336';
                option.style.color = 'white';
            }
            
            result.style.display = 'block';
            
            setTimeout(() => {
                allOptions.forEach(opt => opt.style.pointerEvents = 'auto');
                result.style.display = 'none';
                allOptions.forEach(opt => {
                    opt.style.background = 'white';
                    opt.style.color = '#333';
                });
            }, 4000);
        }

        function mostrarTips() {
            const tips = document.getElementById('tips');
            tips.style.display = tips.style.display === 'none' ? 'block' : 'none';
        }

        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });