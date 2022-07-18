const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Error');
    }
  };
  
  function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    switch (num){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'tied';
    }
    if (userChoice === 'rock'){
      if(computerChoice === 'scissors'){
          return 'won';
        }else{
          return 'lost';
        }
    }else{
      if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
          return 'won';
        }else{
          return 'lost';
        }
      }else{
        if(computerChoice === 'paper'){
          return 'won';
        }else{
          return 'lost';
        }
      }
    }
  }
  
  function playGame(){
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    var result;
    console.log('Jugador sacó: ' + userChoice);
    console.log(`El ordenador sacó: ${computerChoice}`);
    if (userChoice ==='bomb'){
      result = 'won';
    }else{
       result = determineWinner(userChoice, computerChoice);
    }
    console.log(`The player ${result}`);
  }
  playGame();