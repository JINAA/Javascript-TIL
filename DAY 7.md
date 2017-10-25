**DAY 7.**

> **배열정렬하기**

문제1.

```javascript
//배열을 만들고 1-100까지의 임의의 정수를 20개 넣습니다.
var arr = [];

for(var i = 1; i <= 20; i++) {
	var randomNum = Math.floor(Math.random() * 100) + 1;
	arr.push(randomNum);
}
console.log(arr);
```

문제2.

```javascript
//배열에서 최대값과 최소값을 뽑는 함수 myMin(), myMax() 구현해 봅시다.
var temp = arr[0];

var myMin = function(arr) {
	for(var i = 1; i < arr.length; i++) {
		if (arr[i] < temp) {
			temp = arr[i];
		}
	}
}
myMin(arr);
console.log(temp);

var myMax = function(arr) {
	for(var i = 1; i < arr.length; i++) {
		if (arr[i] > temp) {
		temp = arr[i];
		}
	}
}
myMax(arr);
console.log(temp);
```

문제3.

```javascript
//배열의 주어진 위치의 원소를 교체하는 mySwap()을 구현해 봅시다.
//var mySwap = function(arr, idx1, idx2) {
//...
//}
var mySwap = function(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}
mySwap(arr,0,1);
console.log(arr);
```

문제4.

```javascript
//이 배열을 정렬합니다. 직접 구현
//MySort(arr) - 버블정렬
var mySort = function(arr) {
	for(var i = 1; i < arr.length; i++) {
		for(var j = 0; j < arr.length-i; j++) {
			if(arr[j] > arr[j+1]) {
              var temp = arr[j];
              var save = arr[j+1];
              arr[j] = save;
              arr[j+1] = temp;
			} 
		}
	
	}
}
mySort(arr);
console.log(arr);
```

문제5.

```javascript
//Array.sort() 를 사용해서 내림차순 정렬을 해 봅시다.
var mySortDes = function(a,b) {
	if (a > b){
		return -1;
	} else if (a < b) {
		return 1;
	} else {
		return 0;
	}
}
arr.sort(mySortDes);
console.log(arr);
```



> **비동기적 입출력**

node.js file system의 ReadFileSync 사용해보기

```javascript
//아래와 같은 text.txt 파일을 생성
5
6
7
8

//text.txt 파일의 숫자들의 총 합을 구하는 FileReadSync.js 생성
var fs = require('fs');

var data = fs.readFileSync('text.txt','utf8');

var arr = data.split("\n");
var sum = 0;
for(var i = 0; i < arr.length - 1; i++) {
	var n = parseInt(arr[i]);
	
	if(!!n) {
		sum += n;
	} else {
		console.log("err" + n);
	}

}
console.log(sum);
console.log("End...");
```



> **git**

sourcetree 에서 commit, push가 자꾸만 실패한다...

결국 터미널에서 하는게 깔끔하고 직관적인것 같아 보이기 시작했...ㅜ



#####commit할 파일이 하나일때.

1. git저장소로 들어간다.
2. git status 로 현재 commit할 파일을 확인한다.
3. git add . 으로 stage에 올린다.
4. git commit -m "_commit message_" 
5. git push origin master
6. github password 입력하면 업로드 완료!
