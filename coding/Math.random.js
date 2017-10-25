//1~10 정수
var b = Math.random() * 10;
//console.log(b);
var c = Math.floor(b)+1;
console.log(c);

//1~10 짝수
var a = Math.random() * 5;
var n = Math.floor(a+1)*2-1;

console.log("임의의 숫자 생성하는 프로그램");
console.log("생성한 숫자는 "+ n +" 입니다");
a = Math.random() * 5;
n = Math.floor(a + 1) * 2 - 1;
console.log("생성한 숫자는 "+ n +" 입니다");
a = Math.random() * 5;
n = Math.floor(a + 1) * 2 - 1;
console.log("생성한 숫자는 "+ n +" 입니다");
a = Math.random() * 5;
n = Math.floor(a + 1) * 2 - 1;
console.log("생성한 숫자는 "+ n +" 입니다");
a = Math.random() * 5;
n = Math.floor(a + 1) * 2 - 1;
console.log("생성한 숫자는 "+ n +" 입니다");
console.log("끝")

//브라우저에 이름을 입력하고 경고창으로 "000님은 주사위를 x를 굴리셨습니다."를 출력하는 프로그램 만들기
var name = prompt("이름을 입력하세요.");
console.log(name);
var dice = Math.random() * 6;
var x = Math.floor(dice + 1) ;
console.log(name + "님은 주사위를 " + x + " 를 굴리셨습니다.");

