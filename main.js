10 questions
true or false
randomised questions
turns is automatic
score

questions - array

true/false for one question


//pseudo code:
User
Game start
Question 1
player 1 select true or false
question 2
player 2 select true or false
until question 10
End

Computer
Initiate Game
randomly choose question
display question
accept selection from user True/False
compare with answer, correct or wrong
keep score +1 or 0
count number of questions completed +1
randomly choose question
display question
accept selection from user True/False
compare with answer, correct or wrong
keep score +1 or 0
count number of questions completed +1
count until 10 then finish
display winner or draw
reload game


var questions  = [
  "You would wear a ‘sautoir’ around your neck.",
  "Turnip is a ‘rutabaga’ type of vegetable.",
  "The Suez Canal is in Italy.",
  "Fe is the symbol of iron.",
  "Pyrenees is between Greece and Italy",
  "The goose was the first bird domesticated by man",
  "Neptune is closest to the Sun.",
  "Fission powers the sun.",
  "The sun is about 5 billion years old.",
  "The earth is about 5.5 billion years old."
];

var ans = [ True, True, False, True, False,  True, False, False, True, False];

var turn = 1;
var scoreP1 = 0;
var scoreP2 = 0;

Math.floor(Math.random()* 10);
integer

numberOfQuestions()   //It should return an integer that is the number of questions in a game
currentQuestion()  //It should return an integer that is the zero-based index of the current question in the quiz

correctAnswer()  //It should return an integer that is the zero-based index the correct answer for the currrent question

numberOfAnswers() //It should return an integer that is the number of choices for the current question

playTurn(choice)  //It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.

isGameOver() //It should return a true or false if the quiz is over.

whoWon()  //It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.

restart()  //It should restart the game so it can be played again.
