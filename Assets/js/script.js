//add event listener for button pressed action -> run function 
//function so when button is pressed a timer appears and counts down from 75 seconds
//for the duration of timer questions appear
//function init to get leaderboard scores

questionsArray = ["What are the 3 main buidling blocks of the web?", "If you addEventListener to a button, what would go in the second parameter", "What is an object?", "What does .push do in relation to an array?"];
fakeAnswer1 = ["JavaScript, C-Sharp, CSS", "a boolean", "a single variable in javascript", "takes a portion of the array and stores it in a variable"];
fakeAnswer2 = ["HTML, C-Sharp, JavaScript", "an integer", "an item within a webpage", "adds item to the start of the array"];
fakeAnswer3 = ["Java, Python, and C-Sharp", "a string", "an element that can be grabbed in html", "removes the last item in an array"];
realAnswer = ["HTML, CSS, and JavaScript", "a function", "a colleciton of properties/key-value pairs", "adds item to to the end of the array"];
var idx = 0;

// var correctAnswers = [];
// var wrongAnswers = [];
var sec = 76; 
var timerDisplay= document.getElementById("timer-display");
var content = document.getElementById("content");
var question = document.getElementById("question");
var answer = document.getElementById("answer");

var answerEvent = false; 
displayCW = document.getElementById ("CorrrectWrong");

function correctAnswer(){
    answerEvent = true;
    userScore++;
    idx++;
    alert("correct!");
    startQuizDisplay();
    if (idx > questionsArray.length-1){
        quizEndPage();
        resetQuestion();
        timerReset();
        endTimer();
        
    }
}

function resetScore(){
    userScore = 0;
}

function resetQuestion (){
    idx = 0;

}

function wrongAnswer(){
    answerEvent = true;
    userScore;
    sec = sec - 5;
    alert("wrong!");

return;
}

function endTimer(){
    timerDisplay.textContent = "";
    sec =-1;
    
}

function timerReset() {
  if (sec === -1) {

    sec = 76;
  }    
  else {
    sec = 76;
}
}


function menu() {
question.replaceChildren();
var quizTitle = document.createElement("h1");
document.querySelector("body").style.textAlign= "center";
quizTitle.textContent= "Coding Quiz Challenge";
question.appendChild(quizTitle);
content.replaceChildren();
var quizAbout = document.createElement("p");
quizAbout.textContent= "If you would like to begin the Coding Quiz Challenge, click the button below";
content.appendChild(quizAbout);
answer.replaceChildren();
var startButton = document.createElement("button");
startButton.textContent = "Start Quiz";
answer.append(startButton);
startButton.addEventListener('click', startQuizDisplay);
startButton.addEventListener('click',startTimer);
};

function startQuizDisplay (){
    document.querySelector("body").style.textAlign = "left"; 
    question.replaceChildren();
    var quizQuestion = document.createElement("h2");
    quizQuestion.textContent = questionsArray[idx];
    question.appendChild(quizQuestion);

    content.replaceChildren();
    var choices = document.createElement("ul");
    choices.style.listStyle="none";
    content.appendChild(choices);

//function that creates list item of questions, outside startquizdisplay, function createObject()
    var option1 = document.createElement("li");
    choices.appendChild(option1);
    var optionButton1= document.createElement("button");
    optionButton1.textContent= fakeAnswer1[idx];
    optionButton1.style.lineHeight="250%";
    optionButton1.style.backgroundColor= "skyblue";
    option1.appendChild(optionButton1);

    var option2 = document.createElement("li");
    choices.appendChild(option2);
    var optionButton2= document.createElement("button");
    optionButton2.textContent= fakeAnswer2[idx];
    optionButton2.style.lineHeight="250%";
    optionButton2.style.backgroundColor= "skyblue";
    option2.appendChild(optionButton2);

    var option3 = document.createElement("li");
    choices.appendChild(option3);
    var optionButton3 = document.createElement("button");
    optionButton3.textContent= fakeAnswer3[idx];
    optionButton3.style.lineHeight="250%";
    optionButton3.style.backgroundColor= "skyblue";
    option3.appendChild(optionButton3);

    var option4 = document.createElement("li");
    choices.appendChild(option4);
    var optionButton4= document.createElement("button");
    optionButton4.textContent=realAnswer[idx];
    optionButton4.style.lineHeight="250%";
    optionButton4.style.backgroundColor= "skyblue";
    option4.appendChild(optionButton4);

    optionButton1.addEventListener("click",wrongAnswer);
    optionButton2.addEventListener("click",wrongAnswer); 
    optionButton3.addEventListener("click",wrongAnswer);

    optionButton4.addEventListener("click", correctAnswer);

    answer.replaceChildren();
    // var corrrectWrong = document.createElement("p");
    // corrrectWrong.setAttribute("id", "CorrectWrong");
    // answer.appendChild(corrrectWrong);
    // when button event selected, visibility = "visible"
    
};

function startTimer() {
    var timer = setInterval(function() {
    sec--;
    if (sec >= 0) {
        timerDisplay.textContent = sec + " seconds remaining";
    } 
    else {
        clearInterval(timer);
        timerDisplay.textContent = "";
        quizEndPage();
        timerReset();
        resetQuestion();
    }

} ,1000);
console.log(timer);
};

var playerName = "";

function quizEndPage(){
    endTimer();
    document.querySelector("body").style.textAlign = "left"; 
    question.replaceChildren();
    var endTitle = document.createElement("h2");
    endTitle.textContent = "Thanks for Playing!";
    question.appendChild(endTitle);

    content.replaceChildren();
    var displayScore = document.createElement("p");
    displayScore.textContent="Your final score is " + userScore + "/" + questionsArray.length;
    content.appendChild(displayScore);

    answer.replaceChildren();
    var inputMessage = document.createElement("p");
    var playerInput = document.createElement("form");
    playerInput.setAttribute("id", "player-form");
    inputMessage.textContent= "Save your score by inputing your initials";
    answer.appendChild(inputMessage);
    answer.appendChild(playerInput);  
    
    var buttonInitials = document.createElement("button");
    buttonInitials.textContent = "Submit Initials";
    answer.appendChild(buttonInitials);
    buttonInitials.setAttribute("type", "button");

    var playerInitials = document.createElement("input");
    playerInitials.setAttribute("id", "playerInput");
    playerInput.appendChild(playerInitials); 
    playerInitials.style.type = "submit"; 
    
    playerInitials.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        buttonInitials.click();
      }
    });

    buttonInitials.addEventListener("click", function (event) {
        if (playerInitials.value == "") {
            alert ("please input your initials");
            quizEndPage();
        }
        else {
            alert("adding your score to leaderboard...")
            createPlayer();
            sortLeaderBoard();
        };
    });


    
}

var userInput = document.getElementsByTagName("input");

var userScore = 0;

const Player = {};
var Players = [];

function collectuserScores () {
    if (quizEndPage()) {
        console.log(userScore);
    }
}

// function addInitials(){
//     if (userInput != null) {
//         var userInitial = userInput;
//         Player.push(userInitial);
//         console.log(player);
//     }
// }



function createPlayer() {
    playerName = document.getElementById("playerInput").value;
    console.log(playerName);
    Player.initials = playerName;
    Player.score = userScore;
    addtoArray();
}

function addtoArray(){
    Players.push({...Player});
    console.log(Player);
    console.log(Players);
}
 

function sortLeaderBoard(){
    
    var sortPlayer = Players.sort(
    (p1, p2) => (p1.score<p2.score) ? 1 : (p1.score>p2.score) ? -1 : 0);
    var firstplace= sortPlayer[0];
        if (sortPlayer.length>1) {
            var secondplace= sortPlayer[1];
        };
        if (sortPlayer.length>2) {
            var thirdplace = sortPlayer[2];
        };

    Leaderboard();

    function Leaderboard() {
        document.querySelector("body").style.textAlign = "center"; 
        question.replaceChildren();
        var leaderboardTitle = document.createElement("h2");
        leaderboardTitle.textContent = "Leaderboard";
        question.appendChild(leaderboardTitle);
    
        content.replaceChildren();
        var displayLeaderboard = document.createElement("ul");
        displayLeaderboard.style.listStyle="none";
        content.appendChild(displayLeaderboard);
    
        var first = document.createElement("li");
        first.textContent= firstplace.initials + " is in first place with " + firstplace.score + " points";
        first.style.lineHeight="250%";
        displayLeaderboard.appendChild(first);
        
        if (sortPlayer.length>1) {
            var second = document.createElement("li");
            second.textContent= secondplace.initials + " is in second place with "+ secondplace.score + " points";
            second.style.lineHeight="250%";
            displayLeaderboard.appendChild(second);
        };

        if (sortPlayer.length>2) {
            var third = document.createElement("li");
            third.textContent= thirdplace.initials + " is in third place with " + thirdplace.score + " points";
            third.style.lineHeight="250%";
            displayLeaderboard.appendChild(third);
        };

        answer.replaceChildren();
        var playAgain = document.createElement("h3");
        playAgain.textContent= "Would you like to play again? ";
        answer.appendChild(playAgain);
    
        var playButtonContainer = document.createElement("div")
        answer.appendChild(playButtonContainer);
        var playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.style.lineHeight="250%";
        playButtonContainer.appendChild(playAgainButton);
        
        playAgainButton.addEventListener("click", menu);
        resetScore();
        timerReset();
    
    };

}

menu();


