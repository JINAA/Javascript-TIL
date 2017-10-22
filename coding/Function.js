//섭씨 > 화씨
var cToF = function(c) {
  return (c * 1.8) + 32;
}
var cresult = cToF(20);
console.log(cresult);

//BMI 계산하기
var bmi = function (kg,height) {  
  var h = height / 100;
  return kg / (h * h);
}
var result = bmi(70,170);

console.log(result);

var floatCut = function() {
  return Math.round(result * 100) / 100;
}
var cut = floatCut();
console.log(cut);




