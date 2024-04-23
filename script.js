const scissorsButton = document.getElementById("scissors")
scissorsButton.addEventListener("click", () => selectHand("scissors"));

const paperButton = document.getElementById("paper")
paperButton.addEventListener("click", () => selectHand("paper"));

const rockButton = document.getElementById("rock")
rockButton.addEventListener("click", () => selectHand("rock"));

const spockButton = document.getElementById("spock")
spockButton.addEventListener("click", () => selectHand("spock"));

const lizardButton = document.getElementById("lizard")
lizardButton.addEventListener("click", () => selectHand("lizard"));

const options = ["paper", "scissors", "rock", "lizard", "spock"]

function selectHand(hand) {
    const userHand = hand;
    const machineHand = getRandomHand()

   const message = selectWinner(userHand, machineHand)

   document.querySelector("#winner-message").innerText = message[0];
   document.querySelector(".winner").classList.add(message[1])
   document.querySelector(".loser").classList.add(message[2])
   document.getElementById("winner-img").src=`/images/icon-${message[1]}.svg`;
   document.getElementById("loser-img").src=`/images/icon-${message[2]}.svg`;


    document.querySelector(".game-container").setAttribute('style', "display :"+ "none");
    document.querySelector(".results-container").setAttribute('style', "display :"+ "flex");
}

function getRandomHand(){
    return options[Math.floor(Math.random() * options.length)]
}

const winner = { "scissors": ["lizard", "paper"], 
    "rock": ["lizard", "scissors"], 
    "paper": ["rock", "spock"], 
    "spock": ["scissors", "rock"], 
    "lizard": ["spock", "paper"], 
}


function selectWinner(userHand, machineHand) {
     if (userHand === machineHand){
        return ["EMPATE", userHand, machineHand]
     }
     const result = winner[userHand].some( x => machineHand === x );
     if (result){
        return ["HA GANADO", userHand, machineHand]
     }
    
     return ["HA PERDIDO", machineHand, userHand]
}

const replayButton = document.getElementById("replay")
replayButton.addEventListener("click", resetGame);

function resetGame(){
    document.querySelector(".game-container").setAttribute('style', "display :"+ "flex");
    document.querySelector(".results-container").setAttribute('style', "display :"+ "none");
}