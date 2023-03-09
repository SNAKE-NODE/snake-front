//export
function canvaSnake(){
    const body$$ = document.body;
    console.log(body$$);
    const div$$ = document.createElement('div');
    const spanScore$$ = document.createElement('span');
    const canvas$$ = document.createElement('canvas');
    const resetBtn$$ = document.createElement('button');

    body$$.appendChild(div$$);
    div$$.setAttribute('id', "gameContent");
    div$$.appendChild(canvas$$);
    div$$.appendChild(spanScore$$);
    div$$.appendChild(resetBtn$$);
    canvas$$.setAttribute('id', "gameTable");
    canvas$$.setAttribute('width', "500");
    canvas$$.setAttribute('height', "500");
    spanScore$$.setAttribute('id', "score");
    resetBtn$$.setAttribute('id', "resetBtn");
    resetBtn$$.innerHTML = "Restart Game";
    spanScore$$.innerHTML = 0;
    
    //canvas
    const snakeBoard = document.querySelector("#gameTable");
    const ctx = snakeBoard.getContext("2d");
    const scoreTxt = document.querySelector("#score");
    const gameWidth = snakeBoard.width;
    const gameHeight = snakeBoard.height;
    const boardBg = "black";
    const snakeColor = "white";
    const snakeBorder ="yellow";
    const foodColor = "red";
    const unitSize = 25;
    let running = false;
    let xVelocity = unitSize;
    let yVelocity = 0;
    let foodX;
    let foodY;
    let score  = 0;
    //each object pos is a part of the body of the snake
    let snake = [
        {x:unitSize*4, y:0},
        {x:unitSize*3, y:0},
        {x:unitSize*2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    window.addEventListener("keydown", changeDirection);
    resetBtn$$.addEventListener("click", resetGame);

    gameStart();
    createFood();
    drawFood();

    function gameStart(){};
    function nextTick(){};
    function clearBoard(){};

    function createFood(){
        function randomFood (min, max){
            const randomNumber = Math.round((Math.random()*(max-min)+min)/unitSize)*unitSize; //now all numbers are div*25
            return randomNumber;
        }
        foodX = randomFood(0, gameWidth - unitSize);
        console.log(foodX);
    };

    function drawFood(){
        ctx.fillStyle = foodColor;
        ctx.fillRect(foodX, foodY, unitSize, unitSize);
    };

    function moveSnake(){};
    function drawSnake(){};
    function changeDirection(){};
    function checkGameOver(){};
    function displayGameOver(){};
    function resetGame(){};
}

canvaSnake();