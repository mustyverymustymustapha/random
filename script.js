
const danceMoves = [
    "Moonwalk",
    "Robot",
    "Twist",
   
];

function getRandomMove() {
    const randomIndex = Math.floor(Math.random() * danceMoves.length);
    return danceMoves[randomIndex];
}

const moveDisplay = document.getElementById("move-display");
moveDisplay.addEventListener("click", () => {
    const randomMove = getRandomMove();
    moveDisplay.textContent = randomMove;
});
