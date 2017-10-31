DAY 3.





> **터미널. 터득터득**

점점 터미널 사용이 익숙해지고 있다. 신난다 재미난다

cd 를 이용해 폴더 접근 시 폴더명의 대소문자를 구분할 필요가 없다.



> Markdown.터득터득

- 이미지 삽입하기

마크다운에서 github에 올릴 문서작성 시 이미지 파일의 위치를 어디에 둬야 할지 몰랐는데 git 자체에 이미지를 저장해 둘 폴더를 생성하여 관리하는게 가장 간편하다.



이미지 폴더를 push 하고 

![이미지 이름](./이미지 파일을 저장한 폴더명/파일명.확장자)

를 입력 하면 바로 해당 이미지가 삽입되는 것을 확인 할 수 있다.

이미지의 이름은 크게 중요하지 않은 것 같지만, 일단 이미지 파일명을 입력해 두는게 좋을거 같다!



> **htmltest(1~100사이의 숫자 맞추기 게임)  ver 2.**

- htmltestver2.js

  입력한 숫자가 맞춰야 하는 숫자보다 큰지 작은지 알려주기 UPDOWN

  continue와 break를 어떻게 써야 할지 감이 조금 잡히기 시작한다!

```javascript
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
```

- htmltestver2.html 

  디자인을 해서 좀 더 보기 좋게 만들어 보기.

  ​

  <head> 안에 <style>을 만들고 디자인을 한다 

  body : 실제 웹페이지에 구현했을 때 보이는 전체내용을 동일한 디자인을 적용한다.

  그 외 따로따로 적용하고 싶은 디자인이 있다면 나누어 구분한다.

  ​

  script의 텍스트를 따로 디자인 하는 방법은 어렵다...모르겠다...

  왼쪽에 여백을 주고 싶은데...어떻게 하는거지..

  ```html
  <!DOCTYPE html>
  <html lang = "ko">
  <html>
  <head>
  	<meta charset = "utf-8">
  <style> 
  	body {
  		text-align: center;
  	    background-color: MediumSeaGreen;
  	}
  	h1 {
  	    color: white;
  	}
  	p {
  	    color: white;
  	    font-family: verdana;
  	    font-size: 20px;
  	    text-decoration:underline;
  	}
  </style>
  </head>
  <body>
  	<h1>숫자 맞추기</h1>
  	<p id = "test">1~100 사이의 숫자 맞추기</p>
  	<script src = "htmltestver2.js"></script>
  </body>
  </html>
  ```

  ​

![htmltestver2](./img/htmltestver2.png)
