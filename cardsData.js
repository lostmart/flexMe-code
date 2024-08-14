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

const clonedArray = [...imagesArray]

const shuffledArrOne = shuffleArraySort(clonedArray)

const shuffledArr = shuffleArraySort(imagesArray)

const combinedArray = shuffledArrOne.concat(shuffledArr)
