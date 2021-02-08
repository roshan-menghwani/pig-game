// // console.log(`hello`);

// // GRABBING ALL THE BUTTONS
// let btnNewGame = document.querySelector(".btn--new");
// let btnRollDice = document.querySelector(".btn--roll");
// let btnHoldScore = document.querySelector(".btn--hold");
// // const dice = document.querySelector(".dice");
// let scoreElement0 = document.querySelector("#score--0");
// let scoreElement1 = document.querySelector("#score--1");
// let diceElement = document.querySelector(".dice");
// let playerElement0 = document.querySelector(".player--0");
// let playerElement1 = document.querySelector(".player--1");
// let currentScore = 0;
// let activePlayer = 0;
// const scores = [0, 0];
// resetGame();
// // GRABBING ALL OTHER ELEMENTS OF DOM.....

// // let currentScore = document.querySelector(".");

// // FUNCTIONS..........

// // RESET GAME FUNCTION
// function resetGame() {
// 	scoreElement0.textContent = 0;
// 	scoreElement1.textContent = 0;
// 	// currentElement0.textContent = 0;
// 	// currentElement1.textContent = 0;
// 	diceElement.classList.add("hidden");
// }

// const rollDice = function () {
// 	// GENERATING DICE
// 	let dice = Math.trunc(Math.random() * 6) + 1;
// 	console.log(dice);
// 	diceElement.src = `dice images/dice-${dice}.png`;

// 	// DISPLAYING THE DICE.............
// 	diceElement.classList.remove("hidden");

// 	// Check IF THE SCORE IS NOT 1

// 	if (dice !== 1) {
// 		currentScore += dice;
// 		document.getElementById(
// 			`current--${activePlayer}`,
// 		).textContent = currentScore;
// 	} else {
// 		// SWITCH THE PLAYER.........

// 		switchPlayer();
// 	}
// };

// const switchPlayer = function () {
// 	document.getElementById(`current--${activePlayer}`).textContent = 0;
// 	activePlayer = activePlayer ? 0 : 1;
// 	playerElement0.classList.toggle("player--active");
// 	playerElement1.classList.toggle("player--active");
// 	// MAKING CURRENT SCORE AGAIN ZERO........
// 	currentScore = 0;
// };

// // HOLDING A SCORE AND SWITCHING A PLAYER...

// const holdScore = function () {
// 	// UPDATING TOTAL SCORE..

// 	scores[activePlayer] += currentScore;

// 	document.getElementById(`score--${activePlayer}`).textContent =
// 		scores[activePlayer];
// 	console.log(scores[activePlayer]);
// 	// CHECK IF SCORE IS ABOVE OR EQUAL 100 DECLARE WINNER

// 	// ELSE SWITCH PLAYER
// 	// switchPlayer();
// };

// btnNewGame.addEventListener("click", resetGame);

// btnRollDice = addEventListener("click", rollDice);

// btnHoldScore = addEventListener("click", holdScore);

const playerElement1 = document.querySelector(".player--0");
const playerElement2 = document.querySelector(".player--1");
const scoreElement1 = document.querySelector("#score--0");
const scoreElement2 = document.querySelector("#score--1");
const currentScoreEl1 = document.querySelector("#current--0");
const currentScoreEl2 = document.querySelector("#current--1");
const btnRoll = document.querySelector(".btn--roll");
const btnReset = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const diceElement = document.querySelector(".dice");

let scores, activePlayer, currentScore, playing;

const resetGame = function () {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;
	currentScoreEl1.textContent = 0;
	currentScoreEl2.textContent = 0;
	scoreElement1.textContent = 0;
	scoreElement2.textContent = 0;
	diceElement.classList.add("hidden");
	playerElement1.classList.remove("player--winner");
	playerElement2.classList.remove("player--winner");
	playerElement1.classList.add("player--active");
	playerElement2.classList.remove("player--active");
};

resetGame();

const switchPlayer = function () {
	document.querySelector(`#current--${activePlayer}`).textContent = 0;
	activePlayer = activePlayer ? 0 : 1;
	playerElement1.classList.toggle("player--active");
	playerElement2.classList.toggle("player--active");
	currentScore = 0;
};

btnRoll.addEventListener("click", function () {
	// INITIALING DICE
	if (playing) {
		let dice = Math.trunc(Math.random() * 6) + 1;

		console.log(dice);
		diceElement.classList.remove("hidden");
		diceElement.src = `dice images/dice-${dice}.png`;

		// IF DICE IS NOT 1 PLAY THE GAME FOR CURRENT PLAYER

		if (dice !== 1) {
			currentScore += dice;
			document.querySelector(
				`#current--${activePlayer}`,
			).textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
});
btnHold.addEventListener("click", function () {
	if (playing) {
		// add current score to total score
		scores[activePlayer] += currentScore;
		console.log(scores[activePlayer]);
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];

		// SWITCH PLAYER
		// switchPlayer();

		// PLAYER WINS IF THE SCORE IS 100 OR MORE........

		if (scores[activePlayer] >= 20) {
			playing = false;
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove("player--active");
			diceElement.classList.add("hidden");
			// btnHold.disabled = true;
			// btnRoll.disabled = true;
		} else {
			switchPlayer();
		}
	}
});

btnReset.addEventListener("click", resetGame);
