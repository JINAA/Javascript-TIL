//입력 숫자가 짝수인지 홀수인지 구분

var num = prompt("Input number");

if (num % 2  === 0) {
  console.log("짝수입니다.");
} else if (num % 2 === 1) {
  console.log("홀수입니다.");
} else {
  console.log("이상합니다.");
}