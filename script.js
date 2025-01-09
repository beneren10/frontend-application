const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector("#fruitSection ul")
const fruitNutr = document.querySelector("#nutritionSection p")

fruitForm.addEventListener("submit", extractFruit)
    
function extractFruit(e){
    e.preventDefault()
    fetchFruitData(e.target[0].value)
    e.target[0].value = ""
}

async function fetchFruitData(fruit) {
    try {
        const response = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`)
        if (response.ok) {
            const data = await response.json()
            addFruit(data)
        } else {
            throw "Error http status code " + response.status
        }
    } catch (err) {
        console.log(err)
    }
}

function addFruit(fruit) {
    const li = document.createElement("li")
    li.addEventListener('click',(e)=>{
        e.target.remove()
        console.log(e.targe)
        calories -= fruit.nutritions.calories
        fruitNutr.textContent = calories
    })
    li.textContent = fruit.name
    fruitList.appendChild(li)
    calories+= fruit.nutritions.calories
    fruitNutr.textContent = calories
} 

let calories = 0;

