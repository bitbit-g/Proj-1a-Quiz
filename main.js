//Reset Game
function restart() {
  location.reload();
}

var questions = [
  "You would wear a ‘sautoir’ around your neck.",
  "Turnip is a ‘rutabaga’ type of vegetable.",
  "The Suez Canal is in Italy.",
  "Fe is the symbol of iron.",
  "Pyrenees is between Greece and Italy",
  "The goose was the first bird domesticated by man",
  "Neptune is closest to the Sun.",
  "Fission powers the sun.",
  "The sun is about 5 billion years old.",
  "The earth is about 5.5 billion years old.",
  "Bruce Springsteen is a guitarist also known as Slowhand",
  "An otter's home is called Holt",
  "Madonna had a 1985 hit with Saving All My Love For You",
  "Sugar Loaf mountain overlooks Rio De Janeiro and its harbour",
  "Paul Ince was the first black player to captain England's soccer team",
  "In Roman mythology, Neptune is the equivalent to the Greek god Zeus",
  "Mr Spock from Star Trek said, 'Live long and prosper'",
  "Anton Chekov wrote The Seabeast, Uncle Vanka, and The Apple Park",
  "GNU is the other name for Wilderbeast",
  "Flowerpot Men had a 1960s hit with Let's Go To San Francisco",
  "The time-machine car in the film Back To The Future was the DE LOREAN",
  ];

var answers = ["T", "T",
"F", "T", "F", "T", "F",
"F", "T", "F", "F", "T", "F", "T", "T", "F", "T", "F", "F", "T", "T"];

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
  dispQn.innerText=questions[randm];
  console.log(questions[randm]);
}

function spliceQnAns(){
var rmvQn = questions.splice(randm, 1);
var rmvAns = answers.splice(randm, 1);
}
chooseQn();
spliceQnAns();
//chooseQn();

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

function onClick(event){
  var ans = event.target.getAttribute("id");
  //check gameover
console.log("turn is: "+ turn);
console.log("ans is: "+ ans + ", random: " + answers[randm]);
console.log("qn is: "+ questions[randm]);
if (turn % 2 === 1 && noofQues <= 20) {
  if (ans === answers[randm]) {
    pOneScore();
    turn += 1;
    noofQues += 1;
    chooseQn();
    spliceQnAns();
   console.log("p1 is correct");
    }
  else {
    turn += 1;
    noofQues += 1;
    chooseQn();
    spliceQnAns();
    console.log("p1 is wrong");
  }
}
else if (turn % 2 === 0 && noofQues <= 20){
  if (ans === answers[randm]) {
    pTwoScore();
    turn += 1;
    noofQues += 1;
    chooseQn();
    spliceQnAns();
    console.log("p2 is correct");
  }
  else {
    turn += 1;
    noofQues += 1;
    chooseQn();
    spliceQnAns();
      console.log("p2 is wrong");
  }
}
}
