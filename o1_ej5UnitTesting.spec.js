/*Crea una función que dada dos entradas devuelven quien gana, en caso de empate indica empate.

Ejemplo:
"tijera", "paper" --> "jugador 1 gana!"
"tijera", "piedra" --> "jugador 2 gana!"
"papel", "papel" --> "empate!"*/

function rockPaperScissors(player1, player2) {
  switch (player1) {
    case "rock":
      if (player2 === "rock") {
        return "empate!";
      } else if (player2 === "paper") {
        return "jugador 1 gana!";
      } else {
        return "jugador 1 gana!";
      }
      break;
    case "paper":
      if (player2 === "rock") {
        return "jugador 2 gana!";
      } else if (player2 === "paper") {
        return "empate!";
      } else {
        return "jugador 2 gana!";
      }
      break;
    case "scissors":
      if (player2 === "rock") {
        return "jugador 2 gana!";
      } else if (player2 === "paper") {
        return "jugador 1 gana!";
      } else {
        return "empate!";
      }
      break;
    default:
      return "Algunos o ambos de los valores no fueron validos!";
      break;
  }
}

describe("We test diferents elections of the player to see the result", () => {
  test("player 1 = rock and player 2 = paper", () => {
    expect(rockPaperScissors("rock", "paper")).toBe("jugador 1 gana!");
  });

  test("player 1 = scissors and player 2 = rock", () => {
    expect(rockPaperScissors("scissors", "rock")).toBe("jugador 2 gana!");
  });

  test("player 1 = paper and player 2 = paper", () => {
    expect(rockPaperScissors("paper", "paper")).toBe("empate!");
  });

  test("player 1 = paper and player 2 = scissors", () => {
    expect(rockPaperScissors("paper", "scissors")).toBe("jugador 2 gana!");
  });

  test("player 1 = rock and player 2 = scissors", () => {
    expect(rockPaperScissors("rock", "scissors")).toBe("jugador 1 gana!");
  });
});
