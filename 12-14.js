// 문제28 : 2-gram
// **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력으로 문자열이 주어지면 **2-gram**으로 출력하는 프로그램을 작성해 주세요.

// **입력**
// Javascript

// **출력**
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 풀이)
// 1단계)
// 10번째는 t와 undefined를 출력한다.
let js = 'JavaScript'
for(i = 0; i < js.length; i++) {
  console.log(`${js[i]} ${js[i+1]}`);
}
// 2단계)
let js = prompt('문자를 입력해주세요')
for(i = 1; i < js.length; i++) {
  console.log(`${js[i-1]} ${js[i]}`);
}





// 문제29 : 대문자만 지나가세요
// 진구는 영어 학원 아르바이트를 하고 있습니다.
// 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// 알파벳 하나만을 입력하고
// 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

// 풀이)
let word = prompt('알파벳 하나를 입력하세요')

if(word == word.toUpperCase()) {
  alert('YES');
} else {
  alert('NO');
}





// 문제30 : 문자열 속 문자 찾기
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다.
// 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

// **입력**
// pineapple is yummy
// apple

// **출력**
// 4

// 풀이)
// 1단계) 포함하는 문자 찾기
let text = 'pineapple is yummy';
let findtext = prompt('찾을 문자를 입력해주세요.');

console.log(text.indexOf(findtext));
// 2단계) 입력하고 찾기
let text = prompt('문자를 입력해주세요.')
let findtext = prompt('찾을 문자를 입력해주세요.');

console.log(text.indexOf(findtext));
