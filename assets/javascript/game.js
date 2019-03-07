// Individually a bunch of us worked on our projects and we all have our own HTML and CSS. Together me, Stephen, Jaime, Peter and Sarah all met up and tried to work on the JS.
// Jaime met with his tutor and helped organize this data structure which I thought was really clever. Making all of the crystals in 1 object made it easy to access them for the randomizing tools to use later.
// I thought about procedurally generating each crystal with a function but this just ended up being so clean and easy to use.

// this is where I made a variable that contains and array of objects.
// I gave each crystal a value of 0 to start and one of the functions I built later will assign them a random value between 1 and 12.
var crystals = {
  crystalOne: {
    name: "crystalOne",
    value: 0
  },
  crystalTwo: {
    name: "crystalTwo",
    value: 0
  },
  crystalThree: {
    name: "crystalThree",
    value: 0
  },
  crystalFour: {
    name: "crystalFour",
    value: 0
  }
};

// I created a few more global variables here with a value of 0. I use these to track the wins and losses from round to round and what the user's current score is in the game.
var wins = 0;
var losses = 0;
var currentCrystals = 0;

// This is the random number generator function I created using what we learned in the coin flip/lottery exercises.
var randomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// here's the starting game function. I made it it's own function so that I could call it every time I wanted the crystal's values and user score to reset for a new instance of the game.
// learning that we could limit the scope of the numbers but just putting the range in a parenthesis blew my mind and made it so easy.
var startGame = function() {
  currentCrystals = 0;
  targetCrystals = randomNum(19, 120);
  crystals.crystalOne.value = randomNum(1, 12);
  crystals.crystalTwo.value = randomNum(1, 12);
  crystals.crystalThree.value = randomNum(1, 12);
  crystals.crystalFour.value = randomNum(1, 12);

  $("#playerCrystals").text(currentCrystals);
  $("#targetCrystals").text(targetCrystals);

  // these were to check that this function actually worked and assigned random values in between the ranges I wanted.
  // console.log("crystal one", crystals.crystalOne.value);
  // console.log("crystal two", crystals.crystalTwo.value);
  // console.log("crystal three", crystals.crystalThree.value);
  // console.log("crystal four", crystals.crystalFour.value);
  // console.log("Number you want!", targetCrystals);
};

var checkToWin = function() {
  //comparing numberToGet to finalScore
  if (currentCrystals > targetCrystals) {
    alert("lost");
    losses++;
    $("#losses").text(losses);
    startGame();
  } else if (currentCrystals === targetCrystals) {
    alert("won");
    wins++;
    $("#wins").text(wins);
    startGame();
  }
};

// this is the function that fires off when a crystal is clicked. This is what adds the individual crystal's value to the current user score (which starts at 0).
//
var addCrystals = function(clickCrystal) {
  currentCrystals += clickCrystal.value;
  $("#playerCrystals").text(currentCrystals);
  checkToWin();
  // console.log(currentCrystals);
};

//Main Process

startGame();

$("#crystalOne").click(function() {
  addCrystals(crystals.crystalOne);
});
$("#crystalTwo").click(function() {
  addCrystals(crystals.crystalTwo);
});
$("#crystalThree").click(function() {
  addCrystals(crystals.crystalThree);
});
$("#crystalFour").click(function() {
  addCrystals(crystals.crystalFour);
});
