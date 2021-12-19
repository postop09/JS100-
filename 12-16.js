// 문제34 : sort 구현하기
// 민주는 체육부장으로 체육시간이 되면
// 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
// 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 
// 민주를 위해 키가 주어지면 
// 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// **입출력**
// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

// 풀이)
// sort() : 유니코드식 정렬 (사전식 정렬)
// sort(function(a, b) {})의 값이 0보다 작을 경우 a를 b보다 낮은 것으로 인식한다.
// 그러므로 a와 b중 a가 앞으로 오게된다.

// 1단계) 정렬된 값과 정렬되지 않은 값
let height = prompt('친구들의 키를 입력해주세요').split(' ');
let sorted = height.sort();
// 2단계) 입력된 값이 정렬되어 있는지 확인해야 한다.(유니코드식x)
let height = prompt('친구들의 키를 입력해주세요').split(' ');
let sorted = height.sort(function(a, b) {
  return a - b
});

if(height == sorted) {
  console.log('YES');
} else {
  console.log('NO');
}
// 3단계) 원본 배열을 수정시킨다. 복사본이 만들어지지 않는다.
// 비교가 안되는 문제가 발생
let height = prompt('친구들의 키를 입력해주세요').split(' ');
let unsorted = height.slice(0);
let sorted = unsorted.sort(function(a, b) {
  return a - b
});

if(height == sorted) {
  console.log('YES');
} else {
  console.log('NO');
}
// 4단계) 문자열로 만들어서 비교 연산자를 사용하자
let height = prompt('친구들의 키를 입력해주세요');
let unsorted = height.split(' ').slice(0);
let sorted = unsorted.sort(function(a, b) {
  return a - b
}).join(' ');

if(height == sorted) {
  console.log('YES');
} else {
  console.log('NO');
}


// 문제35 : Factory 함수 사용하기
// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 
// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n){
    function two(){
        //pass
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

// 풀이) Math.pow(base, exponent) : base의 exponent곱
function one(n){
  function two(base){
    let value = Math.pow(base, n);
    return value;
  }
  return two;
}
// 몇 제곱을 할지 정의
const a = one(2);
const b = one(3);
const c = one(4);
// base에 넣을 값을 정의
console.log(a(10));
console.log(b(10));
console.log(c(10));





// 문제36 : 구구단 출력하기
// 1~9까지의 숫자 중 하나를 입력하면
// 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// **입출력**
// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

// 풀이)
// 1단계) 입력값을 기준으로 1 ~ 9까지 곱하는 공식
let num = prompt('1 ~ 9 사이의 수를 입력해 주세요. 구구단을 출력해줍니다.');

for (let i = 1; i < 10; i++) {
  console.log(num * i);
}
// 2단계) 한 줄에 출력되게
let num = prompt('1 ~ 9 사이의 수를 입력해 주세요. 구구단을 출력해줍니다.');
let line = '';

for (let i = 1; i < 10; i++) {
  line = line + (num * i) + ' ';
}
console.log(line);
// 번외)
let num = prompt('1 ~ 9 사이의 수를 입력해 주세요. 구구단을 출력해줍니다.');

for (let i = 1; i < 10; i++) {
  document.write(num * i);
  document.write(' ');
}
