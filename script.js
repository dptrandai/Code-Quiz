//Creating the variables for buttons
var startBtn = document.getElementById('start');
var highscoreBtn = document.getElementById('highscores');
var questionsContainer = document.getElementById('questions-container');
var beginningList = document.getElementById('beginning');
var questionsE1 = document.getElementById('question');
var answerBtn = document.getElementById('answers');
var timeE1 = document.getElementById('clock');


//When clicking on the start button, the timer and quiz will start
startBtn.addEventListener('click', startGame, startTimer);



let shuffledQuestions, currentQuestion

function startGame(){
    console.log('Started')
    //This will hide the beginning div and start button
    startBtn.classList.add('hide')
    beginningList.classList.add('hide')
    //Once the above clears, the question div will show  
    questionsContainer.classList.remove('hide')
    //Shuffles the questions and displays a question from the questions array in a random order
    shuffledQuestions = questions.sort(()=>Math.random() -.5)
    //Setting current question to 0 
    currentQuestion = 0
    //Below will set the first question
    nextQuestion()
}

function nextQuestion(){
    //function to reset everything related to form
    resetForm()
    showTheQuestion(shuffledQuestions[currentQuestion])
}

//This will show the question in the question field. Also inside will be a function to set the answers on each button
function showTheQuestion(question){
    questionsE1.innerText = question.question
    question.answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        //Create If statement, saying if the clicked button is the correct answer log this into our dataset to count later for highscore.
        if (answers.correct){
            button.dataset.answers = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtn.appendChild(button)
    });
}

function resetForm(){
    //if there is a child in the answer button element, then we will remove it
    while (answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(){

}

function startTimer(){

}


/////////////////////////////////////////////////////////////////

//functions and variables to create timer.
var setTime = 75

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  
  function sendMessage() {
    timeEl.textContent = " ";
  }
  
  setTime();