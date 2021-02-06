'use strict';

//Bring HTML elements
const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('.js-button');
const cluesElement = document.querySelector('.js-clues');
const messageElement = document.querySelector('.js-message');
const counterElement = document.querySelector('.js-counter');
const resetButtonElement = document.querySelector('.js-buttonR');
 

//Get random number
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

//Event click
function handleButton(ev) {
    ev.preventDefault();
    updateFeedback();
    updateCounter();

}

//Paint feedback message
function updateFeedback() {
    const inputValue = parseInt(inputElement.value);
    let messageFeedback = "";
    if (isNaN(inputValue)) {
        messageFeedback = "prueba mejor con un número entre 1 y 100."
    } else if (inputValue > 100 || inputValue < 1) {
        messageFeedback = "el número debe estar entre 1 y 100."
    } else if (inputValue < randomNumber) {
        messageFeedback = "demasiado bajo."
    } else if (inputValue > randomNumber) {
        messageFeedback = "demasiado alto."
    } else {
        messageFeedback = "Has ganado campeona!!!";
        resetButtonElement.value = "¡ENHORABUENA!";
        resetButtonElement.style.backgroundColor = 'aquamarine';
        resetButtonElement.disabled = true;
        messageElement.style.borderColor = 'aquamarine';
        messageElement.innerHTML = "Refresca la página para jugar de nuevo"
        counterElement.classList.add('dissapear');
    }
    cluesElement.innerHTML = (`Pista: ${messageFeedback}`);
    console.log(resetButtonElement.disabled)
}

//Paint number of counter
const updateCounter = () => {
    let counterNumber = parseInt(counterElement.innerHTML);
    counterNumber++;
    counterElement.innerHTML = counterNumber;

}

buttonElement.addEventListener('click', handleButton);

function handleReset() {
    cluesElement.innerHTML = "Pista: escribe el número y PRUEBA"
}



resetButtonElement.addEventListener('click', handleReset);