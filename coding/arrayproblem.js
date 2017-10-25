//배열을 만들고 1-100까지의 임의의 정수를 20개 넣습니다.
var arr = [];

for(var i = 1; i <= 20; i++) {
	var randomNum = Math.floor(Math.random() * 100) + 1;
	arr.push(randomNum);
}
console.log(arr);

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

