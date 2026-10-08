function hideElementById(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
let element = document.getElementById(elementId);
element.classList.remove('hidden')
}

function getRandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    let alphabets = alphabetString.split('');

    let randomNumber = Math.random()*25
    let index = Math.round(randomNumber);
    let alphabet = alphabets[index];
    return alphabet;
}

function setAlphabetColor(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('bg-red-400')
}

function removeAlphabetColor(elementId){
    let element = document.getElementById(elementId)
    element.classList.remove('bg-red-400')
}

function scoreUpdate(elementId){
    let scoreContainer = document.getElementById(elementId);
    let currentScore = parseInt(scoreContainer.innerText);
    let newScore = currentScore + 1;
    scoreContainer.innerText = newScore;

}

function lifeUpdate(elementId){
    let lifeContainer = document.getElementById(elementId);
    
    let currentLife = parseInt(lifeContainer.innerText);

    let newLife = currentLife - 1;
    lifeContainer.innerText = newLife;
}