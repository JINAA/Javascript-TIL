> scope



1. 전역변수, 지역변수

is not defined :  선언하지 않았는데 사용하려 하면 오류 발생 (정의 되지 않았다.)

undefined : 선언만 하고 값이 없다. 



2. use strict

함수 내의 지역 변수를 만들때 var를 빼먹지 않도록 조심하자.

"use strict" : 코드 제일 상단에 기재

​			깐깐하게 문제점을 잡아서 알려준다.

사용은 때에 따라 다르고 취향 따라 다르다.

코드를 좀 더 깔끔하게 작성하고 싶을때 검수를 한번더 자세히 하고 싶을때 use strict를 사용하면 

코드를 좀 더 깔끔하게 작성을 할 수 는 있지만 use strict가 잡아주는 것은 제한 적이라 사용하고 싶다면 이 제한을 찾아보고 사용하는 것이 좋다.



함수의 매개변수의 scope  = 지역변수

우선순위는 함수 실행결과과 먼저 출력된다.



const : 전역변수를 선언해서 값을 바꾸고 싶지 않을때

let : 선언을 두번 하지 못하도록 함,블록스코프라 하며, 함수/for문 안에서만 유효하다.



> 클로저

함수안에 함수를 사용하는 것

외부함수와 내부함수로 불리며, 내부함수는 보통 익명함수로 일회성으로 쓰인다.

```javascript
var outter=functon(){

  var i = 10;

  var d = 20;

  (function (x) {

    console.log(i);

    console.log(x);

  })(d);

  };

outter();

```



> hoisting(호이스팅)

변수의 값을 몰라도 그 변수가 있는지는 안다 (선언된 사실은안다)

선언만 미리 하는것

var 선언문 전에 변수를 사용해도 이미 선언된 것으로 간주한다.

```
var a;

console.log(a)//undefined / a가 선언되지 않은 상태로 콘솔하면 is not defined

var a = 10

console.log(a)//10

```



> 재귀

함수가 함수 안에서 자신을 다시 호출하는 것

```
var foo function() {
  foo();
}
```



- 재귀에는 반드시 종료조건이 필요하다★

스택에 재귀의 데이터가 쌓이기 때문

종료조건을 넣기 위해선 종료 시점을 알고 있어야 한다.

```javascript
//재귀(무한반복 됨)
var countdown = function(n) {
	for (var i = n; i >= 0; i--) {
		console.log(i);
	}
}
countdown(10);
```

```javascript
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
```

함수의 리턴은 함수를 빠져나오는것 (break같은거)

조건문에서의 리턴

루트에서만 break



문제1.

```javascript
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
```

```javascript
//문제1 재귀스럽게 다시
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
```



문제1.

```javascript
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
```

문제3.

```javascript
//재귀로 피보나치
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
```





> 애니메이션 

setInterval : 초단위로 함수 호출

clearInterval() : setInterval 정지

