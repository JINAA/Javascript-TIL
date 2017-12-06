DAY 12.

> 정규표현식

|   *사용*   | *의미*                                   |
| :------: | -------------------------------------- |
|  [cmf]   | c\|m\|f (or의 기능)                       |
|   z{3}   | z가 3개다 {개수를 의미}                        |
|    *     | 0개 이상(= {0})                           |
|    +     | 1개 이상(= {1})                           |
|  a{2,}   | a가 2개 이상                               |
|  [a-z]   | a~z의 모든 소문자 하나하나                       |
|    \w    | 숫자와 특수문자를 제외한 모든 문자                    |
|    \d    | 숫자                                     |
|  files?  | 물음표 뒤의 문자인 s가 0,1개다                    |
|    \?    | 물음표 문자 그 자체                            |
|    \s    | 공백 하나                                  |
| ^Mission | Misssion 앞에 공백이 없다, 맨 앞이다              |
|    $     | 맨 끝이다                                  |
|    ()    | 캡처 그룹 (이 부분을 변수로 뺄 수 있다), or을 쓸때는 괄호필수 |
|    g     | 전부를 의미                                 |
|    .     | 문자 하나                                  |

- 사용 예

```javascript
//핸드폰 번호 일부를 "*"로 바꾸기
//결과 : *******4444

//정규표현식 미사용
function hide_numbers(s){
	var arr = s.split("");
  for(var i = 0; i < arr.length - 4; i++){
  	arr[i] = '*';    
      }
  return arr.join("");
}


//정규표현식 사용1
function hide_numbers(s){

  var re = /(\d+)(\d{4})/
  var match = re.exec(s);
  var star = match[1].replace(/\d/g,'*');

  return star + match[2];
}


//정규표현식 사용2
function hide_numbers(s){
  
  return s.replace(/\d(?=\d{4})/g,'*');
                  
}

console.log("결과 : " + hide_numbers('01033334444'));
```