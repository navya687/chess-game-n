const board = document.querySelector('.chess-board');
const squares = [];
const pieces = [];

// Initialize the board
for (let i = 0; i < 8; i++) {
    squares[i] = [];
    for (let j = 0; j < 8; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.dataset.row = i;
        square.dataset.col = j;
        if ((i + j) % 2 === 0) {
            square.classList.add('white');
        } else {
            square.classList.add('black');
        }
        board.appendChild(square);
        squares[i][j] = square;
    }
}

// Initialize the pieces
for (let i = 0; i < 8; i++) {
    pieces.push({ type: 'pawn', row: 1, col: i, color: 'white' });
    pieces.push({ type: 'pawn', row: 6, col: i, color: 'black' });
}

// Place the pieces on the board
pieces.forEach(piece => {
    const square = squares[piece.row][piece.col];
    square.textContent = getPieceSymbol(piece);
});

function getPieceSymbol(piece) {
    switch (piece.type) {
        case 'pawn':
            return piece.color === 'white' ? '\u2659' : '\u265F';
        // Add more piece types as needed
    }
}

