'use strict';

/* Traigo los elementos del html que utilzaré y los convierto en constantes globales (cqs): js-input + js-button + js-clues + js-counter. */

const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('.js-button');
const cluesElement = document.querySelector('.js-clues');
const counterElement = document.querySelector('.js-counter');

const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100)
console.log(randomNumber);

function handleButtonElement(ev) {
    ev.preventDefault()
    updateFeedback();
    updateCounter();
}

function updateFeedback() {
    const inputValue = parseInt(inputElement.value);
    console.log(inputValue);
    if (inputValue === randomNumber) {
        cluesElement.innerHTML = "Has ganado campeona!!!";
    }
    else if (inputValue < randomNumber) {
        cluesElement.innerHTML = "Demasiado bajo."
    }
    else if (inputValue > randomNumber) {
        cluesElement.innerHTML = "Demasiado alto."
    }
    else if (inputValue > 100){
        cluesElement.innerHTML = "El número debe estar entre 1 y 100."
    }
    else if (inputValue < 100){
        cluesElement.innerHTML = "El número debe estar entre 1 y 100."
    }
    else if (inputValue) {
        cluesElement.innerHTML = "El número debe estar entre 1 y 100."
    }
    else {
        cluesElement.innerHTML = "El número debe estar entre 1 y 100."
    }
}

const updateCounter = () => {
    const counterMessage = document.querySelector('.js-counter');
    let value = parseInt(counterMessage.innerHTML);
    value++;   
    counterMessage.innerHTML = value;
}

buttonElement.addEventListener('click', handleButtonElement);


