
//Lists all composer names that will be used
var ComposerBank = ["Bach" , "Beethoven" , "Mozart" , "Brahms" , "Wagner" , "Debussy"
 , "Tchaikovsky" , "Chopin" , "Vivaldi" , "Haydn"];

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
    var randomWord = ComposerBank[Math.floor(Math.random() * ComposerBank.length)];

   var lettersInWord = randomWord.split("");
   var blanks = lettersInWord.length;

    for (var x = 0; x < blanks; x++) {
        WordGuessArray.push("_");

    }



    var displayWord = WordGuessArray.join(" ");

    document.onkeyup = fucntion(event);{
        var UserInput = event.key;
        UserInput = UserInput.toLowerCase();
        
    }
    document.getElementById("currentword").innerHTML = " " + WordGuessArray.join(" ");

    console.log (randomWord);
    console.log (lettersInWord);
    console.log (blanks);
    console.log (WordGuessArray);


}

function reset() {



}

var ba = document.getElementById("Bach");
var beet = document.getElementById("Beethoven");
var mo = document.getElementById("Mozart");
var bra = document.getElementById("Brahms");
var wag = document.getElementById("Wagner");
var de = document.getElementById("Debussy");
var tch = document.getElementById("Tchaikovsky");
var cho = document.getElementById("Chopin");
var viv = document.getElementById("Vivaldi");
var ha = document.getElementById("Haydn");






function audio() {


}












