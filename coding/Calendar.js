//달력
console.log("월 화 수 목 금 토 일");
var str = ""
for(var i = 1; i <= 31; i++){
  str += i + " ";
  if (i % 7 === 0) {
    str += "\n";
  }
}
console.log(str);