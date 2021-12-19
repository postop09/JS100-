// 문제 7: 변수명
// 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

// 답) 3, 5
// 풀이) 'let'은 이미 JavaScript에 존재하는 '예약어'이며, 숫자는 맨 앞에 올 수 없다.
// 변수명은 문자, 밑줄(_), 달러($)으로만 시작해야 한다.





//문제 8: 객체의 키 이름 중복
// 자바스크립트 객체를 다음과 같이 만들었다. 
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

// 답) 84
// 풀이) 키가 중복되었을 경우, 마지막 키의 값을 가져온다.

// 객체를 출력하는 두 가지 방법이 있다. 
// 첫 번째, 대괄호를 이용한 출력
// console.log(d['weight']); 대괄호 안에 [' '] 따옴표 사용에 주의하자.

// 두 번재, 점(.) 연산자를 이용한 출력
// console.log(d.weight); 객체의 키 이름을 . 뒤에 붙여준다.





// 문제 9: concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// **데이터**
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
var result = // 빈칸을 채워주세요

console.log(result);

// **출력**
// 2019/04/26 11:34:27

// 풀이)
var result = year.concat('/' + month).concat('/' + day).concat(' ' + hour).concat(':' + minute).concat(':' + second);
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
var result = year.concat('/' + month, '/' + day, ' ' + hour, ':' + minute, ':' + second);
var result = year.concat('/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second);