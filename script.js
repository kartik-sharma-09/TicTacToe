console.log("Welcome To Tic Tac Toe");

let music = new Audio("tic tac toemusic.mp3");
let audioturn = new Audio("tic tac toegameover.mp3");
let gameover = new Audio("tic tac toe\ting.mp3");

let turn = "X";
let gameoverr = false;

// Function to change  the turn

let changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check for a win

let checkwin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 5, 15],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -15, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      gameoverr = true;
      document
        .querySelector(".imagebox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`;
    }
  });
};
// game logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  //   console.log("element",element)
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioturn.play();
      checkwin();
      if (!gameoverr) {
        document.getElementsByClassName("info")[0].innerText =
          "turn for " + turn;
      }
    }
  });
});

// add onclick  listener to reset button

Reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameoverr = false;
  document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
  document.querySelector(".line").style.width = "0vw";
  document
    .querySelector(".imagebox")
    .getElementsByTagName("img")[0].style.width = "0px";
});
