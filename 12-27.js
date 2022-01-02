// 문제39 : 오타 수정하기
// 혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다.
// 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자
// 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 
// 그런데 막상 보여주려니 긴장이 되서
// 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
// 혜원이는 프로그램을 돌려 재빠르게
// 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

// 입출력
// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// 풀이
const word = prompt('영어를 입력해주세요');

console.log(word.replace(/q/g, 'e'));



// 문제40 : 놀이동산에 가자
// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다.
// 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만
// 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

// 원범이와 친구들이 총 몇 명 탈 수 있는지
// 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고
// 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다.
// 몸무게는 무작위로 주어집니다.

// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// 출력
// 2

// 풀이
const limit = parseInt(prompt('제한 무게'));
const people = parseInt(prompt('탑승 인원'));
let result = 0;
let count = 0;

for (let i = 1; i < people; i++) {
  result += parseInt(prompt('탑승 인원 몸무게'));
  if(result <= limit) {
    count = i; // count에 i값 저장
  }
}
console.log(count);



// 문제41 : 소수판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// 풀이
// 1단계) 나머지가 안 남는 값 찾기
const number = prompt('소수일까요?');

function output() {
  for (let i = 1; i <= number; i++) {
    if(number % i == 0) {
      console.log(i);
    }
  }
}

// 2단계) 배열로 저장하기
const number = prompt('소수일까요?');

function output() {
  let array = [];
  for (let i = 1; i <= number; i++) {
    if(number % i == 0) {
      array.push(i);
    }
  }
  console.log(array);
}
output()

// 3단계) 배열이 2개 이하면 소수인 조건 만들기
const number = prompt('소수일까요?');

function output() {
  let array = [];

  for (let i = 1; i <= number; i++) {
    if(number % i == 0) {
      array.push(i);
    }
  }
  console.log(array);
  if(array.length <= 2) {
    console.log('YES');
  } else {
    console.log('NO!');
  }
}
output()

// 4단계) 실패하면 재도전
function output() {
  const number = prompt('소수일까요?');
  let array = [];

  for (let i = 1; i <= number; i++) {
    if(number % i == 0) {
      array.push(i);
    }
  }
  console.log(array);
  if(array.length <= 2) {
    console.log('YES');
  } else {
    console.log('NO!');
    return output();
  }
}
output()