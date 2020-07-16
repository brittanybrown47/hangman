//variables
const hangingPic0 = document.querySelector("#hanging-pic-0");
const hangingPic1 = document.querySelector("#hanging-pic-1");
const hangingPic2 = document.querySelector("#hanging-pic-2");
const hangingPic3 = document.querySelector("#hanging-pic-3");
const hangingPic4 = document.querySelector("#hanging-pic-4");
const hangingPic5 = document.querySelector("#hanging-pic-5");
const hangingPic6 = document.querySelector("#hanging-pic-6");
const hangingPic7 = document.querySelector("#hanging-pic-7");
const hangingPic8 = document.querySelector("#hanging-pic-8");
const hangingPic9 = document.querySelector("#hanging-pic-9");
const wordH3 = document.querySelector("#word-h3");
const button = document.querySelector("#submit-button");
const inputField = document.querySelector("#input-guess");
const errorH3 = document.querySelector("#error-h3");
const numOfGuessesH3 = document.querySelector("#num-of-guesses-h3");
const incorrectGuessesH3 = document.querySelector("#incorrect-guesses-h3");
const guessedLettersH3 = document.querySelector("#guessed-letters-h3");
const correctLettersH3 = document.querySelector("#correct-letters-h3");
const wordH2 = document.querySelector("#word-h2");


let words = [["h","t","m","l"], ["j","a","v","a","s","c","r","i","p","t"], ["p","r","o","g","r","a","m","m","i","n","g"], ["p","h","p"], ["w","o","r","d","p","r","e","s","s"],["j","a","v","a"], ["a","t","o","m"], ["r","u","b","y"]];
let randomNumber = Math.floor((Math.random() * words.length));
console.log(words.length);
let word = words[randomNumber];
console.log(word);
let guessedLetters = Array("");
let guesses = 0;
let wrongGuesses = 0;
let guess = "";
let wordDisplay2;

const hangingPicsArray = [hangingPic0, hangingPic1, hangingPic2, hangingPic3, hangingPic4, hangingPic5, hangingPic6, hangingPic7, hangingPic8, hangingPic9];

//function for addEventListener
function makeAGuess(){
  guess = inputField.value;
  guess = guess.toLowerCase();
  letters = /^[A-Za-z]+$/;
  console.log(letters);
  if(!guess.match(letters)){
    errorH3.style.display = "block";
    errorH3.innerHTML = "Only Enter Letters.";
  }else{
  }
  console.log(guess);
  wordDisplay2 = word.splice();
  //to see if guess is a part of the word
  if (word.includes(guess)){
      
    }else if (!word.includes(guess)){
      if(!guessedLetters.includes(guess)){
      hangingPicsArray[wrongGuesses].style.display = "none";
       wrongGuesses++;
      }
      incorrectGuessesH3.innerHTML = "Incorrect Guesses: " + wrongGuesses;
      let hangingPicDisplay = hangingPicsArray[wrongGuesses];
      hangingPicDisplay.style.display ="block";
      
    }
  //to check if the guess has been guessed before
  if (guessedLetters.includes(guess)){
    
  }else{
    guessedLetters.push(guess);
    guesses++;
    numOfGuessesH3.innerHTML = "Number of Guesses: " + guesses;
    guessedLettersH3.innerHTML = "Guessed Letters:" + guessedLetters;
  }
  //to check if the guess is more than 1
  if (guess.length > 1){
    errorH3.style.display = "block";
    errorH3.innerHTML = "Only input one character at a time";
  }else{
    errorH3.style.display = "none";
  }
  //display word with blanks and count the correct letters and display win
  let rightLetters = "";
  let correctLetters = 0;
  for(i=0; i < word.length; i++){
    if(guessedLetters.includes(word[i])){
      rightLetters = rightLetters + word[i];
      correctLettersH3.innerHTML = "Correct Letters: " + rightLetters;
      correctLetters++;
      if(correctLetters == word.length){
        var strWord = word.join("");
        wordH3.innerHTML = "You win! The word was " + strWord;
        wordH3.style.color = "green";
        button.disabled = true;
      }
    }
  }
 
  //display the word with hidden characters as _ underscores
  blankLetters = "";
  //get blank letters
  for(i=0; i < word.length; i++){
    if(!rightLetters.includes(word[i])){
      blankLetters += word[i];
    }
    
  }
  
  console.log(blankLetters);
  displayWord = word.join("");
  console.log(displayWord);
  for (i=0; i<blankLetters.length; i++){
    currentBlank = blankLetters[i].toString();
    //console.log(currentBlank);
    displayWord = displayWord.replace(new RegExp(currentBlank, "g"), "_");
    console.log(displayWord);
  }
  displayWord = displayWord.split("").join(" ");
  wordH2.innerHTML = displayWord;
  console.log(displayWord);
  
  
  
  if(wrongGuesses == 9){
    errorH3.style.display = "block";
    errorH3.innerHTML = "You Lost. :(";
    button.disabled = true;
  }
  
  
}
//addEventListener for guess button
button.addEventListener("click", makeAGuess);
