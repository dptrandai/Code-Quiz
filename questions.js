
// Creating the variables for each question
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
        answer: "<script>"
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onmouseover", "onchange", "onclick"],
        answer: "onclick"
    },
    {
        title: "How do you declare a Javascript variable?",
        choices: ["variable carName", "var carName", "v carName", "const carname"],
        answer: "var carName"
    },
    {
        title: "How do you round the number 7.25, to the nearest integer?",
        choices: ["Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "round(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        title: "What does CSS stand for?",
        choices: ["Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "Which HTML attribute is used to define inline styles?",
        choices: ["class", "font", "styles", "style"],
        answer: "style"
    },
    {
        title: "Which CSS property is used to change the text color of an element?",
        choices: ["text-color", "color", "fgcolor", "font-color"],
        answer: "color"
    },
    {
        title: "Which CSS property controls the text size?",
        choices: ["font-style", "text-style", "text-size", "font-size"],
        answer: "font-size"
    },
  ];

  //creating the array for buttons
  var startBtn = document.getElementById("startBtn");
  var highscoreBtn = document.getElementById("highScores");
  var timeEl = document.getElementById("time")

  //Creating eventlistener to popup quiz questions and start to counting down the timer
  startBtn.addEventListener('click', )
  //Button will take you to view high score page
  highscoreBtn.addEventListener('click', )

  //Create the variable and function for timer
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  })
