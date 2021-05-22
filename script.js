var contentEL = document.querySelector("#content");
var timerEL = document.querySelector("#timer");
var questions = 
[
    { 
    question: "Pick one",
    answerChoices: ["1", "2", "3", "4"],
    answer: "1"
    },
    {
        question: "Pick two",
        answerChoices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "Pick three",
        answerChoices: ["1", "2", "3", "4"],
        answer: "3"
    }
];
var questionNum = 0;
var timer;


function clearContent() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
  }

function init() {
    clearContent();

    var quizStart = document.createElement("h1");
    quizStart.textContent = "Start Quiz";
    contentEL.appendChild(quizStart);

    var quizDirections = document.createElement("p");
    quizDirections.textContent = "Select correct answers before timer runs out. If you get one wrong minus 10 sec. Good luck";
    contentEL.appendChild(quizDirections);

    var quizButton = document.createElement("button");
    quizButton.textContent = "Start";
    contentEL.appendChild(quizButton);
  }

  function quizQuestion(){
    clearContent();

    var questionText = document.createElement("h1");
    var questionAnswers = document.createElement("ul");

    questionText.textContent=(questions[questionNum].question);
    
    for (var i = 0; i < questions[questionNum].answerChoices.length; i++){
        var answerChoice = document.createElement("li");
        answerChoice.textContent = questions[questionNum].answerChoices[i];
        questionAnswers.appendChild(answerChoice);
    }

    contentEL.appendChild(questionText);
    contentEL.appendChild(questionAnswers);
    questionNum++;
  }

  function startTimer() {
    // Sets timer
    var timerCount = 5;
    timer = setInterval(function() {
        timerCount--;
      timerEL.textContent = "Timer: " + timerCount;
      // Tests if time has run out
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
}


  init();
  startTimer()
  quizQuestion();
  quizQuestion();