const cards_array = document.querySelectorAll(".card")
cards_array.forEach((card) => {
	card.addEventListener("click", (e) => {
		card.classList.add("animate__rotate")
		e.target.setAttribute("data-rotate", "true")
	})
})
