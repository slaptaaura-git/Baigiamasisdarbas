let currentQuestion = 1;
const totalQuestions = 9;

function answerQuestion(questionNumber, correct) {
   
    document.getElementById("question" + questionNumber).style.display = "none";

   
    if (correct) {
        alert("Teisingas atsakymas!");
    } else {
        alert("Neteisingas atsakymas, pabandykite dar kartą.");
    }


    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        document.getElementById("question" + currentQuestion).style.display = "block";
    } else {
        alert("Klausimų pabaiga! Ačiū, kad dalyvavote!");
        showResults();
    }
}


function showResults() {
    const mainElement = document.querySelector("main");
    const resultElement = document.createElement("div");
    resultElement.classList.add("results");
    resultElement.innerHTML = `<h2>Baigėte viktoriną!</h2><p>Ačiū už dalyvavimą!</p>`;
    mainElement.appendChild(resultElement);
}


document.getElementById("question1").style.display = "block";
