//100~1
for (var i = 100; i >= 1; i--) {
  console.log(i);
}

//0~100 짝수
for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//1~100 합
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum = sum + i;
    console.log(sum);

}
*1~100까지 합-지나
 var sum  = 0;

 for (var i = 1; i <= 100; i++) {
   sum += i;
   console.log(sum);

 }

//별찍기
for (var i = 1; i <= 4; i++){
  var str = "";
  for (var j = 0; j < i; j++){
    str += "*";
  }
  console.log(str);
}






