const gridContainer = document.querySelector(".grid-container")
const square = document.querySelector(".square")

const start = createGrid()

function createGrid() {
    for (let i = 0; i < 256; i++){
        let newSquare = document.createElement('div')
        newSquare.className ='square'
        newSquare.id = `square ${i}`
        newSquare.addEventListener('mouseover', (e) =>{
            e.target.style.backgroundColor = "black"
        })
        gridContainer.appendChild(newSquare)
    }
}

