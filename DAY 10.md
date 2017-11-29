DAY 10.

>알고리즘 공부 - 배열

1. map

```javascript
var arr = [2,4,6]
var arr2 = arr.map(function(n) {
  return n * n // arr = [4,16,36]
});
```

2. forEach

```javascript
//input[1]을 2341 로 만들기
var input = ['4','1432'];
var n = Number(input[0]);

var arr =[];
var stringArr = input[1].split(" ");

stringArr.forEach(function(n) {
   arr.unshift(Number(n)); 
});

var str =""
arr.forEach(function(n) {
    str += n + " ";
});

console.log(str);
```

3. 배열 열거방법

```javascript
var arr = [4,5,6];
var arr2 = [1,2,3];
arr.push(...arr2); // arr = [4,5,6,1,2,3];
```



> 질문하는 법

1. 5why 로 찬찬히 생각을 먼저 해본다
2. 검색
3. 스텍오버플로어에 질문시

- 제목을 잘 짓자 : 미해결 문제를 간결히
- 상황설명
- 코드와 스크린샷
- 어떤 언어인지
- 플렛폼 환경
- 운영체제 및 환경
- 사용 프로그램 스팩



> 프로젝트 호스팅

* 호스팅 시 매번 수동으로 갱신해줘야 한다.

1. project 저장소에서 호스팅할 프로젝트 파일들을 메인으로
2. html 파일만 이름을 index로
3. 터미널에서 브랜치를 gh-pages
4. master 브랜치와 merge
5. add,commit
6. git push -u origin ph-pages
7. 인터넷 주소창에 http://jinaa.github.io/project/