DAY 7.

>공통저장소 Pull Request

(내가 합치는 곳이 기본, 브렌치명은 무조건 내 이름) 

1. 공통저장소 폴더에 올릴 파일 넣기
2. 터미널 사용 시 git checkout jina
3. 위치도 넣어둔 파일이 있는 위치로
4. git add, commit, push origin jina
5. 내가 포크한 공통저장소로(JINAA/level1-js)에서 pull Request
6. 메시지는 커밋한 내용을 알아볼 수 있도록 !



> 공통저장소 Pull Request 2

1. ```
   git checkout jina
   ```

2. 소스변경,add,commit

3. push 및 풀리퀘 시도

   -------------------------------------------------------------------

4. 풀리퀘 시도시 자동 머지가 안되면 

5. rebase honux와 내브렌치가 맞는 지 확인해주는 것

```
git merge honux/내 브렌치 이름(jina)
OR
git rebbase honux/내 브렌치 이름
```

6. push할 파일을 다시 편집(에디터로..)
7. 다시 add, commit
8. push

```
git push origin jina
```

9. 다시 풀뤼퀘



> 저장소 추가 등록하기

git 원본 저장소의 별명은 origin

- git clone시 자동 생성됨
- git remote -v로 확인 가능



(수동으로 할 때는

- git remote add

git remote add origin 내 저장소 링크

- 클론시에는 위 명령이 자동으로 실행 됨)



> 다른 저장소 추가하기

- git remote add 별명 링크

= git remote add honux http://~



- 저장소 업데이트

git fetch [origin]

git fetch honux



- 저장소 머지하기

git checkout master

git merge honux/jina

git push origin jina



> HTML 

- '.': class : 속성을 중첩해서 쓰고 싶을 때 쓰임
- '#': ID
- toggle : 껏다 켜졌다를 반복하는 스위치



- 클래스는 추상적인것 객체는 실제적인것

  (예, 인간이란 클래스 인간 객체 지나 인스턴스)



> 함수 작성 시

```javascript
function ab() {
  
}
=======================
var ab = function() {

};
//변수로 함수 작성시 마지막 닫는 괄호에 세미콜론!
```



