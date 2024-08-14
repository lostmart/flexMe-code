const cardsArray = document.querySelectorAll(".card")

// State management within an object
const gameState = {
	selectedHeroes: [],
	numberOfTurnedCards: 0,
	activeCardIndex: null,
}

// Add event listeners to each card
cardsArray.forEach((card, indx) => {
	card.addEventListener("click", handleCardClick.bind(null, card, indx))
})

// Handle card click
function handleCardClick(card, indx, e) {
	if (e.target.matches(".animate__rotate")) return

	if (gameState.numberOfTurnedCards < 2) {
		gameState.numberOfTurnedCards++
		gameState.activeCardIndex = indx
		gameState.selectedHeroes.push(combinedArray[indx].heroName)
		toggleCardState(card, indx, e)
	}

	if (gameState.numberOfTurnedCards === 2) {
		checkCorrect()
	}

	logDebug()
}

// Toggle the state of the card
function toggleCardState(card, indx, e) {
	const isActivated = e.target.getAttribute("data-rotate") === "true"

	if (!isActivated) {
		activateCard(card, indx)
		e.target.setAttribute("data-rotate", "true")
	} else {
		deactivateCard(card)
		e.target.setAttribute("data-rotate", "false")
	}
}

function activateCard(card, indx) {
	card.classList.add("animate__rotate")
	setTimeout(() => {
		card.style.backgroundImage = `url("./assets/${combinedArray[indx].imageUrl}")`
	}, 130)
}

function deactivateCard(card) {
	card.classList.remove("animate__rotate")
	setTimeout(() => {
		card.style.backgroundImage = "none"
	}, 130)
}

function checkCorrect() {
	if (gameState.selectedHeroes[0] === gameState.selectedHeroes[1]) {
		console.log("Good match!")
		markCardsAsDone()
	} else {
		console.log("No match, resetting...")
		resetState()
	}
}

function markCardsAsDone() {
	cardsArray.forEach((card) => {
		if (card.matches(".animate__rotate")) {
			card.classList.add("done")
		}
	})
}

function resetState() {
	setTimeout(() => {
		cardsArray.forEach((card) => {
			if (card.matches(".animate__rotate")) {
				deactivateCard(card)
			}
		})
		gameState.selectedHeroes = []
		gameState.activeCardIndex = null
		gameState.numberOfTurnedCards = 0
		console.log("Card selection reset")
	}, 1500)
}

function logDebug() {
	console.table({
		selectedHeroes: gameState.selectedHeroes,
		numberOfTurnedCards: gameState.numberOfTurnedCards,
	})
}
