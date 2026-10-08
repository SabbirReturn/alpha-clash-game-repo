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
        let currentScore = getTextElementValueById('score');
        let newScore = currentScore + 1;
        setElementValueById('score',newScore);
        continueGame()
    }
    else{
        let currentLife = getTextElementValueById('life');
        let updateLife = currentLife - 1;
        setElementValueById('life', updateLife)
    }

}

function playNow(){
    hideElementById('home-screen')
    showElementById('playGround')
    continueGame();
}