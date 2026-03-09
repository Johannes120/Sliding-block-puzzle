const puzzle = document.getElementById("puzzle");
const timerDisplay = document.getElementById("timer");
const movesDisplay = document.getElementById("moves");
const shuffleBtn = document.getElementById("shuffleBtn");

let tiles = [];
let moveCount = 0;
let seconds = 0;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        timerDisplay.textContent =
            `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
}

function createPuzzle() {
    puzzle.innerHTML = "";
    tiles.forEach((value, index) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        if (value === 0) {
            tile.classList.add("empty");
        } else {
            tile.textContent = value;
            tile.addEventListener("click", () => moveTile(index));
        }

        puzzle.appendChild(tile);
    });
}

function moveTile(index) {
    const emptyIndex = tiles.indexOf(0);
    const validMoves = [
        index - 1,
        index + 1,
        index - 3,
        index + 3
    ];

    if (
        validMoves.includes(emptyIndex) &&
        !(index % 3 === 0 && emptyIndex === index - 1) &&
        !(index % 3 === 2 && emptyIndex === index + 1)
    ) {
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        moveCount++;
        movesDisplay.textContent = moveCount;
        createPuzzle();
        checkWin();
    }
}

function shuffle() {
    tiles = [...Array(8).keys()].map(x => x + 1);
    tiles.push(0);

    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }

    moveCount = 0;
    movesDisplay.textContent = moveCount;
    startTimer();
    createPuzzle();
}

function checkWin() {
    for (let i = 0; i < 8; i++) {
        if (tiles[i] !== i + 1) return;
    }
    clearInterval(timerInterval);
    setTimeout(() => alert("🎉 Congratulations! You solved the puzzle!"), 200);
}

shuffleBtn.addEventListener("click", shuffle);

shuffle();