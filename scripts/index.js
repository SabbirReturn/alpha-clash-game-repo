function continueGame(){
    let alphabet = getRandomAlphabet();

    let currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet;
    setAlphabetColor(alphabet)
}


function playNow(){
    hideElementById('home-screen')
    showElementById('playGround')
    // continueGame();
    continueGame();
}