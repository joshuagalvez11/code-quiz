var contentEL = document.querySelector("#content");
var questions = 
[
    { 
    question: "Pick one",
    answerChoices: ["1", "2", "3", "4"],
    answer: "1"
    }
];


function clearContent() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
  }

function init() {
    //clearContent();

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
    //clearContent();

    var questionNum = 0;
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

  }

  init();
  quizQuestion();
