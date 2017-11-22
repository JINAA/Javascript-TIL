DAY 11.

> 충돌감지란?

두 요소의 x,y좌표가 겹치면 서로 충돌되었다고 인지하는 것

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

