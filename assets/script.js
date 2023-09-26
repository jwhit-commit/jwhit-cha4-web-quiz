var welcome = document.getElementById("welcome");
var start = document.getElementById("start");
var answers = document.getElementsByClassName("answer");
var corrects = ["2. alerts"]

// Create function to advance questions slides and evaluate responses
function nextQuestion(event) {
    console.log(event);
    var q = event.target.getAttribute("data-question-number");
    var qChange = "q";
    console.log(q);
    if (q === "0") {
        welcome.style.display = "none";
        q1.style.display = "flex";
    } else {
        qPrev = qChange.concat(q);
        qNext = Number.parseInt(q) + 1;
        qNext = qChange.concat(qNext);

        document.getElementById(qPrev).style.display = "none";

        var next = document.getElementById(qNext);
        next.style.display = "flex";

        var response = event.target.textContent;
        if (corrects.includes(response))

    }
}

// Add click listeners to buttons that will trigger question response function
start.addEventListener("click", nextQuestion);

for (var i=0; i<answers.length;i++) {
    answers[i].addEventListener("click", nextQuestion);
}