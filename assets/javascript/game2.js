
//Lists all composer names that will be used
var ComposerBank = ["Bach" , "Beethoven" , "Mozart" , "Brahms" , "Wagner" , "Debussy"
 , "Tchaikovsky" , "Chopin" , "Vivaldi" , "Haydn"];
 var arrLength = ComposerBank.length;

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
var WinCounter = 0;
var LossCounter = 0;

//variables to keep track of guessed letters and # of guess lives
var wrongGuess = [];
var guessesRemaining = 10;

var lettersInWord = [];
var blanks = 0;
var randomWord = "";
var WordGuessArray = [];


var selectedWord = ComposerBank[Math.floor(Math.random() * arrLength)];
var splitWord = selectedWord.split("");
var selectedWordLength = selectedWord.length;
console.log(selectedWord)

var placeHolder = "";


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












