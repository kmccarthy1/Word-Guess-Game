
//Lists all composer names that will be used
var ComposerBank = ["Bach" , "Beethoven" , "Mozart" , "Brahms" , "Wagner" , "Debussy"
 , "Tchaikobsky" , "Chopin" , "Vivaldi" , "Haydn"];

//sets up variables for all audio files

/*
var IntroMusic = ;
var normalplay = ;
var BachMusic = ;
var BeethovenMusic = ;
var MozartMusic = ;
var BrahmsMusic = ;
var WagnerMusic = ;
var DebussyMusic = ;
var TchaikobskyMusic = ;
var ChopinMusic = ;
var VivaldiMusic = ;
var HaydnMusic = ;
*/

//counter variables to keep track of wins, losses
var wins = 0;
var losses = 0;

//variables to keep track of guessed letters and # of guess lives
var wrongGuess = [];
var guessesRemaining = 10;

var lettersInWord = [];
var blanks = 0;
var randomWord = "";
var WordGuessArray = [];





function Gameplay() {

    //selecting a random word from the bank/array
    randomWord = ComposerBank[Math.floor(Math.random() * ComposerBank.length)];

    lettersInWord = randomWord.split ("");
    blanks = lettersInWord.length;

    for (var x = 0; x < blanks; x++) {
        WordGuessArray.push("_");

    }



    var displayWord = WordGuessArray.join(" ");

    document.onkeyup = fucntion(event);{
        var UserInput = event.key;
        UserInput = UserInput.toLowerCase();
        
    }

    console.log (randomWord);
    console.log (lettersInWord);
    console.log (blanks);
    console.log (WordGuessArray);


}

console.log (randomWord);
console.log (lettersInWord);
console.log (blanks);
console.log (WordGuessArray);













