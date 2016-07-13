//Reset Game
var reset = document.getElementById("reset");
var clickReset = function() {
    location.reload();
};
reset.addEventListener('click', clickReset);

var questions = [
  {
    question: "You would wear a ‘sautoir’ around your neck.",
    answer: "T"
  },
  {
    question: "Turnip is a ‘rutabaga’ type of vegetable.",
    answer: "T"
  },
  {
    question: "The Suez Canal is in Italy.",
    answer: "F"
  },
  {
    question: "Fe is the symbol of iron.",
    answer: "T"
  },
  {
    question: "Pyrenees is between Greece and Italy",
    answer: "F"
  },
  {
    question: "The goose was the first bird domesticated by man",
    answer: "T"
  },
  {
    question: "Neptune is closest to the Sun.",
    answer: "F"
  },
  {
    question: "Fission powers the sun.",
    answer: "F"
  },
  {
    question: "The sun is about 5 billion years old.",
    answer: "T"
  },
  {
    question: "The earth is about 5.5 billion years old.",
    answer: "F"
  },
  {
    question: "Bruce Springsteen is a guitarist also known as Slowhand",
    answer: "F"
  },
  {
    question: "An otter's home is called Holt",
    answer: "T"
  },
  {
    question: "Madonna had a 1985 hit with Saving All My Love For You",
    answer: "F"
  },
  {
    question: "Sugar Loaf mountain overlooks Rio De Janeiro and its harbour",
    answer: "T"
  },
  {
    question: "Paul Ince was the first black player to captain England's soccer team",
    answer: "T"
  },
  {
    question: "In Roman mythology, Neptune is the equivalent to the Greek god Zeus",
    answer: "F"
  },
  {
    question: "Mr Spock from Star Trek said, 'Live long and prosper'",
    answer: "T"
  },
  {
    question: "Anton Chekov wrote The Seabeast, Uncle Vanka, and The Apple Park",
    answer: "F"
  },
  {
    question: "GNU is the other name for Wilderbeast",
    answer: "F"
  },
  {
    question: "Flowerpot Men had a 1960s hit with Let's Go To San Francisco",
    answer: "T"
  },
  {
    question: "The time-machine car in the film Back To The Future was the DE LOREAN",
    answer: "T"
  }
  ];


var turn = 1;
var noofQues = 1;

//connect true button click to value 1

var buttont = document.getElementById("T");
var buttonf = document.getElementById("F");
buttont.addEventListener("click", onClick);
buttonf.addEventListener("click", onClick);
var event = document.getElementById(event);


//chooseQuestion + display Question

var randm;

function chooseQn(){
  randm = Math.floor(Math.random() * questions.length);
  var dispQn = document.getElementById("questions");
  dispQn.innerText=questions[randm].question;
}
// spliceQnAns();
function spliceQnAns(){
var rmvQnAns = questions.splice(randm, 1);
}
chooseQn();


//keep score
var scoreP1 = 0;
var scoreP2 = 0;

function pOneScore(){
    var one = document.getElementById("one");
    scoreP1 += 1;
    one.innerText = scoreP1;

}

function pTwoScore(){
var two = document.getElementById("two");
    scoreP2 += 1;
    two.innerText = scoreP2;
}

function checkWinner(){
  if (scoreP1 === scoreP2){
    alert("It's a tie! Click Reset to play again");
  }
  else if (scoreP1 > scoreP2 || scoreP1 === 5){
    alert("Player 1 wins! Click Reset to play again");
  }
  else if (scoreP1 < scoreP2 || scoreP1 === 5){
    alert("Player 2 wins! Click Reset to play again");
  }
}

function onClick(event){
  var ans = event.target.getAttribute("id");

if (turn % 2 === 1) {
  if (ans === questions[randm].answer) {
    pOneScore();
    turn += 1;
    noofQues += 1;
    if(noofQues === 10){checkWinner();}
    spliceQnAns();
    chooseQn();
   console.log("p1 is correct");
    }
  else {
    turn += 1;
    noofQues += 1;
    if(noofQues === 10){checkWinner();}
    spliceQnAns();
    chooseQn();
    console.log("p1 is wrong");
  }
}
else if (turn % 2 === 0){
  if (ans === questions[randm].answer) {
    pTwoScore();
    turn += 1;
    noofQues += 1;
    if(noofQues === 10){checkWinner();}
    spliceQnAns();
    chooseQn();
    console.log("p2 is correct");
  }
  else {
    turn += 1;
    noofQues += 1;
    if(noofQues === 10){checkWinner();}
    spliceQnAns();
    chooseQn();
    console.log("p2 is wrong");
  }

}
}
