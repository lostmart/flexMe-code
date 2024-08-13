const imagesArray = [
	{ heroName: "capitain", imageUrl: "capitain.jpg" },
	{ heroName: "ironman", imageUrl: "ironman.jpg" },
]

const cards_array = document.querySelectorAll(".card")

cards_array.forEach((card) => {
	card.addEventListener("click", (e) => {
		if (e.target.getAttribute("data-rotate") === "false") {
			card.classList.add("animate__rotate")
			e.target.setAttribute("data-rotate", "true")
		} else {
			card.classList.remove("animate__rotate")
			e.target.setAttribute("data-rotate", "false")
		}
	})
})
