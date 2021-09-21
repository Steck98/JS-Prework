let scorePlayer=0;
let scoreAI=0;
let result=document.querySelector('.result');
let wynik = document.getElementById('wynik');
let buttons=document.querySelectorAll(".btn");
let playerMove;
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
      
    
      let computerMove, randomNumber;
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








function displayResult(playerMove, computerMove){
  result.classList.remove('draw','lose','win')
    if ( playerMove == computerMove){
        result.innerText="Remis";
        result.classList.add('draw');
    }
    else if( (playerMove == 'Kamień' && computerMove == 'Papier') || (playerMove == 'Papier' && computerMove == 'Nożyce') || (playerMove == 'Nożyce' && computerMove == 'Kamień')){
      result.innerText="Przegrałeś";
      wynik.innerText = `Wynik Komputera: ${++scoreAI}
      Twoj Wynik: ${scorePlayer}`;
        result.classList.add('lose');}
    else if( (playerMove == 'Kamień' && computerMove == 'Nożyce') || (playerMove == 'Papier' && computerMove == 'Kamień') || (playerMove == 'Nożyce' && computerMove == 'Papier')){
      result.innerText="Wygrałeś";
      result.classList.add('win');
      wynik.innerText = `Wynik Komputera: ${scoreAI}
      Twoj Wynik: ${++scorePlayer}`;}
    else{ (playerMove == 'Reset')
    result.innerText='';
    wynik.innerText = `Wynik Komputera: ${scoreAI=0}
    Twoj Wynik: ${scorePlayer=0}`;
    clearAll();
    }
}


