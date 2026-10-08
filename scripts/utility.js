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


function getTextElementValueById(elementId){
    let element = document.getElementById(elementId);
    let elementValueText = element.innerText;
    let value = parseInt(elementValueText);
    return value;
}

function setElementValueById(elementId,value){
    let element = document.getElementById(elementId);
    element.innerText = value;
}
