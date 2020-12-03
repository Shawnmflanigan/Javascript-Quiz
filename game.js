
// Question and Choices DOM 
let question = document.getElementById("question");
let choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion ={};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let playerChoice = document.getElementById("choiceAnswer");

// Timer Variables and Function
let timeLeft = document.getElementById("timer");
let time = 60;

 setTime= () => {
    let timerInterval = setInterval (function() {
    time--;
    timeLeft.textContent = "Time: " + time;
    
    if(time === 0) {
        clearInterval(timerInterval);
        window.location.href ="highscore.html";
    }
    }, 1000);
}

// Question Array
let questions = [
    
    {
        question: "Inside which html element do we put the javascript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        choice1: "The <body> section.",
        choice2: "The <head> section.",
        choice3: "The <title> section.",
        choice4: "Both the <head> section and the <body> section are correct.",
        answer: 4
    },

    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js?'",
        choice1: "<script src='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script href='xxx.js'>",
        choice4: "<scr src='xxx.js'>",
        answer: 1
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msg('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "alert('Hello World');",
        choice4: "msgBox('Hello World');",
        answer: 3
    },

    {
        question: "How to write an IF statement in JavaScript?",
        choice1: "if i = 5",
        choice2: "if i = 5 then",
        choice3: "if(i == 5)",
        choice4: "if i == 5 then",
        answer: 1 
    },
    // Add more questions here
]

// If we add more questions and limit the number of questions enter the max questions here.
const max_questions = 5

// Start Game Function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions= [...questions];
    setTime ();
    getNewQuestion();
};

// Question generator function randomly ordered.
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= max_questions) {
        return window.location.assign("highscore.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

// Choice selector and functions.
choices.forEach( choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classAnswer = 'wrong';
            if (selectedAnswer == currentQuestion.answer) {
                classAnswer = 'right';
                playerChoice.innerText = 'You are Correct';
            }   else {
                classAnswer = 'wrong';
                playerChoice.innerText = 'You are Wrong';
            } 

        getNewQuestion()
    });
});

// Run Start Game
startGame ();