// This file contains the JavaScript logic for the guessing game. It includes functions to handle user input, generate random numbers, check guesses, and update the game state.

let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = 'Guess a number between 1 and 100';
    document.getElementById('attempts').textContent = '0';
    document.getElementById('userGuess').value = '';
}

function checkGuess() {
    const userGuess = Number(document.getElementById('userGuess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('message').innerHTML = `
            <span class="congrats">LESSGOO CONGRATS!<br>You guessed the number in ${attempts} attempts.</span>
            <br><button id="restartBtn" class="restart-btn">Restart</button>
        `;
        document.getElementById('attempts').parentElement.style.display = 'none';
        document.getElementById('submitGuess').style.display = 'none'; // Hide submit button

        // Add event listener for restart button
        const restartBtn = document.getElementById('restartBtn');
        if (restartBtn) {
            restartBtn.addEventListener('click', function() {
                document.getElementById('attempts').parentElement.style.display = '';
                document.getElementById('submitGuess').style.display = ''; // Show submit button again
                startGame();
            });
        }
    } else if (userGuess < randomNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
        document.getElementById('attempts').parentElement.style.display = '';
    } else if (userGuess > randomNumber) {
        document.getElementById('message').textContent = 'Too high! Try again.';
        document.getElementById('attempts').parentElement.style.display = '';
    }

    document.getElementById('attempts').textContent = `${attempts}`;
}

window.onload = function() {
    startGame();

    const submitBtn = document.getElementById('submitGuess');
    const guessInput = document.getElementById('userGuess');

    if (submitBtn) {
        submitBtn.addEventListener('click', checkGuess);
    }

    if (guessInput) {
        guessInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                checkGuess();
            }
        });
    }
};