// Create variable for all possible computer decisions.
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0; // Create variable to count wins. Starts at 0
var losses = 0; // Create variable to count losses. Starts at 0
var guessesleft = 9; // Create variable for guesses left. Starts at 9
var guessesarray = []; // Create array that holds the user guesses. Starts Empty

// Variables to access the <p>s in the .html
var winstext = document.getElementById("wins-text");
var lossestext = document.getElementById("losses-text");
var guesseslefttext = document.getElementById("guessesleft-text");
var userchoicetext = document.getElementById("userchoice-text");

// Functions
// Function to reset the guesses counter and array. Also set a new winning letter
function resetGuesses() {
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesleft = 9;
    guessesarray = []
}

// Variable that creates the computer established selection. This needs to change every 9 failed guesses or every time the user wins.
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Everytime a key is pressed, reduce the amount of guesses left and add the key to the list of tried guesses.
    var userInput = event.key.toLowerCase();
    guessesleft--;
    guessesarray.push(userInput);

    // If user gets the right answer, add one to the number of wins and run the reset function.
    if (userInput === computerChoice) {
        wins++;
        resetGuesses();
    }
    // If user runs out of guesses, add one to the number of losses and run the reset function.
    if (guessesleft === 0){
        losses++;
        resetGuesses();
    }

    //Text for the variables on html
    winstext.textContent = "wins: " + wins;
    lossestext.textContent = "losses: " + losses;
    guesseslefttext.textContent = "Guesses Left: " + guessesleft;
    userchoicetext.textContent = "Your Guesses so far: " + guessesarray;
}

