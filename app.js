let canvas = document.getElementById('game');

let context = canvas.getContext('2d');

let grid = 16;
let count = 0;
let appleCount = 0;
let snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4
};
let apple = {
  x: 320,
  y: 320
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
  
function loop() {
    requestAnimationFrame(loop);
    if (++count < 4) {
      return;
    }
    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.x += snake.dx;
    snake.y += snake.dy;
    if (snake.x < 0) {
        snake.cells = []
        alert("Game over. Your score: " + appleCount + "\nTry again!");
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.maxCells = 4;
        snake.x = 160;
        snake.y = 160;
        appleCount = 0;
    }
    else if (snake.x >= canvas.width) {
        snake.cells = []
        alert("Game over. Your score: " + appleCount + "\nTry again!");
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.maxCells = 4;
        snake.x = 160;
        snake.y = 160;
        appleCount = 0;
    }
    if (snake.y < 0) {
        snake.cells = []
        alert("Game over. Your score: " + appleCount + "\nTry again!");
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.maxCells = 4;
        snake.x = 160;
        snake.y = 160;
        appleCount = 0;
    }
    else if (snake.y >= canvas.height) {
        snake.cells = []
        alert("Game over. Your score: " + appleCount + "\nTry again!");
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.maxCells = 4;
        snake.x = 160;
        snake.y = 160;
        appleCount = 0;
    }
    snake.cells.unshift({ x: snake.x, y: snake.y });
    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    }
    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
    context.fillStyle = 'green';
    snake.cells.forEach(function (cell, index) {
      context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
      if (cell.x === apple.x && cell.y === apple.y) {
        snake.maxCells++;
        appleCount++
        countEl.innerHTML = appleCount;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
      for (var i = index + 1; i < snake.cells.length; i++) {
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          snake.x = 160;
          snake.y = 160;
          snake.cells = [];
          snake.maxCells = 4;
          snake.dx = grid;
          snake.dy = 0;
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
        }
      }
    });
  }

document.addEventListener('keydown', function (e) {

    if ((e.which === 37 && snake.dx === 0) || (e.which === 65 && snake.dx === 0)) {
      // left
      snake.dx = -grid;
      snake.dy = 0;
    }
    // up
    else if ((e.which === 38 && snake.dy === 0) || (e.which === 87 && snake.dy === 0)) {
      snake.dy = -grid;
      snake.dx = 0;
    }
    // right
    else if ((e.which === 39 && snake.dx === 0) || (e.which === 68 && snake.dx === 0)) {
      snake.dx = grid;
      snake.dy = 0;
    }
    // down
    else if ((e.which === 40 && snake.dy === 0) || (e.which === 83 && snake.dy === 0)) {
      snake.dy = grid;
      snake.dx = 0;
    }
  });

requestAnimationFrame(loop);
