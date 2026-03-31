🛠️ Sliding Puzzle Game
A sleek, responsive sliding tile puzzle built to practice modern JavaScript fundamentals and DOM manipulation.

📝 Description
This project is an interactive 3x3 sliding puzzle game. It challenges players to rearrange scrambled tiles into numerical order by clicking on tiles adjacent to an empty space.

Beyond the gameplay, this project served as a deep dive into Functional Programming and Asynchronous Logic. I focused on creating a "Single Source of Truth" for the game state, ensuring that the UI stays perfectly in sync with the underlying logic array whenever a tile is moved or the board is shuffled.

🚀 Key Technical Learnings
DOM Manipulation & Traversal: I implemented dynamic rendering to generate the puzzle grid. By using document.createElement and appendChild, the board is built programmatically rather than hard-coded in HTML.

Asynchronous JavaScript: I utilized setTimeout and Promise-based delays to handle the shuffle animation, ensuring the user doesn't interact with the board while the "shuffling" process is active.

Arrow Functions & Modern Syntax: The entire logic is written using ES6+ syntax. Arrow functions were used extensively for cleaner event listeners and array methods like .map() and .forEach().

Event Handling & Delegation: I practiced efficient event management by attaching listeners to the tiles, capturing user "clicks" to trigger coordinate-based logic that determines if a move is valid.

🎮 Features
Responsive UI: A mobile-first design that adapts seamlessly from smartphones to large desktop monitors.

Smart Shuffle: An algorithm that ensures the puzzle is always solvable.

Move Counter: Tracks the number of moves to challenge the player’s efficiency.

Smooth Animations: CSS transitions paired with JS logic for a premium "feel."

🔧 Installation & Usage
Clone the repository:

Bash
git clone https://github.com/Johannes120/puzzle-project.git
Open index.html in your favorite browser.

Click the Shuffle button to start a new game!

## Live Demo
https://johannes120.github.io/Sliding-block-puzzle/
