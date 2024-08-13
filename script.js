const imagesArray = [
	{ heroName: "capitain", imageUrl: "capitain.jpg" },
	{ heroName: "ironman", imageUrl: "ironman.jpg" },
	{ heroName: "spiderman", imageUrl: "spider.jpg" },
	{ heroName: "strange", imageUrl: "strange.jpg" },
	{ heroName: "thor", imageUrl: "thor.jpg" },
	{ heroName: "widow", imageUrl: "widow.jpg" },
]

const shuffleArraySort = (array) => {
	return array.sort(() => Math.random() - 0.5)
}
const copiedArray = [...imagesArray]

const shuffledArrOne = shuffleArraySort(copiedArray)

const shuffledArr = shuffleArraySort(imagesArray)

const cards_array = document.querySelectorAll(".card")

const combinedArray = shuffledArrOne.concat(shuffledArr)

cards_array.forEach((card, indx) => {
	card.addEventListener("click", (e) => {
		if (e.target.getAttribute("data-rotate") === "false") {
			card.classList.add("animate__rotate")
			e.target.setAttribute("data-rotate", "true")
			setTimeout(() => {
				card.style.backgroundImage = `url("./assets/${combinedArray[indx].imageUrl}")`
			}, 130)
		} else {
			card.classList.remove("animate__rotate")
			e.target.setAttribute("data-rotate", "false")
			setTimeout(() => {
				card.style.backgroundImage = "none"
			}, 130)

			clearTimeout()
		}
	})
})

/*  dynamic card population  */
// for (let index = 0; index < imagesArray.length; index++) {
// 	const hero = imagesArray[index]
// 	cards_array[index].style.backgroundImage = `url("./assets/${hero.imageUrl}")`
// }
