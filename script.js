let currentQuestion = 1;

    // Funkcija atsakyti į klausimą
    function answerQuestion(questionNumber, correct) {
        // Slėpti dabartinį klausimą
        document.getElementById("question" + questionNumber).style.display = "none";

        // Jei atsakymas teisingas, parodome pranešimą, kitaip ne
        if (correct) {
            alert("Teisingas atsakymas!");
        } else {
            alert("Neteisingas atsakymas, pabandykite dar kartą.");
        }

        // Rodyti kitą klausimą
        if (currentQuestion < 3) {
            currentQuestion++;
            document.getElementById("question" + currentQuestion).style.display = "block";
        } else {
            alert("Klausimų pabaiga!");
        }
    }

    // Inicializuojame pirmąjį klausimą
    document.getElementById("question1").style.display = "block";

    document.querySelectorAll('.text-container').forEach(container => {
        const toggleButton = container.querySelector('.toggle-text');
        const shortText = container.querySelector('.short-text');
        const fullText = container.querySelector('.full-text');

        toggleButton.addEventListener('click', () => {
            if (fullText.style.display === 'none') {
                fullText.style.display = 'block';
                shortText.style.display = 'none';
                toggleButton.textContent = 'Rodyti mažiau';
            } else {
                fullText.style.display = 'none';
                shortText.style.display = 'block';
                toggleButton.textContent = 'Rodyti daugiau';
            }
        });
    });

