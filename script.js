const cardsArray = document.querySelectorAll(".card")

// State management within an object
const gameState = {
	selectedHeroes: [],
	numberOfTurnedCards: 0,
	activeCardIndex: null,
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

	if (!isActivated) {
		e.target.setAttribute("data-rotate", "true")
		card.classList.add("animate__rotate")
		setTimeout(() => {
			card.style.backgroundImage = `url("./assets/${combinedArray[indx].imageUrl}")`
		}, 130)
	} else {
		e.target.setAttribute("data-rotate", "false")
		card.classList.remove("animate__rotate")
		setTimeout(() => {
			card.style.backgroundImage = "none"
		}, 130)
	}
	logDebug()
}

function logDebug() {
	console.table({
		selectedHeroes: gameState.selectedHeroes,
		numberOfTurnedCards: gameState.numberOfTurnedCards,
	})
}
