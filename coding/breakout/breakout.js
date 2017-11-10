var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//드로잉 루프 정의
var x = canvas.width / 2;
var y = canvas.height - 30;
//공의 움직임 표현
var dx = 2;
var dy = -2;
//반지름 값
var ballRadius = 10;
//패들
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
//패들 조작
var rightPressed = false;
var leftPressed = false;
//벽돌
var brickRowCount = 4;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 35;
var brickOffsetLeft = 30;
//점수
var score = 0;
//목숨
var lives = 3;

//벽돌 만드는 위치 지정 객체(2차원 배열 사용)
var bricks = [];
//0~5까지 돌면서 브릭스 배열의 인덱스에 배열을 추가
for(c=0; c<brickColumnCount; c++) { 
    bricks[c] = [];
    //0~3까지 돌면서 브릭스배열의 c배열의 r인덱스에 x,y값을 준다.
    for(r=0; r<brickRowCount; r++) { 
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}

//키조작함수 호출
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//document.addEventListener("mousemove",mouseMoveHandler, false);

//마우스 컨트롤
// function mouseMoveHandler(e) {
//     var relativeX = e.clientX - canvas.offsetLeft;
//     if(relativeX > 0 && relativeX < canvas.width) {
//         paddleX = relativeX - paddleWidth/2;
//     }
// }

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

//공과 벽돌의 위치
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
            //공의 x위치는 벽돌의 x위치보다 크고
            //공의 x위치는 벽돌의 x위치와 벽돌 가로 길이 보다 작고
            //공의 y위치는 벽돌의 y위치보다 크고
            //공의 y위치는 벽돌의 y위치와 벽돌 세로 길이 보다 작다
                if(x > b.x && x < b.x+brickWidth && y > b.y &&
                    y < b.y+brickHeight + ballRadius) {
                    dy = - dy;
                    b.status = 0;
                    ball.randomColor();
                    score += 10;
                    //setTimeout("alertDelay()",100);
                    requestAnimationFrame(alertDelay);
                }
            }
        }
    }
}
//게임 클리어 후 재시작 함수
function alertDelay() {
    if(score === 200) {
        alert("축하해요" + score + " 점으로 클리어!");
        document.location.reload();
    }
}

//점수 표시 함수
function drawscore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

//목숨 표시 함수
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

//공 색깔 객체
var ball = {color: "red", 
    baseColor: ["red", "yellow", "green"],
    baseIdx: 0
};

//공의 색깔을 ball객체에 맞춰 바꿔준다.
ball.randomColor = function() {
    this.baseIdx++;
    if (this.baseIdx >= this.baseColor.length) {
        this.baseIdx = 0;
    }
    this.color = this.baseColor[this.baseIdx];
}
//공을 그리는 함수
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

//패들그리기
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

//벽돌 그리기
function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

//공을 그리고 움직여주는 함수
function draw() {   
    //공이 움직인 흔적을 지워주는 작업
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();
    drawscore();
    drawLives();
    //변수 x,y 갱신(공은 매 갱신마다 새 위치에 그려지게 된다.)
    x += dx;
    y += dy;
    //공이 벽을 만나면 x,y축의 방향을 바꾼다
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ball.randomColor();     
    }
    if(y + dy < ballRadius) {
        dy = -dy;
        ball.randomColor(); 
    } else if(y + dy > canvas.height - ballRadius - paddleHeight) {
        //setInterval(draw,40); //공이 패들에 부딭히면 공의 속도를 높인다.
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            lives--;
            if(!lives) {
            alert("GAME OVER");
            document.location.reload();
            } else {
                dx = 3;
                dy = -3;
            }
        }
    }  
    
    //패들을 캔버스 안에서만 움직이게 한다
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
    }
    
    requestAnimationFrame(draw);
}

//draw 함수를 10밀리초마다 실행 시켜준다(공을 그리는 것을 반복하게 만들어주는 함수 = setInterval)
//setInterval(draw,공의 속도)
// setInterval(draw, 12);
draw();