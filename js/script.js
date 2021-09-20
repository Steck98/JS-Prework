var buttons=document.querySelectorAll(".btn");
var playerMove;
buttons.forEach((button) => {
  button.addEventListener("click", ()=> {
    clearMessages();
    if (button.innerText == "Kamień") {
      playerMove = "Kamień";}
    if (button.innerText == "Papier") {
      playerMove = "Papier";}
    if (button.innerText == "Nożyce") {
      playerMove = "Nożyce";}
      printMessage(`Mój ruch: ${playerMove}`);
    
      var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'Kamień';
} else if (randomNumber== '2'){
  computerMove = 'Papier';
} else {
    computerMove = 'Nożyce'
}
printMessage('Ruch Komputera: ' + computerMove);
displayResult(playerMove, computerMove);
    }
  )
});



// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('Wpisana odpowiedź to: ' + playerInput);
// if (playerInput == '1') {
//   playerMove = 'kamień';
// } else if (playerInput == '2') {
//   playerMove = 'papier';
// } else {
//   playerMove = 'nożyce';
// }


function displayResult(playerMove, computerMove){
    if ( playerMove == computerMove){
        printMessage("Remis");
    }
    else if( (playerMove == 'Kamień' && computerMove == 'Papier') || (playerMove == 'Papier' && computerMove == 'Nożyce') || (playerMove == 'Nożyce' && computerMove == 'Kamień')){
        printMessage("przegrałeś")}
    else printMessage("Wygrałeś");
    
}


