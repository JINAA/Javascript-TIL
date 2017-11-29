DAY 11.

> 충돌감지란?

두 요소의 x,y좌표가 겹치면 서로 충돌되었다고 인지하는 것

- 방법

```javascript
//object : 방해물 객체
//player : 플레이 객체
function collision() {
  if (object.x < player.x + player.width && object.x + object.width > player.x &&
  object.y < player.y + player.height && object.y + object.heigth > player.y) {
    
    //충돌 후 실행될 코드작성
    
  }
}
```

- 사용 (벽돌깨기 게임)

  ```javascript
  //공의 x위치는 벽돌의 x위치보다 크고
  //공의 x위치는 벽돌의 x위치와 벽돌 가로 길이 보다 작고
  //공의 y위치는 벽돌의 y위치보다 크고
  //공의 y위치는 벽돌의 y위치와 벽돌 세로 길이 보다 작다
    if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight
       + ballRadius) { dy = - dy }      
  ```

  ​