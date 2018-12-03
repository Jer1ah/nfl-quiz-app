const questionElement = document.getElementsByTagName("H3")[0];
const answersList = document.getElementsByClassName("quiz__answers--list")[0];
const answerItems = document.getElementsByClassName("quiz__answers--item");
const quiz = document.getElementsByClassName("quiz")[0];
const counter = document.getElementsByTagName("H4")[0];
let count = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let bool = false;


const questions = [
    "What do Joe Thiesman and Alex Smith have in common??",
    "In what year did Cam Newton win NFL MVP??",
    "How many super bowls has Tom Brady won? And how many has he been to in total??",
    "Which team in the NFL moved from San Diego to Los Angeles??",
    "What NFL Team has the most super bowls??",
    "Which NFL team only sports a logo on one side of the helmet??",
    "Emmitt Smith is the NFL's all time leading rusher, who's second??",
    "Which team won the first ever super bowl??",
    "The helmet catch is one of the greatest moments in super bowl history, which two teams participated in this super bowl??",
    "Only one team in NFL history ever went undefeated in the regular season and went on to win the super bowl, which team was it??"
];

const answers = [
    ["They both broke their leg", "They both wear the number 11", "They both played for the Oakland Radiers"],
    ["2015", "2017", "2013"],
    ["Won 5 and been to 7", "Won 3 and been to 5", "Won 5 and been to 8"],
    ["The Rams", "The Raiders", "The Chargers"],
    ["Dallas Cowboys", "New England Patriots", "Pitsburgh Steelers"],
    ["Cleveland Browns", "Pitsburgh Steelers", "Carolina Panthers"],
    ["Adrian Peterson", "Barry Sanders", "Walter Peyton"],
    ["Dallas Cowboys", "Green Bay Packers", "Chicago Bears"],
    ["New England Patriots and Seattle Seahawks", "Pitsburgh Steelers and Arizona Cardinals", "New York Giants and New England Patriots"],
    ["New England Patriots", "Miami Dolphins", "Cleveland Browns"]
];

const correctAnswers = [
    "They both broke their leg",
    "2015",
    "Won 5 and been to 8",
    "The Chargers",
    "Pitsburgh Steelers",
    "Pitsburgh Steelers",
    "Barry Sanders",
    "Green Bay Packers",
    "New York Giants and New England Patriots",
    "Miami Dolphins"
];


const renderQuiz = () => {
    questionElement.innerHTML = questions[count];
    counter.innerHTML = `${count + 1}/${questions.length}`;
    for( let i = 0; i < 3; i++ ) {
        answerItems[i].innerHTML = answers[count][i];
    }
}

renderQuiz();

answersList.addEventListener("click", (evt) => {
    if( count > 8 ) {
       if( rightAnswers > 5 ) {
          counter.style.display = "none";
          answersList.style.display = "none";
          questionElement.innerHTML = `You got ${rightAnswers} correct, good job!`;
        } else if( rightAnswers < 5 ) {
          counter.style.display = "none";
          answersList.style.display = "none";
          questionElement.innerHTML = `You got ${rightAnswers} correct, you can do better!`; 
        }
        bool = true;
        if( bool ) {
            const btn = document.createElement("BUTTON");
            btn.innerHTML = "Retry";
            quiz.appendChild(btn);
            btn.addEventListener("click", () => {
                location.reload();
            });
        }
    }
    if( evt.target.tagName = "LI" ) {
        if( evt.target.innerHTML === correctAnswers[count] ) {
            rightAnswers += 1;
        } else {
            wrongAnswers += 1;
        }
        count += 1;
      }
    if( count < 10 ) { 
        renderQuiz();
    } 
});

















