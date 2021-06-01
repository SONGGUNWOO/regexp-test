# 정규표현식(RegExp)

정규식, REgular Expression

문자열을 검색하고 대체하는데 사용 가능한 일종의 형식 언어 입니다.  
정규표현식은 크게 다음과 같은 역활을 수행합니다.  

1. 문자 검색
1. 문자 대체
1. 문자 추출

## 정규표현식 테스트 사이트 

+ https://regexr.com/

## 자바스크립트 정규식 생성 

 ## + 생성자 함수 방식!

 ```js
 new RegExp('표현', '옵션')
 new RegExp('[a-z]', 'gi')

```
 ## + 리터럴 방식

```js
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-56789
skw0616@naver.com
https://www.omdbapi.com/?apikey=3ac0ae57&s=frozen
The quick brown fow jumps over the lazy dog.
abbbbbccccccdddddd
`
```
## 메소드 

메소드 | 문법 | 설명
--|--|--|
test | `정규식.test(문자열) `| 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배얄(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)


플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치 (ignore case)
m | 여러 줄 일치(multi line)

m 문자 데이터 내의 줄바꿈이 되어있는 각각의 줄 마다 해석하겠다라는 뜻임. (그냥 줄바꿈이있는 문자데이터를 보는것?)

## 패턴(표현)

패턴 | 설명
  --|--
^ab | 줄(line) 시작에 있는 ab와 일치  
ab$ | 줄(line) 끝에 있는 ab와 일치  
. | 임의의 한 문자와 일치  
a&verbar;b | a 또는 b와 일치  
ab? | b가 없거나 b와 일치 
{3} | 3개 연속 일치  
{3,}| 3개 이상 연속 일치  
{3,5} | 3개 이상 5개 이하 연속 일치   
[abc]| a 또는 b 또는 c
[a-z]| a부터 z 사이의 문자 구간에 일치 (영어 소문자)
[A-Z]| A부터  Z 사이의 문자 구간에 일치(영어 대문자)
[0-9]| 0부터 9 사이의 문자 구간에 일치
[가-힣]| 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개의 문자 (Word, 대소영문 52개 + 숫자10개 +_) 에 일치
\b | 63개 문자에 일치하지 않는 문자 경계 (Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등 )에 일치
(?=) | 앞쪽 일치
(?<=) | 뒤쪽 일치
