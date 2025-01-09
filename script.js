const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector("#fruitSection ul")
const fruitNutr = document.querySelector("#nutritionSection p")

fruitForm.addEventListener("submit", extractFruit)
    
function extractFruit(e){
    e.preventDefault()
    fetchFruitData(e.target[0].value)
    e.target[0].value = ""
}

function fetchFruitData(fruit) {
    fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        .then(resp => resp.json())
        .then(data => addFruit(data))
        .catch(err => console.log("no fruit", err))
}

function addFruit(fruit) {
    const li = document.createElement("li")
    li.textContent = fruit.name
    fruitList.appendChild(li)
    calories+= fruit.nutritions.calories
    fruitNutr.textContent = calories
} 

let calories = 0;

