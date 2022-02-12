let generatedNumber = Math.floor(Math.random() * 100) + 1;
console.log(generatedNumber);

var guessNumbers = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');
var printValue = document.querySelector(".guesses");
let guessCount = 1;
let newButton;
var alertBox = document.querySelector('.alert');
var restartBtn = document.querySelector('.restartBtn');
var rightAnswer = document.querySelector('.lastResult')


// To Get Input Value on Click and Reset the Field
function getGuess() {
    var inputNumber = Number(guessNumbers.value);
    printValue.textContent += ' ' + inputNumber;
    // alertBox.classList.remove('hide')

    if (inputNumber === generatedNumber) {
        alertBox.classList.remove('alert-warning');
        alertBox.classList.add('alert-success');
        alertBox.textContent = 'Congratulations You Got it Right!';
        gameOver();
    }
    else if (guessCount == 5) {
        alertBox.classList.add('alert-danger');
        alertBox.textContent = 'Game Over';
        gameOver();
        // Print right answer
        rightAnswer.textContent += ' ' + generatedNumber;
    }
    else {
        alertBox.classList.add('alert-warning');
        alertBox.textContent = 'Your Number is Incorrect!';
    }
    guessNumbers.focus();
    guessCount++;
    guessNumbers.value = "";
}

// Event listener for submit button
guessSubmit.addEventListener('click', getGuess);

function gameOver () {
    guessSubmit.classList.add('hide');
    guessNumbers.disabled = true;

    // Create a new button element for restart the game
    newButton = document.createElement("button");
    newButton.className ="btn btn-info btn-md";
    newButton.textContent = "Restart Your Game";
    restartBtn.appendChild(newButton); 
    newButton.addEventListener('click', restartGame);
}

function restartGame() {
    // guessCount = 1;
    // generatedNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(generatedNumber);
    // guessNumbers.disabled = false;
    // guessSubmit.classList.remove('hide');
    // newButton.classList.add('hide');
    // // alertBox.classList.add('hide')
    // printValue.textContent = '';
    window.location.reload()
}

// Fade Out After 5seconds
// $(".alert").fadeTo(5000, 500).slideUp(500, function () {
//     $(".alert").slideUp(500);
// });


