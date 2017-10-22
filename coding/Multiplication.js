구구단

//구구단 3단 출력
var dan = 3;

for (var num = 1; num < 10; num++) {
  console.log("%d x %d = ",dan, num, dan * num);
}   

//키보드로 입력받은 구구단의 단 출력
var x = prompt("구구단 단수 입력하시오.");

  for (var y = 1; y < 10; y++){
  console.log("%d x %d = ",x,y, x * y);
  }

//구구단 출력
for (var x = 1; x < 10; x++){
  for (var y = 1; y < 10; y++){
  console.log("%d x %d = ",x,y, x * y);
  }
   console.log("=============\n")
}

//구구단 3단씩 찍기
for (var i = 2; i < 9; i += 3) {
  for(var j = 1; j < 10; j++){
    var i2 = i + 1;
    var i3 = i + 2;
    if (i === 8){
      console.log("%d * %d  = %d    %d * %d  = %d",
                  i,j,i * j,
                  i2,j,i2 * j);
    } else {
      console.log("%d * %d  = %d    %d * %d  = %d    %d * %d  = %d",
                  i,j,i * j,
                  i2,j,i2 * j,
                  i3,j,i3 * j);
    }
  } console.log("======================================\n")

}
