// 블랙잭 게임
/**
 * 1. 랜덤으로 카드를 뽑는다.
 * 2. 카드를 뽑은 후에는 뽑은 카드를 배열에 저장한다.
 * 3. 카드의 합이 21을 넘으면 게임을 종료한다.
 * 4. 카드의 합이 21이 되면 게임을 종료한다.
 * 5. 컴퓨터는 17이하일때 계속 카드를 뽑는다.
 *
 *
 * 11이 중복되어 나오면 1로 바꿔준다음 게임을 진행
 */
cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

console.log("drawCard");

function drawCard() {
  cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  return cards[Math.floor(Math.random() * cards.length)];
}

function playGame() {
  userCard = [];
  computerCard = [];
  isGameOver = false;
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 2; i++) {
    userCard.push(drawCard());
    computerCard.push(drawCard());
  }

  while (!isGameOver) {
    userScore = calculateScore(userCard);
    computerScore = calculateScore(computerCard);

    alert(`당신의 카드는 ${userCard}입니다. 현재 점수는 ${userScore}입니다.`);
    alert(`컴퓨터의 카드는 ${computerCard[0]}입니다.`);

    function calculateScore(cards) {
      if (cards[0] === 11 && cards[1] === 10) {
        return 0;
      }

      if (cards[0] + cards[1] > 21) {
        if (cards.includes(11)) {
          cards[cards.indexOf(11)] = 1;
        }
      }

      let score = 0;
      for (let i = 0; i < cards.length; i++) {
        score += cards[i];
      }
      return score;
    }

    if (userScore == 0 || computerScore == 0 || userScore > 21) {
      isGameOver = true;
    } else {
      let userDeal = prompt("카드를 더 받으시겠습니까? y or n");
      if (userDeal === "y") {
        userCard.push(drawCard());
        userScore = calculateScore(userCard);
        alert(
          `당신의 카드는 ${userCard}입니다. 현재 점수는 ${userScore}입니다.`
        );
      } else {
        isGameOver = true;
      }
    }
  }

  while (computerScore <= 17 && computerScore !== 0) {
    computerCard.push(drawCard());
    computerScore = calculateScore(computerCard);
  }

  alert(
    `당신의 최종 카드는 ${userCard}입니다. 컴퓨터의 최종 카드는 ${computerCard}입니다.`
  );
  alert(
    `당신의 최종 점수는 ${userScore}입니다. 컴퓨터의 최종 점수는 ${computerScore}입니다.`
  );
  alert(compare(userScore, computerScore));
}

function compare(userScore, computerScore) {
  if (userScore == computerScore) {
    return "비겼습니다.";
  } else if (computerScore == 0) {
    return "졌습니다. 딜러가 블랙잭입니다.";
  } else if (userScore == 0) {
    return "이겼습니다. 블랙잭입니다.";
  } else if (userScore > 21) {
    return "졌습니다. 21을 넘었습니다.";
  } else if (computerScore > 21) {
    return "이겼습니다. 딜러가 21을 넘었습니다.";
  } else if (userScore > computerScore) {
    return "이겼습니다.";
  } else {
    return "졌습니다.";
  }
}

while (true) {
  playGame();
  let playAgain = prompt("게임을 다시 시작하시겠습니까? y or n");
  if (playAgain === "n") {
    break;
  }
}
