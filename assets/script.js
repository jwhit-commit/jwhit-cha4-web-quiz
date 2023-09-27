var welcome = document.getElementById("welcome");
var start = document.getElementById("start");
var q5 = document.getElementById('q5');
var q6 = document.getElementById('q6');
var answers = document.getElementsByClassName("answer");
var questions = document.getElementsByClassName("question");
var corrects = ["2. alerts","3. parentheses","4. all the above","3. quotes"];
var newInitials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var time = document.getElementById("time")
var timer = time.textContent;
var finalAnswers = [];
var highScores = JSON.parse(localStorage.getItem("highScores"));
var goscores = document.getElementById("goscores");
var scoreslist = document.getElementById("scoreslist");

if (highScores == null) {
    highScores = []
}


for (var i=0; i<answers.length;i++) {
    if (answers[i].dataset.questionNumber == 4) {
        finalAnswers.push(answers[i]);
    }
}


// Create function to start and stop timer and display score upon quiz complete
function startTimer(event) {
    var timerInterval = setInterval(function() {
        timer--;
        time.textContent = timer;
        score.textContent = timer;

        if (timer === 0) {
            clearInterval(timerInterval);
            for (var i=0; i<questions.length;i++) {
                questions[i].style.display = "none";
            }
            q5.style.display = "flex";
        } else if (q5.style.display == "flex") {
            clearInterval(timerInterval);
        }
    }, 1000)
}


// Create function to advance questions slides and evaluate responses
function nextQuestion(event) {
    var q = event.target.getAttribute("data-question-number");
    var qChange = "q";
    if (q === "0") {
        welcome.style.display = "none";
        q1.style.display = "flex";
    } 
    
    else {
        // Construct variables to get next Main element that is currently hidden
        qPrev = qChange.concat(q);
        qNext = Number.parseInt(q) + 1;
        qNext = qChange.concat(qNext);

        document.getElementById(qPrev).style.display = "none";

        var next = document.getElementById(qNext); 
        next.style.display = "flex";
        var hr = document.createElement("hr");
        next.appendChild(hr);

        var responseStatus = document.createElement("h5");
        next.appendChild(responseStatus);

        var response = event.target.textContent;
        if (corrects.includes(response)) {
            responseStatus.textContent = "Correct!";
        } else {
            responseStatus.textContent = "That was incorrect";
            timer = timer - 10;
        }
    }
}


// Create function to save initials and scores to localStorage scores array
function saveInitials(event) {
    event.preventDefault();

    var initials = newInitials.value.trim();
    var newScore = initials.concat(" - ", timer);
    
    highScores.push(newScore);
    localStorage.setItem("highScores",JSON.stringify(highScores));

    showScores();
}


// Create function to display scores 
function showScores() {
    welcome.style.display = "none";
    for (var i=0; i<questions.length;i++) {
        questions[i].style.display = "none";
    }
    q6.style.display = "flex";
    for (var i=0; i<highScores.length;i++) {
        var listitem = document.createElement("li"); 
        listitem.textContent = highScores[i];
        scoreslist.appendChild(listitem);
    }    
}



// Add click listeners to buttons that will trigger question response function, summary, and high score screen
start.addEventListener("click", nextQuestion);

start.addEventListener("click", startTimer);

for (var i=0; i<answers.length;i++) {
    answers[i].addEventListener("click", nextQuestion);
}

submitBtn.addEventListener("click", saveInitials);

goscores.addEventListener("click",showScores);
