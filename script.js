// TODO: 1. Create a homepage that the user is directed to whenever they load the page. On this homepage there should be a "Coding Quiz Challenge" title, as well as a description below that that outlines the rules, and a button below that that starts the quiz when clicked on. There should also be a link in the top left to View High Scores, and a timer in the top right that's set to 0 


var timeEl = document.querySelector("#time");
var startButton = document.querySelector("#startQuiz")






// TODO: 2. When the "Start Quiz" button is clicked, clear the main content of the page (except for High Scores and Timer), and replace it with a question that has 4 buttons below it with different answer on each button. Also, make sure the timer starts counting down from 100 once the "Start Quiz" button is clicked. 

var secondsLeft = 101

// The below code calls functions when you click on the "Start Quiz" button

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;



        document.getElementById("correct5").addEventListener("click", finalPage);
        function finalPage() {
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



function docPoints() {
    incorrect.style.display = "block";
    correct.style.display = "none";
    if (secondsLeft >= 20) {
        secondsLeft = secondsLeft - 20
    }
    else {
        secondsLeft = secondsLeft - (secondsLeft - 1)
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
var incorrect = document.querySelector("#incorrect")

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

startButton.addEventListener("click", function () {
    setTime();
    startQuiz();
})

trueQ1.addEventListener("click", function () {
    firstQuestions();
})

trueQ2.addEventListener("click", function () {
    secondQuestions();
})

trueQ3.addEventListener("click", function () {
    thirdQuestions();
})

trueQ4.addEventListener("click", function () {
    fourthQuestions();
})

trueQ5.addEventListener("click", function () {
    fifthQuestions();
})


// TODO: 3. If the text content of the button clicked === the answer, clear the main content of the page and replace it with another question that has 4 more buttons below it. Else, clear the main content of the page and replace it with another question that has 4 more buttons below it and subtract 20 seconds from the timer, and make "Wrong Answer!" appear below the buttons 

// TODO: 4. Repeat this process through all 5 questions you have. 

// TODO: 5. After the final question, stop the timer at whatever it was at when you answered the final question. Clear the page (except for High Scores in top left and Timer in top right) and display a page that says "All Done!" with an h2 tag. Below that, say your final score is : *insert number from timer here*. Below that say "Enter Initials Here:" with an input field to the right of that, and a submit button to the right of that 

// *** BEFORE GOING FURTHER, REVIEW THE REST OF THE ACTIVITIES. You won't know how to save to local storage if you don't ***

// TODO: 6. When the submit button is clicked, save the initials and the score to the user's local storage. Then, clear the page (completely clear. No more high score and High Scores in the top right and left) and display a page that has "High Scores" with an h2 tag, and below that has a text with the ranking fist, the initials second, and the score last. Below that, have two buttons with one saying "Go Back" and one saying "Clear High Scores." 

var submit = document.querySelector("#submit")

var highScorePage = document.querySelector("#hsPage")

var hsRankSpan = document.querySelector("#hsRank")

var scoreList = document.querySelector("#scoreList")

var hsEntries = document.querySelector(".hsEntries")

var initialsEntry = document.querySelector("#initials")

var scores = [];

init();

function renderScores() {
    scoreList.innerHTML = ""
    // Render a new p for each submit
    for (var i = 0; i < scores.length; i++) {

        var score = scores[i];
        var li = document.createElement("li")
        li.textContent = score.initials + "-" + score.score;
        li.setAttribute("data-index", i);
        scoreList.appendChild(li)


    }
}

function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    console.log(storedScores)
    if (storedScores !== null) {
        scores = storedScores
        console.log(scores)
    }
    // renderScores();
}

function storeScores() {
    console.log(scores)
    localStorage.setItem("scores", JSON.stringify(scores));
}


submit.addEventListener("click", function (event) {
    event.preventDefault
    var initials = initialsEntry.value.trim();
    var score = document.querySelector("#scoreDisplay").textContent


    scores.push({ initials: initials })
    scores[scores.length - 1].score = score
    console.log(scores)
    scores.sort(compare)
    initialsEntry.value = ""

    storeScores();
    goToHighScores();
    renderScores();

    //  var scores = [{
    //      name: initials,  
    //      score: secondsLeft
    //  }]
    // localStorage.setItem(highscores, JSON.stringify(scores))
})

function goToHighScores() {
    endPage.style.display = "none";
    displayText.style.display = "none";
    selectStart.style.display = "none";
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

goBack.addEventListener("click", function () {
    goHome();
})

function goHome() {
    highScorePage.style.display = "none";
    displayText.style.display = "block";
    selectStart.style.display = "block";
    secondsLeft = 101

}

// TODO: 7a. If the "View Highscores" button is clicked, it should send you to the Highscores page
var jumpHS = document.querySelector("#viewHS")
var hsClear = document.querySelector("#hsClear")

jumpHS.addEventListener("click", function () {
    goToHighScores();
    renderScores();
})
hsClear.addEventListener("click", function () {
    scores = []
    localStorage.removeItem("scores")
    console.log(localStorage)
    scoreList.innerHTML = ""
})

function compare(a, b) {
    var scoreA = a.score
    var scoreB = b.score
    var comparison = 0
    if (scoreA > scoreB) {
        comparison = 1
    }
    else if (scoreA < scoreB) {
        comparison = -1
    }
    return comparison * -1

}




