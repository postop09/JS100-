// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

// 풀이)
// 1단계) split(''): 문자열(String)을 각각의 문자열로 나누어 배열로 변환시킨다.
let string = '거꾸로'.split('');

console.log(string);
// 2단계) reverse(): 배열을 뒤집어 준다.
let string = '거꾸로'.split('');
let reversedStr = string.reverse();

console.log(reversedStr);
// 3단계) join(): 배열을 다시 문자열로 만들어 줘야한다.
// 배열의 모든 요소를 연결해준다.
let string = '거꾸로'.split('');
let reversedStr = string.reverse();
let reversedStrJoin = reversedStr.join('');

console.log(reversedStrJoin);
// 4단계) 입력하는 값에 따라 변화하는 츌력값!
let youWant = prompt('어떤것이든 적어보세요')
let string = youWant.split('');
let reversedStr = string.reverse();
let reversedStrJoin = reversedStr.join('');

console.log(reversedStrJoin);





// 문제17 : 놀이기구 키 제한
// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

// 풀이)
let height = prompt('입장자의 키를 입력해주세요')

if(height >= 150) {
  console.log('YES')
} else {
  console.log('NO');
}





// 문제18 : 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다.
// 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면
// 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

// 입출력

// 입력 : 20 30 40
// 출력 : 30

// 풀이)
// 1단계) 평균값을 출력하는 가장 단순한 방법...
let sum = 0

function average(국어, 수학, 영어) {
  sum = (국어 + 수학 + 영어);
  console.log(sum / 3);
}
// 2단계) 공백으로 구분했을 때를 생각하자.
// '국어 수학 영어'를 split(' ')을 이용해 공백으로 구분함.
let subject = '20 30 40'.split(' ');
// 합계가 출력될 것을 선언
let sum = 0;
// 평균을 구하는 공식을 선언
let subAverage = (sum / subject.length);

// 3단계) 문자열을 숫자열로 변환시켜야 한다.
let subject = '20 30 40'.split(' '); // 문제는 이 친구가 '문자열'
let sum = 0;
let subAverage = (sum / subject.length);

for (let i = 0; i < subject.length; i++) {
  let numSubject = parseInt(subject[i], 10);
  sum += numSubject;
}

// 4단계) 평균값 뽑아내기
let subject = '20 30 40'.split(' '); // 문제는 이 친구가 '문자열'
let sum = 0;

for (let i = 0; i < subject.length; i++) {
  let numSubject = parseInt(subject[i], 10);
  sum += numSubject;
}

let subAverage = (sum / subject.length);
console.log(subAverage);

// 4-1번외) 의문점: subAverage의 선언 위치에 따라 값이 출력이 안된다..?
let subject = '20 30 40'.split(' ');
let sum = 0;
let subAverage = (sum / subject.length);

for (let i = 0; i < subject.length; i++) {
  let numSubject = parseInt(subject[i], 10);
  sum += numSubject;
}

console.log(subAverage);

// 5단계) 평균의 소수점 값이 나온다면 버림!
let subject = '20 30 50'.split(' ');
let sum = 0;

for (let i = 0; i < subject.length; i++) {
  let numSubject = parseInt(subject[i], 10);
  sum += numSubject;
}

let subAverage = (sum / subject.length);
console.log(Math.floor(subAverage));

// 6단계) 자유로운 입력값!
let subject = prompt('국어 수학 영어 순으로 점수를 입력해주세요.').split(' ');
let sum = 0;

for (let i = 0; i < subject.length; i++) {
  let numSubject = parseInt(subject[i], 10);
  sum += numSubject;
}

let subAverage = (sum / subject.length);
console.log(Math.floor(subAverage));