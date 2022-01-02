// 문제19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면,
// 'a의 b승'을 구하는 프로그램을 작성하세요.

// 풀이)
// 1단계) 주어지는 값 배열로 만들기.
let value = prompt('a b(a의 b승 값을 입력하세요)').split(' ');
console.log(value);
// 2단계) 'a의 b승' 공식 만들기.
let value = prompt('a b(a의 b승 값을 입력하세요)').split(' ');
let result = a ** b
// 3단계) 배열의[첫 번째 값], 배열의[두 번째 값] 임을 생각하기!
let value = prompt('a b(a의 b승 값을 입력하세요)').split(' ');
let result = value[0] ** value[1]
console.log(result);
// 답)
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));




// 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때,
// 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// **입출력**
// 입력 : 10 2
// 출력 : 5 0

// 풀이) 
// 1단계) 공백으로 구분하는 입력값 만들기
let value = prompt('a b(a를 b로 나누는 값을 입력하세요)').split(' ');
console.log(value);
// 2단계) 나머지를 출력하는 공식 만들기
let value = prompt('a b(a를 b로 나누는 값을 입력하세요)').split(' ');
let remainder = value[0] % value[1];
console.log(remainder);
// 3단계) 몫을 출력하는 공식 만들기
let value = prompt('a b(a를 b로 나누는 값을 입력하세요)').split(' ');
let quotient = Math.floor(value[0] / value[1]);
console.log(quotient);
// 4단계) '몫' '나머지'를 출력하는 공식 만들기
let value = prompt('a b(a를 b로 나누는 값을 입력하세요)').split(' ');
let quotient = Math.floor(value[0] / value[1]);
let remainder = value[0] % value[1];

document.write(`${quotient} ${remainder}`);
// 답)
let value = prompt('a b(a를 b로 나누는 값을 입력하세요)').split(' ');
let quotient = Math.floor(parseInt(value[0]) / parseInt(value[1]));
let remainder = parseInt(value[0]) % parseInt(value[1]);

document.write(`${quotient} ${remainder}`);





// 문제21 : set은 어떻게 만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
// 5)  var x = new Set();

// 답) 3, 5