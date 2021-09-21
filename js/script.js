var scorePlayer=0;
var scoreAI=0;
var result=document.querySelector('.result');
var wynik = document.getElementById('wynik');
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
    if (button.innerText == "Reset")  {
      playerMove = "Reset";
      
    }  
      
    
      var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
if (randomNumber == '1') {
  computerMove = 'Kamień';
} else if (randomNumber== '2'){
  computerMove = 'Papier';
} else {randomNumber== '3'
    computerMove = 'Nożyce'
}
printMessage('Ruch Komputera: ' + computerMove);
displayResult(playerMove, computerMove);
if (playerMove == "Reset"){
  clearMessages()
}
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
  result.classList.remove('draw','lose','win')
    if ( playerMove == computerMove){
        result.innerText="Remis";
        result.classList.add('draw');
    }
    else if( (playerMove == 'Kamień' && computerMove == 'Papier') || (playerMove == 'Papier' && computerMove == 'Nożyce') || (playerMove == 'Nożyce' && computerMove == 'Kamień')){
      result.innerText="Przegrałeś";
      wynik.innerText = `Wynik Komputera: ${scoreAI++}
      Twoj Wynik: ${scorePlayer}`;
        result.classList.add('lose');}
    else if( (playerMove == 'Kamień' && computerMove == 'Nożyce') || (playerMove == 'Papier' && computerMove == 'Kamień') || (playerMove == 'Nożyce' && computerMove == 'Papier')){
      result.innerText="Wygrałeś";
      result.classList.add('win');
      wynik.innerText = `Wynik Komputera: ${scoreAI}
      Twoj Wynik: ${scorePlayer++}`;}
    else{ (playerMove == 'Reset')
    result.innerText='';
    wynik.innerText = `Wynik Komputera: ${scoreAI=0}
    Twoj Wynik: ${scorePlayer=0}`;
    clearAll();
    }
}


