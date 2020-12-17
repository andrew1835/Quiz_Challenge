// TODO: 1. Create a homepage that the user is directed to whenever they load the page. On this homepage there should be a "Coding Quiz Challenge" title, as well as a description below that that outlines the rules, and a button below that that starts the quiz when clicked on. There should also be a link in the top left to View High Scores, and a timer in the top right that's set to 0 


var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#startQuiz")






// TODO: 2. When the "Start Quiz" button is clicked, clear the main content of the page (except for High Scores and Timer), and replace it with a question that has 4 buttons below it with different answer on each button. Also, make sure the timer starts counting down from 100 once the "Start Quiz" button is clicked. 

var secondsLeft = 101

// The below code calls functions when you click on the "Start Quiz" button

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;

      
        
      document.getElementById("correct5").addEventListener("click", finalPage); 
      function finalPage(){
          clearInterval(timerInterval)
          // *insert name of end screen* = "block";
      }

      jumpHS.addEventListener("click", finalPage)



   
    if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        questions1Start.style.display = "none";
        questions2Start.style.display = "none";
        questions3Start.style.display = "none";
        questions4Start.style.display = "none";
        questions5Start.style.display = "none";
        endPage.style.display = "block";
        document.body.querySelector("#scoreDisplay").textContent = secondsLeft
    }
  
    }, 1000);
  }


    document.querySelector(".wrong11").addEventListener("click", docPoints); 
    document.querySelector(".wrong12").addEventListener("click", docPoints); 
    document.querySelector(".wrong13").addEventListener("click", docPoints); 

    document.querySelector(".wrong21").addEventListener("click", docPoints); 
    document.querySelector(".wrong22").addEventListener("click", docPoints); 
    document.querySelector(".wrong23").addEventListener("click", docPoints); 

    document.querySelector(".wrong31").addEventListener("click", docPoints); 
    document.querySelector(".wrong32").addEventListener("click", docPoints); 
    document.querySelector(".wrong33").addEventListener("click", docPoints); 

    document.querySelector(".wrong41").addEventListener("click", docPoints); 
    document.querySelector(".wrong42").addEventListener("click", docPoints); 
    document.querySelector(".wrong43").addEventListener("click", docPoints); 

    document.querySelector(".wrong51").addEventListener("click", docPoints); 
    document.querySelector(".wrong52").addEventListener("click", docPoints); 
    document.querySelector(".wrong53").addEventListener("click", docPoints); 
 
    

    function docPoints(){
    incorrect.style.display = "block";
    correct.style.display = "none";
    if (secondsLeft>=20){
     secondsLeft = secondsLeft-20
    }
    else {
        secondsLeft = secondsLeft - (secondsLeft-1)
    }
     
    }

var displayText = document.querySelector("#textContent")
var selectStart = document.querySelector(".quizButton")

var questions1Start = document.querySelector("#questions1")
var questions2Start = document.querySelector("#questions2")
var questions3Start = document.querySelector("#questions3")
var questions4Start = document.querySelector("#questions4")
var questions5Start = document.querySelector("#questions5")

var endPage = document.querySelector("#endPage")
var correct = document.querySelector("#correct")
var incorrect= document.querySelector("#incorrect")

var trueQ1 = document.querySelector("#correct1")

var trueQ2 = document.querySelector("#correct2")

var trueQ3 = document.querySelector("#correct3")

var trueQ4 = document.querySelector("#correct4")

var trueQ5 = document.querySelector("#correct5")

 

function startQuiz() {
    displayText.style.display = "none"; 
    selectStart.style.display = "none"; 
    questions1Start.style.display = "block";
    // document.body.appendChild("")

}

function firstQuestions() {
    questions1Start.style.display = "none";
    correct.style.display = "block";
    incorrect.style.display = "none";
    questions2Start.style.display = "block";

}
function secondQuestions() {
    questions2Start.style.display = "none";
    correct.style.display = "block";
    incorrect.style.display = "none";
    questions3Start.style.display = "block";

}
function thirdQuestions() {
    questions3Start.style.display = "none";
    correct.style.display = "block";
    incorrect.style.display = "none";
    questions4Start.style.display = "block";

}
function fourthQuestions() {
    questions4Start.style.display = "none";
    correct.style.display = "block";
    incorrect.style.display = "none";
    questions5Start.style.display = "block";

}
function fifthQuestions() {
    questions5Start.style.display = "none";
    endPage.style.display = "block";
    correct.style.display = "block";
    incorrect.style.display = "none";
    document.body.querySelector("#scoreDisplay").textContent = secondsLeft
 

}

startButton.addEventListener("click", function() {
    setTime();
    startQuiz();
})

trueQ1.addEventListener("click", function() {
    firstQuestions();
    

})

trueQ2.addEventListener("click", function() {
    secondQuestions();
})

trueQ3.addEventListener("click", function() {
    thirdQuestions();
})

trueQ4.addEventListener("click", function() {
    fourthQuestions();
})

trueQ5.addEventListener("click", function() {
    fifthQuestions();
})


// TODO: 3. If the text content of the button clicked === the answer, clear the main content of the page and replace it with another question that has 4 more buttons below it. Else, clear the main content of the page and replace it with another question that has 4 more buttons below it and subtract 20 seconds from the timer, and make "Wrong Answer!" appear below the buttons 

// TODO: 4. Repeat this process through all 5 questions you have. 

// TODO: 5. After the final question, stop the timer at whatever it was at when you answered the final question. Clear the page (except for High Scores in top left and Timer in top right) and display a page that says "All Done!" with an h2 tag. Below that, say your final score is : *insert number from timer here*. Below that say "Enter Initials Here:" with an input field to the right of that, and a submit button to the right of that 

// *** BEFORE GOING FURTHER, REVIEW THE REST OF THE ACTIVITIES. You won't know how to save to local storage if you don't ***

// TODO: 6. When the submit button is clicked, save the initials and the score to the user's local storage. Then, clear the page (completely clear. No more high score and High Scores in the top right and left) and display a page that has "High Scores" with an h2 tag, and below that has a text with the ranking fist, the initials second, and the score last. Below that, have two buttons with one saying "Go Back" and one saying "Clear High Scores." 

var submit = document.querySelector("#submit")

var highScorePage = document.querySelector("#hsPage")

submit.addEventListener("click", function(event) {
    event.preventDefault
    var initials = document.querySelector("#initials").value 
    var hsData = document.querySelector("#hsResults")
    hsData.textContent = initials + "-" + secondsLeft
    goToHighScores();

    //  var scores = [{
    //      name: initials,  
    //      score: secondsLeft
    //  }]
    // localStorage.setItem(highscores, JSON.stringify(scores))
})

function goToHighScores (){
    endPage.style.display = "none";
    highScorePage.style.display = "block";
    correct.style.display = "none";
    incorrect.style.display = "none";
    questions1Start.style.display = "none";
    questions2Start.style.display = "none";
    questions3Start.style.display = "none";
    questions4Start.style.display = "none";
    questions5Start.style.display = "none";
}

// TODO: 7. If the "Go Back" button is clicked, it should sned you to the first page and start the process all over again

var goBack = document.querySelector("#hsGoBack")

goBack.addEventListener("click", function() {
    goHome();
})

function goHome (){
    highScorePage.style.display = "none";
    displayText.style.display = "block"; 
    selectStart.style.display = "block";
    secondsLeft = 101
    
}

// TODO: 7a. If the "View Highscores" button is clicked, it should send you to the Highscores page
var jumpHS = document.querySelector("#viewHS")











   



// TODO: 8. If the "Clear High Scores" button is clicked, it should clear the text that showed the high scores, and should also delete the local storage. 



// 1a. In the index.html file, create all the appropriate tags with IDs/Classes associated with them. Don't put any actual text content in (except for the High Scores link and the timer). You will then create variables in JS that refer to these tags and that push content inside of those tags depending on what button is clicked. I think you can also just create variables and have them be equal to strings which are the text. You will then set the text content equal to those variables. 
// 1b. Create the timer and put it in the top right. Make sure that the function only runs when the "Start Quiz" button is clicked and that the interval is set to 1000 milliseconds. 
// 1c. Create the "High Scores" link at the top of the page, and have it link to nothing (#) for now



// The real question you need to ask is if you need to create multiple HTML pages. I think that you only need two. One for the high scores page, and one for everything else. You don't think you need a new HTML page for each quiz question. Since the formatting for all the questions is the same, it should be easy to just push different content into those same elements when an answer is clicked. 




// Q1: "______ won best picture in 2002:" Answer: A Beautiful Mind    Wrong Answers: Moulin Rouge, Good Will Hunting, Gladiator
// Q2: "This was the first film shot in color:" Answer: Cupid Angling    Wrong Answers: The Wizard of Oz, Gone with the Wind, Snow White 
// Q3: "This, known for directing gangster movies such as "Goodfellas" and "The Irishman", has been received 9 best picture nominations. What is his name?"  Answer: Martin Scorsese   Wrong Answers: Quentin Tarantino, Steven Spielberg, Francis Ford Coppola
// Q4: "This actor finally the Academy Award for Best Actor in 2016, after being nominated for Best Actor thrice in the past and losing each time" Answer: Leonardo Dicaprio    Wrong Answers: Brad Pitt, Jake Gyllenhaall, Benicio del Toro
// Q5: "This horror film, released in 1973, was so shocking that it actually caused many theatre-goers around the world to vomit and faint. The film was so controversial that it was banned in several countreis around the world." Answer: "The Exorcist"    Wrong Answers: "The Poltergeist", "The Shining", "Halloween", "Evil Dead"