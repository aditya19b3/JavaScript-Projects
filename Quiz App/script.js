const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
            
        ]
    },
    {
        question: "What is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Artic", correct: false},
            {text: "Africa", correct: false}
            
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antratica", correct: true}
            
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
            
        ]
    },
    {
        question: "Which is the country in the world?",
        answers: [
            {text: "Vitican City", correct: true},
            {text: "USA", correct: false},
            {text: "Nouru", correct: false},
            {text: "India", correct: false}
            
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const NextBtn = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let Score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    Score = 0;
    NextBtn.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    NextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        Score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    NextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${Score} out of ${questions.length}!`;
    NextBtn.innerHTML = "Play Again";
    NextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

NextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
