//디스플레이
var displayId = document.getElementById('display');
//텍스트 저장
var textTotal = "";
//연산숫자 저장
var numTotal = 0;
var firstNum = 0;
var secNum = 0;
//숫자 입력값 카운트
var inputCnt = 0;
//연산자 저장
var opr = "";

//리셋
function reset() {
	displayId.innerHTML = 0;
	numTotal = 0;
	textTotal = "";
	firstNum = 0;
	secNum = 0;
	inputCnt = 0;
	opr = "";
}

//버튼 클릭시
function clickNum(n){
	//alert("입력:"+n);
	//입력값이 연산자일경우
	if (n === '+' || n === '-' || n === '*' || n === '/') {
		//alert("연산자");
		if(opr === ""){
			opr = n;
			inputCnt = 1;
		}
		// 연산자 넣기
		textTotal += n; 
	//입력값이 =일경우	
	}else if(n === '='){
		//alert("난 는");
		//연산
		if(opr === '+'){
			numTotal = Number(firstNum) + Number(secNum);
		}else if(opr === '-'){
			numTotal = Number(firstNum) - Number(secNum);
		}else if(opr === '*'){
			numTotal = Number(firstNum) * Number(secNum);
		}else if(opr === '/'){
			numTotal = Number(firstNum) / Number(secNum);
		}
		//alert("연산완료:"+numTotal);
		textTotal = numTotal.toFixed(2);

	}else{ // 숫자일경우
		//alert("숫자");
		//입력횟수 확인
		if(inputCnt === 0){
			//입력값이 처음일경우
			if(firstNum == 0){
				firstNum = n;
			}else{
				firstNum = firstNum + "" + n;
			}
			
			//alert("firstNum : "+firstNum);
		}else{
			//입력값이 두번째일경우
			if(secNum == 0){
				secNum = n;
			}else{
				secNum = secNum + "" + n;
			}
			//alert("secNum : "+secNum);
		}
		textTotal += n;
	}
	//텍스트 저장
	displayId.innerHTML = textTotal;
}

function erase() {
firstNum -= n;
}
