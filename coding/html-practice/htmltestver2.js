//1~100사이의 임의의 숫자를 생성하고 맞추는 게임을 작성
//html + js로 작성
//출력 내용은 html에 업뎃
//숫자를 맞출 경우 시도한 횟수를 출력

var randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

var count = 0;

while (true) {
var inputNum = parseInt(prompt("숫자를 입력하세요."));
document.write(inputNum + "<br>");

	if (randomNum != inputNum) {
 		document.write(++count + "번 틀렸어!" + "<br>");
		
		if (randomNum < inputNum) {
			document.write("DOWN👎" + "<br><br>");
		} else {
			document.write("UP👍" + "<br><br>");
		}
		continue;
	} 
	break;
}
document.write(++count + "번 만에 맞췄어! ㅊㅋㅊㅋ");