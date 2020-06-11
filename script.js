var start = document.getElementById('thisBtn')
var questionCont = document.getElementById('question1')
var timeEl = document.querySelector(".time");
var main = document.getElementById('mainBtn')
//var start = document.getElementById("startBtn")

var secondsLeft = 75;

//function for the countdown timer 
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left in quiz";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      //trying to make the 1st question hide in the 1st div
      
      
    }

  }, 1000);

  
}




//this hides the 1st div and diplays the second div that contains the questions, it also starats the time. "method found on w3 schools"
function startQuiz() {
  var x = document.getElementById("beg");
  var y = document.getElementById("question1")
  if (x.style.display == "none") {
      x.style.display = "block";
      y.style.display = "none";
  } 
  else {
      x.style.display = "none";
      y.style.display = "block";
      setTime();
  }

  
}




//start.addEventListener("click", setTime)


//how to get the questions to hide in the homepage, how to loop through the questions, how to stop the time and save time left, 