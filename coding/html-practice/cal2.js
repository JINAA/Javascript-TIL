//디스플레이
var displayId = document.getElementById('display');

//숫자,연산자 저장
var firstNum = "";
var secNum = "";
var opr = "";


//버튼 클릭 시
function clickNum(n){
	if(opr != "" &&  typeof(n) == 'number') {
		secNum += n;
		displayId.innerHTML = secNum;
		return;
	} else if (typeof(n) === 'number') {
		firstNum += n;
	} else if (n === '+' || n === '-' || n === '*' || n === '/') {
		opr = n;
	} else if (n === '=') {
		displayId.innerHTML = oper(opr);
		return;
	}	
	displayId.innerHTML = firstNum;
}

 //연산 함수
var oper = function(s) {
	var result;
	if(s === '+'){
		result = Number(firstNum) + Number(secNum);
	}else if(s === '-'){
		result = Number(firstNum) - Number(secNum);
	}else if(s === '*'){
		result = Number(firstNum) * Number(secNum);
	}else if(s === '/'){
		result = Number(firstNum) / Number(secNum);
	}
	return result;
	//textTotal.push(numTotal.toFixed(2));
};

//reset
var reset = function() {
	
	firstNum = "";
	secNum = "";
	opr = "";
	displayId.innerHTML = 0;

};

// 입력한 숫자 뒤에서 부터 지우기
// function erase() {
// 	if (displayId.innerHTML = firstNum) {
// 		firstNum.substring(0,firstNum.length - 1);
// 	} else if (displayId.innerHTML = secNum) {
// 		secNum.substring(o,secNum - 1);
// 	}
// }



