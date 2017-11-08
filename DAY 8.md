DAY 8.

> 벽돌깨기 게임

1. 공과 패들을 그리고 조작

```javascript
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

//키조작함수 호출
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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

//공을 그리고 움직여주는 함수
function draw() {
	//공이 움직인 흔적을 지워주는 작업
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
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
      setInterval(draw,40); //공이 패들에 부딪히면 공의 속도를 더 높인다
    	if(x > paddleX && x < paddleX + paddleWidth) {
        	dy = -dy;
    	} else {
        //alert("GAME OVER");
        document.location.reload();
    	}
	}  
	
	//패들을 캔버스 안에서만 움직이게 한다
	if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
	}
	else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
	}
}

//draw 함수를 10밀리초마다 실행 시켜준다(공을 그리는 것을 반복하게 만들어주는 함수 = setInterval)
//setInterval(draw,공의 속도)
setInterval(draw, 15);
```

2. 벽돌

```javascript
//벽돌
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

//벽돌 만드는 위치 지정 객체(2차원 배열 사용)
var bricks = [];
//0~5까지 돌면서 브릭스 배열의 인덱스에 배열을 추가
for(c=0; c<brickColumnCount; c++) { 
    bricks[c] = [];
  	//0~3까지 돌면서 브릭스배열의 c배열의 r인덱스에 x,y값을 준다. 배열의 인덱스가 이미 위치를 가지고 있기 때문에 각각의 좌표가 필요하지 않고 x,y 시작점만 주면 5*3의 벽돌 객체들이 생성된다.
    for(r=0; r<brickRowCount; r++) { 
        bricks[c][r] = { x: 0, y: 0 };
    }
}

//벽돌 그리기
function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.closePath();
        }
    }
}
```

2-1. 2차원 배열

배열안에 배열이 있는것

```javascript
var items = [[1,2],[3,4],[5,6]];
alert(items[0][0]); // 1
```

3. 충돌 감지

```javascript
//공과 벽돌의 위치를 파악하고 벽돌에 공이 부딪히면 방향전환
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
          //공의 x위치는 벽돌의 x위치보다 크고
          //공의 x위치는 벽돌의 x위치와 벽돌 가로 길이 보다 작고
          //공의 y위치는 벽돌의 y위치보다 크고
          //공의 y위치는 벽돌의 y위치와 벽돌 세로 길이와 공의 반지름 보다 작다
          if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight + ballRadius) {
                dy = -dy;
            }
        }
    }
}
```

