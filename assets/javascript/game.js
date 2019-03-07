// Individually a bunch of us worked on our projects and we all have our own HTML and CSS. Together me, Stephen, Jaime, Peter and Sarah all met up and tried to work on the JS.
// Jaime met with his tutor and helped organize this data structure which I thought was really clever. Making all of the crystals in 1 object made it easy to access them for the randomizing tools to use later.
// I thought about procedurally generating each crystal with a function but this just ended up being so clean and easy to use.

// my function that says not to run any JS until the DOM is ready.
$(document).ready(function() {
  // this is where I made a variable that contains an array of objects.
  // I gave each crystal a value of 0 to start and one of the functions I built later will assign them a random value between 1 and 12.
  var crystals = {
    crystalOne: {
      value: 0
    },
    crystalTwo: {
      value: 0
    },
    crystalThree: {
      value: 0
    },
    crystalFour: {
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
  var startGame = function() {
    currentCrystals = 0;
    targetCrystals = randomNum(19, 120);
    crystals.crystalOne.value = randomNum(1, 12);
    crystals.crystalTwo.value = randomNum(1, 12);
    crystals.crystalThree.value = randomNum(1, 12);
    crystals.crystalFour.value = randomNum(1, 12);

    $("#playerCrystals").text(currentCrystals);
    $("#targetCrystals").text(targetCrystals);
  };

  // this is how I tell the computer to determine if they player wins or not and calls my modal for either instance.
  // I thought about just nesting all this inside of the addCrystals function (which is right below it) instead of calling it every time but wasn't sure if it would get wonky with having so much inside 1 function.
  // the reason I thought it may be a good idea to nest it is because I am calling this every time so it's not like I'm saving memory having it separate.
  var winCondition = function() {
    if (currentCrystals > targetCrystals) {
      loseModal.style.display = "block";
      loseModalImg.src = loserNap.src;
      loseCaptionText.innerHTML = loserNap.alt;
      losses++;
      $("#losses").text(losses);
      startGame();
    } else if (currentCrystals === targetCrystals) {
      winModal.style.display = "block";
      winModalImg.src = winningRico.src;
      winCaptionText.innerHTML = winningRico.alt;
      wins++;
      $("#wins").text(wins);
      startGame();
    }
  };

  // this is the function that fires off when a crystal is clicked. This is what adds the individual crystal's value to the current user score (which starts at 0).
  //this also calls my winCondition function to see if the player has won or lost.
  var addCrystals = function(clickCrystal) {
    currentCrystals += clickCrystal.value;
    $("#playerCrystals").text(currentCrystals);
    winCondition();
    // console.log(currentCrystals);
  };

  // this is how i start the game by calling my function here.
  startGame();
  // these are all my onClick functions for my crystals.
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

  //This is all my modal script. This was pretty hard to get because all the examples I found just had them as a smaller picture you would click to enlarge, not an automatic pop up.
  // I was able to call up my modals by putting the commands to call each one in the if else win condition.
  // Win Modal
  var winModal = document.getElementById("winModal");

  // Again, i found this example on w3 schools and had to adapt it to what I needed.
  var winImg = document.getElementById("winningRico");
  var winModalImg = document.getElementById("rico1");
  var winCaptionText = document.getElementById("caption");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // I never "delete" the modal from the page, I just hide it with display = 'none' instead.
  span.onclick = function() {
    winModal.style.display = "none";
  };

  // Lose Modal, same as above, just with different names.
  var loseModal = document.getElementById("loseModal");

  // I did think it was cool how I could all the alt text on my photos to be what shows up in the modals under my pop ups.
  var loseImg = document.getElementById("loserNap");
  var loseModalImg = document.getElementById("nap01");
  var loseCaptionText = document.getElementById("loseCaption");

  var span2 = document.getElementsByClassName("loseClose")[0];

  span2.onclick = function() {
    loseModal.style.display = "none";
  };
});
