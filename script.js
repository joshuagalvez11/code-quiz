var contentEL = $("#content");
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
var timerCount;
var startBTN;
var answers;


function clearContent() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
  }

function init() {
    clearContent();

    var quizStart = document.createElement("h1");
    quizStart.textContent = "Start Quiz";
    contentEL.append(quizStart);

    var quizDirections = document.createElement("p");
    quizDirections.textContent = "Select correct answers before timer runs out. If you get one wrong minus 10 sec. Good luck";
    contentEL.append(quizDirections);

    var quizButton = document.createElement("button");
    quizButton.textContent = "Start";
    contentEL.append(quizButton);
    startBTN = quizButton;
  }

  function quizQuestion(){
    clearContent();

    var questionText = $("<h1>");
    var questionAnswers = $("<ul>");
    

    questionText.text((questions[questionNum].question));
    
    for (var i = 0; i < questions[questionNum].answerChoices.length; i++){
        var answerChoice = $("<li>");
        answerChoice.addClass('choice');

        answerChoice.text(questions[questionNum].answerChoices[i]);
        questionAnswers.append(answerChoice);
    }

    contentEL.append(questionText);
    contentEL.append(questionAnswers);
    questionNum++;
    answers = questionAnswers;
  }

  function startTimer() {
    // Sets timer
    timerCount = 60;
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

var startGame = function () {
    quizQuestion()
    startTimer();
};
  startBTN.addEventListener('click', startGame);


var selectAnswer = function (event) {
    console.log(event.target.textContent);
    if(event.target.textContent === questions[questionNum-1].answer){
        console.log("win");
    }else{
        console.log("loss");
        timerCount -= 10;
    }

    quizQuestion();    
};
  
contentEL.on('click', '.choice', selectAnswer);
