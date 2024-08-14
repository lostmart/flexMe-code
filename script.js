const cardsArray = document.querySelectorAll(".card")

// State management within an object
const gameState = {
	selectedHeroes: [],
	numberOfTurnedCards: 0,
	finishedCards: 0,
}

// Add event listeners to each card
cardsArray.forEach((card, indx) => {
	card.addEventListener("click", (e) => {
		handleCardClick(card, e, indx)
	})
})

// Handle card click
function handleCardClick(card, e, indx) {
	const isActivated = e.target.getAttribute("data-rotate") === "true"

	const selectedHero = combinedArray[indx].heroName
	gameState.selectedHeroes.push(selectedHero)
	gameState.numberOfTurnedCards++
	//console.log(selectedHero)

	// checks if already turned
	if (e.target.matches(".animate__rotate")) return
	// check number of turned cards
	// if (gameState.numberOfTurnedCards === 2) return

	if (!isActivated) {
		e.target.setAttribute("data-rotate", "true")
		card.classList.add("animate__rotate")
		setTimeout(() => {
			card.style.backgroundImage = `url("./assets/${combinedArray[indx].imageUrl}")`
		}, 130)
	}

	logDebug()
	if (gameState.selectedHeroes.length >= 2) {
		checkCorrect()
	}
}

function checkCorrect() {
	if (gameState.selectedHeroes[0] === gameState.selectedHeroes[1]) {
		console.log("good !!!")
		cardsArray.forEach((card) => {
			if (card.getAttribute("data-rotate") === "true") {
				card.classList.add("done")
			}
		})
		gameState.selectedHeroes = []
		gameState.numberOfTurnedCards = 0
	} else {
		console.log("wrong !!!")
		setTimeout(() => {
			cardsArray.forEach((card) => {
				console.log("running")

				if (card.matches(".done")) return
				if (card.getAttribute("data-rotate")) {
					card.setAttribute("data-rotate", "false")
					card.classList.remove("animate__rotate")
					gameState.selectedHeroes = []
					gameState.numberOfTurnedCards = 0
					setTimeout(() => {
						card.style.backgroundImage = "none"
					}, 130)
				}
			})
		}, 1500)
	}
}

function logDebug() {
	console.table({
		selectedHeroes: gameState.selectedHeroes,
		numberOfTurnedCards: gameState.numberOfTurnedCards,
	})
}
