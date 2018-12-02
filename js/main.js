const questionElement = document.getElementsByTagName("H3")[0];
const answersList = document.getElementsByClassName("quiz__answers--list")[0];
const answerItems = document.getElementsByClassName("quiz__answers--item");
const counter = document.getElementsByTagName("H4")[0];
const count = 0;


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
    ["They both broke their legs", "They both wear the number 11", "They both played for the Oakland Radiers"],
    ["2015", "2017", "2013"],
    ["Won 5 been to 7", "Won 3 been to 5", "Won 5 been to 8"],
    ["The Rams", "The Raiders", "The Chargers"],
    ["Dallas Cowboys", "New England Patriots", "Pitsburgh Steelers"],
    ["Cleveland Browns", "Pitsburgh Steelers", "Carolina Panthers"],
    ["Adrian Peterson", "Barry Sanders", "Walter Peyton"],
    ["Dallas Cowboys", "Green Bay Packers", "Chicago Bears"],
    ["New England Patriots and Seattle Seahawks", "Pitsburgh Steelers and Arizona Cardinals", "New York Giants and New England Patriots"],
    ["New England Patriots", "Miami Dolphins", "Cleveland Browns"]
];

const rightAnswers = [
    "They both broke their legs",
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


questionElement.innerHTML = questions[count];
counter.innerHTML = `${count + 1}/${questions.length}`;
for( let i = 0; i < 3; i++ ) {
    answerItems[i].innerHTML = answers[count][i]
}










