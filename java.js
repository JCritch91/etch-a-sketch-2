const gridContainer = document.querySelector(".grid-container")
const square = document.querySelector(".square")
const sidebar = document.querySelector(".sidebar")
const gridSizeButton = document.querySelector(".slider")
const blackColorButton = document.querySelector(".black-color")
const randomColorButton = document.querySelector(".random-color")
const gradientColorButton = document.querySelector(".gradient")
const gridSizeText = document.querySelector('.slide-value')
const whiteColorButton = document.querySelector('.eraser')
const clearButton = document.querySelector('.clear')
const buttons = document.querySelectorAll('button')

let gridSelection = 256
let gridPrompt = 16
let blackGrid = 1
let colorGrid = 0
let gradientGrid = 0
let whiteGrid = 0

const start = createGrid()

function createGrid() {
    for (let i = 0; i < gridSelection; i++){
        let newSquare = document.createElement('div')
        newSquare.className ='square'
        newSquare.id = `square ${i}`
        newSquare.style.height = (`calc(500px / ${gridPrompt})`)
        newSquare.style.width = (`calc(500px / ${gridPrompt})`)
        newSquare.style.backgroundColor = 'rgb(255, 255, 255)'
        newSquare.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = colorSelection(e)
        })
        gridContainer.appendChild(newSquare)
    }
}


gridSizeButton.oninput = function() {
    gridSizeText.textContent = `${this.value} x ${this.value}`
  }

gridSizeButton.addEventListener('click', () => {
    resetGrid()
    gridPrompt = gridSizeButton.value
    gridSelection = Math.pow(gridPrompt, 2) 
    createGrid()
})

sidebar.addEventListener('click', handleClick, false)

function handleClick(e) {
  const { target } = e;

  // If a button has been clicked
  if (target.classList.contains('button')) {

    // Clear any active buttons 
    buttons.forEach(button => button.classList.remove('activebutton'));

    // Make the clicked button active
    target.classList.add('activebutton');
  }
}

blackColorButton.addEventListener('click', () => {
    blackGrid = 1
    colorGrid = 0
    gradientGrid = 0
    whiteGrid = 0
})

randomColorButton.addEventListener('click', () => {
    blackGrid = 0
    colorGrid = 1
    gradientGrid = 0
    whiteGrid = 0
})

gradientColorButton.addEventListener('click', () => {
    blackGrid = 0
    colorGrid = 0
    gradientGrid = 1
    whiteGrid = 0
})

whiteColorButton.addEventListener('click', () => {
    blackGrid = 0
    colorGrid = 0
    gradientGrid = 0
    whiteGrid = 1
    
})

clearButton.addEventListener('click', () => {
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild)
    }
    createGrid()
    });


function colorSelection(e) {
    if (colorGrid == 1){
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        return `rgb(${red}, ${green}, ${blue})`
    } 
    else if (gradientGrid == 1){
        let rgbString = e.target.style.backgroundColor
        let colors = ["red", "green", "blue"]
        let colorArr = rgbString.slice( 
            rgbString.indexOf("(") + 1,  
            rgbString.indexOf(")") 
        ).split(", "); 
        let array = colorArr 
        let red = array[0]
        let blue = array[1]
        let green = array[2]
        return `rgb(${red- 25.5}, ${green -25.5}, ${blue -25.5})`
    }
    else if (whiteGrid == 1) {
        return 'rgb(255, 255, 255)'
    }
    else {
        return 'rgb(0, 0, 0)'
    }
}


function resetGrid() {
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild)
    }
    blackGrid = 1
    colorGrid = 0
    gradientGrid = 0
    whiteGrid = 0 
    return
}
