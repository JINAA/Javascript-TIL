DAY 9.

> 2차원 배열 2

```javascript
var arr = [[1,2,3],[4,5,6]] //2행 3열 배열
```




- n*m 배열 순회

```javascript
var arr = [[1,2,3],[4,5,6]]
for (var i =0; i < arr.length; i++) {
  for (var j = 0; arr[i].length; j++){
    console.log([i][j])
  }
}
```






> 알고리즘 - 배열

- 자료구조의 중요도 

1. List :  순서가 있다
2. map : 딕셔너리, 오브젝트
3. tree
4. graph



- 배열과 리스트의 차이

배열 : 크기가 고정 되어있다.

​	  특정 원소에 접근이 어렵다(복잡도 : O(1))

​	  특정 원소의 값 바꾸기

```
a[10] = 5
```

​	  중간에 원소 삽입이 어렵다.

```javascript
//n 자리에 x 값을 넣는다.
arr.length++; // arr[1,2,3, ]
for (var i = arr.lentgh-1; i >= n; i--) {
  arr[i] = arr[i-1];
}
//복잡도 (O(n))-addfirst구현
```

리스트 : 크기가 가변적(확장 및 축소 가능)



- 배열은 언제 사용하는가

특정 원소를 자주 읽을 때(O(1)) = 랜덤엑세스



- 만약 삽입이 빈번하게 일어난다면

배열보다는 링크드리스트를 많이 씀



- 배열메소드

init(size)

wirte(idx,value) : 배열에 특정인덱스의 특정값을 쓰겠다

read(idx)

length()



- 추가 메소드

addfirst(value) : 배열의 처음에 값을 추가

addlast(value)

removefirst : 배열 처음 값을 리턴해준다

removelast



- 편리를 위한 메소드

slice(start,end) 



> requestAnimationFrame

기존의 setInterval 과 setTimeout을 사용하여 애니메이션을 그리게 되면 주기적으로 애니메이션을 그릴 때 효율적이지 못했다. 따라서 애니메이션이 과도하게 그려지면서 프레임이 손실되기 때문에 애니메이션이 끊어지는 현상을 가져오며, CPU가 낭비되었으며, 추가 전력이 사용되었다. 또한 해당 페이지를 사용하지 않고 있어도 애니메이션이 종종 발생되었다.



그러나 requestAnimationFrame 메서드는 브라우저가 페이지를 업데이트 해야 할 때만 앱에 알려 프레임 손실 문제를 해결할 수 있습니다. 따라서 적절한 리소스 양만 사용하여 효율적인 애니메이션 구현이 가능하다.

```javascript
var x = setTimeout(alertDelay, 1000) ->
var x = requestAnimationFrame(alertDelay)
```






> 벽돌깨기 게임 (day8이어서)

1. 충돌한 벽돌 제거

```javascript
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
                    b.status = 0; //status의 초기 1값을 0으로 바꿔 삭제시킨다.
                    ball.randomColor();
                    score += 10;//status가 0으로 바뀌면서 점수 10점씩 부여
                    //setTimeout과 같은 기능, 벽돌을 모두 제거하면 축하메시지을 띄운다
                    requestAnimationFrame(alertDelay);
                }
            }
        }
    }
}
```

2. 점수와 목숨값 표시

fillText 메서드를 이용해 텍스트에 점수와 목숨값을 보여줄 수 있다.

```javascript
//점수 표시 함수
function drawscore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+ score, 8, 20);
}

//목숨 표시 함수
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}
```

3. 게임 종료시키기

게임의 메인 코드

화면의 전체적인 구성과 기능을 표현하며 lives 가 0이 되면 게임이 종료된다.

```javascript
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

draw();
```





