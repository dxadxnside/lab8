document.addEventListener("DOMContentLoaded", function () {
    let playerBet = document.getElementById("player1Bet");
    let turnButton = document.getElementById("player1Turn");
    let playerScore = document.getElementById("player1Score");
    let botBet = document.getElementById("player2Bet");
    let botScore = document.getElementById("player2Score");
    let player = 0;
    let bot = 0;
    turnButton.addEventListener("click", function () {
        playerBet.value = Math.floor(Math.random() * 10) + 1;
        botBet.value = Math.floor(Math.random() * 10) + 1;
        if (playerBet.value > botBet.value) {
            player++;
            playerScore.value = player;
        }
        else if (botBet.value > playerBet.value) {
            bot++;
            botScore.value = bot;
        }
        if (player == 3) {
            alert("Ви перемогли!");
            resetGame();
        }
        else if (bot == 3) {
            alert("Переміг Олег");
            resetGame();
        }
    });
    function resetGame() {
        player = 0;
        bot = 0;
        playerScore.value = "0";
        botScore.value = "0";
        playerBet.value = "";
        botBet.value = "";
    }
    resetGame();
});
