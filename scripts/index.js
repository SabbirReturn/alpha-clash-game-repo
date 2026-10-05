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
        let score = document.getElementById('score')
        score.innerText = 
        continueGame()
    }
    else{
        console.log('Mara khaw')
    }

}

function playNow(){
    hideElementById('home-screen')
    showElementById('playGround')
    continueGame();
}