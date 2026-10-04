function continueGame(){
    let alphabet = getRandomAlphabet();

    let currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet;
    setAlphabetColor(alphabet);
}

document.addEventListener('keyup', handleKeyBoardEvent)

function handleKeyBoardEvent(event){
    let playerPress = event.key.toUpperCase();
    let expectedPress = document.getElementById('current-alphabet').innerText
    if(playerPress === expectedPress){
        console.log('you are win')
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