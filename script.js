let userScore = 0;
let compScore = 0;
let roundCount = 0; //round counter

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

let rstBtn = document.querySelector("#rst-btn");

const genCompChoice = () => {
  //rock, paper, scissor
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//tie
const tieGame = () => {
  msg.innerText = "Oh No! It's a Tie. Play Again";
  msg.style.backgroundColor = "#0b0d75ff";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#14750bff";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#8f0a0aff";
  }
};

const playGame = (userChoice) => {
  //comp choice
  const compChoice = genCompChoice();

  //tie a game
  if (userChoice === compChoice) {
    tieGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);

    // animation lagana
    choice.classList.add("animate-choice");
    setTimeout(() => {
      choice.classList.remove("animate-choice");
    }, 600);
  });
});

// Reset Button ka event
rstBtn.addEventListener("click", () => {
  // scores reset
  userScore = 0;
  compScore = 0;

  // scoreboard update
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;

  // message reset
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "#330c2f"; // default color

  // animation add/remove
  rstBtn.classList.add("animate-shake");
  setTimeout(() => {
    rstBtn.classList.remove("animate-shake");
  }, 400);
});

