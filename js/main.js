const questionElement = document.getElementsByTagName("H3")[0];
const answersList = document.getElementsByClassName("quiz__answers--list")[0];
const answerItems = document.getElementsByClassName("quiz__answers--item");
const quiz = document.getElementsByClassName("quiz")[0];
const counter = document.getElementsByTagName("h4")[0];
const quizHeader = document.getElementsByClassName("quiz__header")[0];
let count = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let quizEnded = false;


const questions = [
    "What team appeared in 4 consecutive Super Bowls from 1991-1994?",
    "Which QB has the most Super Bowl interceptions?",
    "Who holds the single season touchdown receptions record with 23?",
    "Which NFL team moved from San Diego to Los Angeles??",
    "What NFL Team has the most super bowls??",
    "Which NFL team only sports a logo on one side of their helmet??",
    "Emmitt Smith is the NFL's all time leading rusher, who's second??",
    "Aaron Rodgers currently has the highest career passer rating (Min. 1,500 attempts) at 106.0. Who is second?",
    "Chad Ochocinco's real name is _____",
    "How many teams are there in the NFL?",
    "How many roster spots does each NFL team have??",
    "How many rings does Tom Brady have?",
    "Which team is the only team to go undeated and win the super bowl?",
    "Which NFL QB has the most career rushing touchdowns?",
    "Who was the last non-quarterback to win NFL MVP?"
];

const answers = [
    ["Denver Broncos", "Cleveland Browns", "Dallas Cowboys", "Buffalo Bills"],
    ["Eli Manning", "Tom Brady", "John Elway", "Troy Aikman"],
    ["Terrell Owens", "Jerry Rice", "Randy Moss", "Antonio Brown"],
    ["The Rams", "The Raiders", "The Chargers", "The Chiefs"],
    ["Dallas Cowboys", "New England Patriots", "Pitsburgh Steelers", "Green Bay Packers"],
    ["Cleveland Browns", "Pitsburgh Steelers", "Carolina Panthers", "Baltimore Ravens"],
    ["Adrian Peterson", "Barry Sanders", "Walter Peyton", "Jim Brown"],
    ["Tony Romo", "Steve Young", "Tom Brady", "Peyton Manning"],
    ["Jayvon Johhson", "Chad Johnson", "Jamir Johnson", "Jake Johnson"],
    ["28", "36", "30", "32"],
    ["50", "44", "53", "60"],
    ["2", "4", "5", "6"],
    ["New England Patriots", "Green Bay Packers", "Miami Dolphins", "Dallas Cowboys"],
    ["Michael Vick", "Steve Young", "Cam Newton", "Tom Brady"],
    ["Ray Lewis", "Lawrence Taylor", "Adrian Peterson", "Calvin Johnson"]
];

const correctAnswers = [
    "Buffalo Bills",
    "John Elway",
    "Randy Moss",
    "The Chargers",
    "Pitsburgh Steelers",
    "Pitsburgh Steelers",
    "Walter Peyton",
    "Tony Romo",
    "Chad Johnson",
    "32",
    "53",
    "5",
    "Miami Dolphins",
    "Cam Newton",
    "Adrian Peterson"
];

// Rendering DOM Function
const renderQuiz = () => {
    questionElement.innerHTML = questions[count];
    counter.innerHTML = `${count + 1}/${questions.length}`;
    for( let i = 0; i < 4; i++ ) {
        answerItems[i].innerHTML = answers[count][i];
    }
}

// Initializing Quiz
renderQuiz();

// Adding Quiz Functionality
answersList.addEventListener("click", (evt) => {
    if( evt.target.tagName === "LI" ) {
        if( evt.target.innerHTML === correctAnswers[count] ) {
            rightAnswers += 1;
        } else {
            wrongAnswers += 1;
        }
    }
    
    // Adding Post Quiz Results Functionality 
    if(count >= 14) {
        counter.style.display = "none";
        questionElement.style.display = "none";
        answersList.style.display = "none";
        quizEnded = true;
    }

    // Creating and appending reset button if quiz has ended
    if(quizEnded) {
        const btn = document.createElement("BUTTON");
        const h5 = document.createElement("H5");
        btn.innerHTML = "Retake Quiz";
        if( rightAnswers === 15 ) {
            h5.innerHTML = `You got all ${rightAnswers} answers right, perfect!`;
        } else if( rightAnswers > 10 ) {
            h5.innerHTML = `You got ${rightAnswers} answers right, good job!`;
        } else if( rightAnswers > 5 ) {
            h5.innerHTML = `You got ${rightAnswers} answers right, not bad.`;
        } else if( rightAnswers > 0 ) {
            h5.innerHTML = `You got ${rightAnswers} answers right, you can do better!`;
        } else if( rightAnswers === 0 ) {
            h5.innerHTML = `Wow, you didn't get one answer right..`;
        }
        quizHeader.appendChild(h5);
        quizHeader.appendChild(btn);

        // Adding button functionality to retake quiz
        btn.addEventListener("click", () => {
            location.reload();
        });
    }

    count += 1;
    renderQuiz();
});
