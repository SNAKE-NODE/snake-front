export function canvaSnake() {
  const body$$ = document.body;
  const div$$ = document.createElement("div");
  const canvas$$ = document.createElement("canvas");

  body$$.appendChild(div$$);
  div$$.setAttribute("id", "gameContent");
  div$$.appendChild(canvas$$);
  canvas$$.setAttribute("id", "gameTable");
  canvas$$.setAttribute("width", "800");
  canvas$$.setAttribute("height", "800");

  //canvas
  const ctx = canvas$$.getContext("2d");
  let tileCount = 20;
  let tileSize = 18;
  let headX = 10;
  let headY = 10;
  let xvelocity = 0;
  let yvelocity = 0;
  let appleX = 5;
  let appleY = 5;
  let score = 0;
  // array for snake parts
  const snakeParts = [];
  let tailLength = 2; //initial parts of snake

  document.body.addEventListener("keydown", keyDown);

  class snakePart {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  function drawGame() {
    score = 0;
    let speed = 7;
    clearScreen();
    drawSnake();
    changeSnakePosition();
    checkCollision();
    drawApple();
    drawScore();
    setTimeout(drawGame, 1000 / speed); //update screen 7 times a second
  }

  function drawSnake() {
    ctx.fillStyle = "white";
    for (let i = 0; i < snakeParts.length; i++) {
      //draw snake parts
      let part = snakeParts[i];
      ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }
    snakeParts.push(new snakePart(headX, headY));
  }

  function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas$$.clientWidth, canvas$$.clientHeight);
  }

  function keyDown() {
    //up
    if (event.keyCode == 38) {
      if (yvelocity == 1) return; //prevent snake from moving in opposite direction
      yvelocity = -1;
      xvelocity = 0;
    }
    //down
    if (event.keyCode == 40) {
      if (yvelocity == -1) return; //prevent snake from moving in opposite direction
      yvelocity = 1;
      xvelocity = 0;
    }

    //left
    if (event.keyCode == 37) {
      if (xvelocity == 1) return; //prevent snake from moving in opposite direction
      yvelocity = 0;
      xvelocity = -1;
    }
    //right
    if (event.keyCode == 48) {
      if (xvelocity == -1) return; //prevent snake from moving in opposite direcction
      yvelocity = 0;
      xvelocity = 1;
    }
  }

  function changeSnakePosition() {
    headX = headX + xvelocity;
    headY = headY + yvelocity;
  }

  function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
  }

  function checkCollision() {
    if (appleX == headX && appleY == headY) {
      appleX = Math.floor(Math.random() * tileCount);
      appleY = Math.floor(Math.random() * tileCount);
    }
  }

  function checkCollision() {
    if (appleX == headX && appleY == headY) {
      appleX = Math.floor(Math.random() * tileCount);
      appleY = Math.floor(Math.random() * tileCount);
      tailLength++;
    }
  }
  function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "20px verdena";
    ctx.fillText("Score: " + score, canvas$$.clientWidth - 90, 30);
  }

  function isGameOver() {
    let gameOver = false;
    //check whether game has started
    if (yvelocity === 0 && xvelocity === 0) {
      return false;
    }
    if (headX < 0) {
      //if snake hits left wall
      gameOver = true;
    } else if (headX === tileCount) {
      //if snake hits right wall
      gameOver = true;
    } else if (headY < 0) {
      //if snake hits wall at the top
      gameOver = true;
    } else if (headY === tileCount) {
      //if snake hits wall at the bottom
      gameOver = true;
    }

    //stop the game when snake bumps into itself

    for (let i = 0; i < snakeParts.length; i++) {
      let part = snakeParts[i];
      if (part.x === headX && part.y === headY) {
        //check whether any part of snake is occupying the same space
        gameOver = true;
        break; // to break out of for loop
      }
    }
    //display text Game Over
    if (gameOver) {
      ctx.fillStyle = "white";
      ctx.font = "50px verdana";
      ctx.fillText(
        "Game Over! ",
        canvas$$.clientWidth / 6.5,
        canvas$$.clientHeight / 2
      ); //position our text in center
    }

    return gameOver; // this will stop the execution of the draw game method
  }
  drawGame();
}

