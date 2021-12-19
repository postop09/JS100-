// 문제25 : 원의 넓이를 구하세요
// 원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면
// 원의 넓이를 반환하는 함수를 만들어 주세요.

// 풀이)
// 1단계) 원의 넓이를 출력하는 공식만들기
function calc(n) {
  let circle = 0;
  console.log(circle = (n * n) * 3.14);
}
// 2단계) 값을 입력해서 다룰 수 있도록 만들자.
let n = prompt('원의 반지름을 입력해주세요.')

function calc(n) {
  let circle = 0;
  circle = (n * n) * 3.14;
}




// 문제26 : 행성 문제2
// 우리 태양계를 이루는 행성은
// 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은
// Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

//풀이) key와 value 쌍으로 이루어진 객체를 이용한다.
let object = {
  '수성': 'Mercury',
  '금성': 'Venus',
  '지구': 'Earth',
  '화성': 'Mars',
  '목성': 'Jupiter',
  '토성': 'Saturn',
  '천왕성': 'Uranus',
  '해왕성': 'Neptune'
}

let key = prompt('우리 태양계 행성의 이름을 적어주세요')

document.write(object[key]);




// 문제27 : 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
// 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 학생의 이름이 key이고
// value가 수학 점수인 객체를 출력해주세요.

// **입력**
// Yujin Hyewon
// 70 100
// **출력**
// {'Yujin': 70, 'Hyewon': 100}

// 풀이)
// 1단계) 객체의 key에 value를 입력하기
let keys = prompt('공백으로 나누어 이름 입력');
let values = prompt('공백으로 나누어 점수 입력');
let object = {};

object[keys] = values;
// 2단계) 공백 기준으로 나눠지는 입력
let keys = prompt('공백으로 나누어 이름 입력').split(' ');
let values = prompt('공백으로 나누어 점수 입력').split(' ');
let object = {};

object[keys] = values;
// 3단계) 
// 입력값은 배열의 형태로 저장되기 때문에, 순회하며 대입
let keys = prompt('공백으로 나누어 이름 입력').split(' ');
let values = prompt('공백으로 나누어 점수 입력').split(' ');
let object = {};

for (let i = 0; i < keys.length; i++) {
  object[keys[i]] = values[i];
}
// 4단계) 숫자인 점수만 받도록 재설계
let keys = prompt('공백으로 나누어 이름 입력').split(' ');
let values = prompt('공백으로 나누어 점수 입력').split(' ');
let object = {};

for (let i = 0; i < keys.length; i++) {
  object[keys[i]] = parseInt(values[i]);
}
console.log(object);