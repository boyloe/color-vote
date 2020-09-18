

const baseURL = "http://localhost:3000/colors"
const cardContainer = document.querySelector('#card-container')
let votes = 0


fetch(baseURL)
    .then(response => response.json())
    .then(colors => handleColors(colors))

function handleColors(colors){
    colors.forEach(color => {
        const colorCard = document.createElement('div')
    
        colorCard.classList.add('color-card')
        colorCard.style = "background-color: #000000"
    
        cardContainer.appendChild(colorCard)
        addColorName(color,colorCard)
        addVoteCount(colorCard)
        addVoteButton(colorCard)
        colorCard.addEventListener('click', () => increaseVotes(votes))
    })
}    


function addColorName(color,colorCard){
    const colorName = document.createElement('h2')

    colorName.textContent = `${color.name}`

    colorCard.appendChild(colorName)
}

function addVoteCount(colorCard){
    const voteCount = document.createElement('p')
    voteCount.textContent = `${votes} Votes`
    colorCard.appendChild(voteCount)
}

function addVoteButton(colorCard){
    const voteButton = document.createElement('button')

    voteButton.innerText = '+1 Vote!'
    voteButton.id = "vote"

    colorCard.append(voteButton)
}

function increaseVotes(votes){
     votes += 1
     const voteCount = document.querySelector('p')    
     voteCount.textContent = `${votes} Votes`
     return votes 
}