DAY 5.

> DOM(Document Object Model)

자바스크립트를 이용해 웹페이지를 제어하기 위한 객체 모델



1. 자바스크립트를 이용해 p 엘리먼트의 내용을 hello.js로 바꾸기

- index.html

  ```html
  <!DOCTYPE html>
  <html lang = "ko">
  <head>
   <meta charset = "utf-8">
    // 모바일 환경에 맞춰 보기
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // css 적용하기
   <link rel="stylesheet" href="cs-style.css">
  </head>
  <body>
   <h1>연습해보기</h1>
   <div>div</div>
   <p id = "test">연습연습</p>
   <script src = "index.js"></script>
  </body>
  </html>
  ```

- index.js

```javascript
document.getElementById('test').innerHTML = "hello, js"
```

- cs-style.css

```html
body {
    background-color: lightblue;
}

h1 {
    color: white;
    text-align: center;
}

p {
    font-family: verdana;
    font-size: 20px;
}
```



2. NodePackageManager 설치

npm : 자바스크립트를 이용해 작성한 코드를 재사용과 공유를 쉽게 해준다

```
$ npm install http-server -g
```

nodepackagemager = npm

-g : 모든 사용자가 쓸수 있는 글로벌 옵션, 아무대서나 쓸수 있게 해준다.



3. index.html과 js 파일이 있는 디렉토리에서 node로 서버 띄우기(실행하기)

```html
http-server ./
```



4. 웹브라우저에 작성한 index.html 띄우기

웹브라우저 주소 창에 아래 내용 입력

```
localhost:8080
```

localhost:8080 (=127.0.0.1:8080)

내 컴퓨터의 8080포트로 부터 인터넷을 할거야란 의미. (서버도 클라이언트도 나)

즉, 내 컴퓨터가 가상의 서버(인터넷)를 만들어서 띄워준다.

default가 index.html이기 때문에 바로 웹페이지에 보여줌



5. 다른 사람도 볼 수 있도록 내 컴퓨터를 서버로 만들기

실행하려는 파일이 있는 디렉터리에서

```
http-server ./
```

입력하면 내 컴퓨터가 서버가 되어 다른 사람도 볼 수 있게 해준다



6. 도메인 연결

새로운 터미널을 실행하고 ngrok 파일이 있는 디렉토리에서

```
./ngrok http 8080
```



7. 확인

   http://cf4f10cf.ngrok.io

   위 와 같은 주소가 생성되고 내 서버가 종료 되기 전까지 다른 사람들과 공유할 수 있다.


