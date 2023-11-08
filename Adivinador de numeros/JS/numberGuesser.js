
//Referencias a elementos HTML
const guessField       = document.querySelector('.guessField');
const submitButton     = document.querySelector('.submitButton');
const guesses          = document.querySelector('.guesses');
const lastResult       = document.querySelector('.lastResult');
const lowOrHi          = document.querySelector('.lowOrHi');
const outOfRangeNumber = document.querySelector('.outOfRangeNumber');
const resetButton      = document.getElementById('ResetButton');

let guessCount = 1;


//Generar un numero aleatorio entre 1 y 100
let randomNumber =  Math.floor(Math.random()* 100) + 1;

// Inciar juego y comprobar si la respuesta del jugador es correcta o no

function startGame(){
    let userGuess = parseInt(guessField.value); //valor ingresado por el jugador
      
    if(guessCount === 1){
        guesses.textContent = "Previous attemps: ";
    }    
    guesses.textContent+= userGuess + "  ";

     //Validar que el numero ingresado sea correcto
    if(userGuess < 1 || userGuess > 100 ){
        outOfRangeNumber.textContent = "Please enter a number from 1 to 100";
        lowOrHi.textContent = " ";
        gameOver();
    } else {
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "The number is too small";
    
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "The number is too big";

        }
    }

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations!"
        lastResult.style.color ="#00FF2E"
        lowOrHi.textContent = " ";
        gameOver();

    } 
    else if (guessCount === 10) {
        lastResult.textContent = "Game Over"
        lastResult.style.color ="#FF1900"
        lowOrHi.textContent = " ";
        gameOver();
    } 
    guessCount++;
}

submitButton.addEventListener('click', startGame);

//Resetear el juego para que el usuario pueda volver a jugar

function gameOver() {
    guessField.disabled       = true;
    submitButton.disabled     = true;
    resetButton.style.display = "inline";
    resetButton.addEventListener("click", resetGame);
}


function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll('.results div');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled =   false;
    submitButton.disabled = false;
    guessField.value = "";
    guessField.focus();


    //Generar un nuevo numero aleatorio
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

