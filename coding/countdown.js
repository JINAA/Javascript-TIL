//재귀(무한반복 됨)
var countdown = function(n) {
	for (var i = n; i >= 0; i--) {
		console.log(i);
	}
}
countdown(10);

//변수와 콘솔로그에는 값이 들어가야 한다 예제
var x = Math.floor(10.5); 
console.log(Math.floor(10.5));

//재귀(무한반복 해결)
var countDown2 = function(n) {
	console..log(n);
	//종료 조건
	if (n <= 0) {
		return;
	}
	countDown2(n-1);
			
};

countDown2(10);

//a~b까지 더하고 리턴해 주는 함수(정수)
var sum = 0; 
var rsum = function(a,b) {
	for (var i = a; i <=b; i++) {
		sum += i;
		console.log(sum);
		if (sum === 5050) {
			return;
		}
	}
  
  rsum(1,100);
};
rsum(1,100);

var x = sum;
console.log(x); //5050

//짧게
var rsum = function(a,b) {
	if (a == b) {
		return a;
	}
	return b + rsum(a, b-1);
}

var x = rsum(1,10);
console.log(x);
/* 결과
var x = rsum(1,4);
= 4 + rsum(1,3)
= 4 + 3 + rsum(1,2)
= 4 + 3 + 2 + rsum(1,1)
= 4 + 3 + 2 + 1
= 10
*/

//재귀로 팩토리얼 구현하기
//fact(3); = 3*2*1
var str = "";
var fact = function(n) {
	if ( n === 1) {
		str += 1;
		return 1;
	}
	str += n + " * ";
	console.log(str);
	return n * fact(n - 1);
};
var x = fact(3);
console.log("%s = %d",str,x);

//피보나치
var fibo = function(n) {
    if (n === 0) {
		return 0;
	} else if (n  === 1) {
		return 1;
	}
    
	return fibo(n - 1) + fibo(n - 2);
};


var answer = [];

for (var i = 0; i < 30; i++) {
	answer.push(fibo(i));
}

console.log(answer);

