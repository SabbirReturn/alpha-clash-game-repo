function continueGame(){
    let alphabet = getRandomAlphabet();

    let currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet;
    setAlphabetColor(alphabet);
}

document.addEventListener('keyup', handleKeyBoardEvent)

function handleKeyBoardEvent(event){
    let playerPress = event.key;
    let playerPressUpper = playerPress.toUpperCase()
    let expectedPress = document.getElementById('current-alphabet').innerText
    if(playerPressUpper === expectedPress){
        removeAlphabetColor(playerPress);
        scoreUpdate('score')
        continueGame()
    }
    else{
        lifeUpdate('life')
    }

}

function playNow(){
    hideElementById('home-screen')
    showElementById('playGround')
    continueGame();
}