/* 문제13 : 몇 번째 행성인가요?

우리 태양계를 이루고 있는 행성은 
수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다.
저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

**입출력**

입력 : 1
출력 : 수성
*/

// 풀이) index 값을 가진 '배열'의 형태에서 순서대로 뽑아내기

// 1단계) 배열을 만들고 수성을 출력해 보자.
let galaxy = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

document.write(galaxy[0]);

// 2단계) 입력값에 따라 행성을 출력하자.
let galaxy = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

function planet(i) {
  document.write(galaxy[i]);
}

// 3단계) 그런데 배열의 index는 0부터 시작이다...
// '1'을 입력하면 '수성'이 출력되어야 한다.
// 'i = 1' 일 때, 'index = 0'의 값을 반환해야 한다...!
let galaxy = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];

function planet(i) {
  document.write(galaxy[i - 1]);
}

// 번외) 함수를 이용하는 법 말고 prompt를 활용하는 방법.
let galaxy = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
let count = prompt('몇 번째 행성입니까?');

document.write(galaxy[count - 1]);





/* 문제14 : 3의 배수 인가요?
영희는 친구와 게임을 하고 있습니다.
서로 돌아가며 랜덤으로 숫자를 하나 말하고,
그게 3의 배수이면 박수를 치고,
아니면 그 숫자를 그대로 말하는 게임입니다.
입력으로 랜덤한 숫자 n이 주어집니다.
만약 그 수가 **3의 배수라면 '짝'이라는 글자를,
3의 배수가 아니라면 n을 그대로 출력**해 주세요.

**입출력**
입력 : 3
출력 : 짝

입력 : 2
출력 : 2
*/

// 풀이) 조건문(if ~ else)
// 1단계) 3의 배수 찾기
(n % 3) == 0;
// 2단계) '만약 3이면 '짝'을 출력'하는 조건 만들기
let count = 3

if((count % 3) == 0) {
  console.log('짝');
}
// 3단계) '그렇지 않다면 그대로 출력'하는 조건 만들기
let count = 2

if((count % 3) == 0) {
  console.log('짝');
} else {
  console.log(count);
}
// 4단계) 입력 가능한 'count'값 구조 잡기.
let count = prompt('어떤 값을 출력할까?!');

if((count % 3) == 0) {
  console.log('짝');
} else {
  console.log(count);
}





/* 문제15 : 자기소개
신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.
만약 입력으로 `김다정`이라는 이름이 주어지면 "안녕하세요.
저는 김다정입니다."라고 출력하게 해주세요.

**입출력**
입력 : 김다정
출력 : 안녕하세요. 저는 김다정입니다.
*/

// 풀이) 템플릿 리터럴
// 1단계) 변수를 선언하고 앞 뒤 문자열을 붙인다.
let yourName = prompt('이름을 입력해주세요');

document.write('안녕하세요. 저는 ' + yourName + '입니다.');
// 2단계) ``과 ${}를 이용
let yourName = prompt('이름을 입력해주세요');

document.write(`안녕하세요. 저는 ${yourName}입니다.`);