var welcome = document.getElementById("welcome");
var start = document.getElementById("start");
var answers = document.getElementsByClassName("answer");
var corrects = ["2. alerts","3. parentheses","4. all the above","3. quotes"];

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
            responseStatus.textContent = "Correct!"
        } else {
            responseStatus.textContent = "That was incorrect"
        }
    }
}

// Add click listeners to buttons that will trigger question response function
start.addEventListener("click", nextQuestion);

for (var i=0; i<answers.length;i++) {
    answers[i].addEventListener("click", nextQuestion);
}





