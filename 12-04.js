/*
문제10 : 별 찍기
크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 
**은비를 위해 프로그램을 작성해 주세요.**
**입력**
5
**출력**
    *
   ***
  *****
 *******
*********
*/

// 풀이)
// 1단계: 별을 다섯번, 세로로 출력
for (let 기준 = 1; 기준 <= 5; 기준++) {
  document.write('*');
  document.write('<br>');
}

// 2단계: 단계별로 증가하는 별을 출력
for (let 기준 = 1; 기준 <= 5; 기준++) {
  for (let 별 = 1; 별 <= 기준; 별++) {
    document.write('*')
  }
  document.write('<br>');
} // '1,2,3,4,5'개의 별들이 출력 되었다.

// 3단계: 기존 값에 2배수(2,4,6,8,10)에서 1을 뺀다.
for (let 기준 = 1; 기준 <= 5; 기준++) {
  for (let 별 = 1; 별 <= 기준*2 -1; 별++) {
    document.write('*')
  }
  document.write('<br>');
} // '1,3,5,7,9' 가 완성되었다!!

// 4단계: 별의 앞에 공백이 들어가야 한다.
for (let 기준 = 1; 기준 <= 5; 기준++) {
  for (let 공백 = 1; 공백 <= 5; 공백++) {
    document.write('&nbsp;'); // 공백 표현코드
  }
  for (let 별 = 1; 별 <= 기준*2 -1; 별++) {
    document.write('*');
  }
  document.write('<br>');
}

// 5단계: 하나씩 감소하는 공백을 만들자!
for (let 기준 = 1; 기준 <= 5; 기준++) {
  for (let 공백 = 1; 공백 <= 기준; 공백++) { // 이랬을 때는 하나씩 증가하는 공백값임.
    document.write('&nbsp;');
  }
  for (let 별 = 1; 별 <= 기준*2 -1; 별++) {
    document.write('*');
  }
  document.write('<br>');
}
// 기준이 증가할수록 공백은 줄어들어야 한다!!
// '공백 <= 5 - 기준' ?!! 이렇게 하면 기준이 증가할 수록 공백은 줄어든다.
for (let 기준 = 1; 기준 <= 5; 기준++) {
  for (let 공백 = 1; 공백 <= 5 -기준; 공백++) {
    document.write('&nbsp;');
  }
  for (let 별 = 1; 별 <= 기준*2 -1; 별++) {
    document.write('*');
  }
  document.write('<br>');
}

// 6단계: 입력값에 따라 바뀔 수 있다! 문제의 입력값은 5!
let 입력 = 5 // 변수로 선언하자. 재사용성!

for (let 기준 = 1; 기준 <= 입력; 기준++) { //조건 또한 '입력' 변수를 이용!
  for (let 공백 = 1; 공백 <= 입력 -기준; 공백++) {
    document.write('&nbsp;');
  }
  for (let 별 = 1; 별 <= 기준*2 -1; 별++) {
    document.write('*');
  }
  document.write('<br>');
}



const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);






/*문제 11: for를 이용한 기본 활용
1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.
*/

let s = 0;
//pass
console.log(s);

//풀이)
for (let i = 0; i < 101; i++) {
  s += i; // s = s + i
}
console.log(s);
// 첫 번째 조건은 1부터 100까지 하나씩 증가한다.
// 두 번째 조건은 s에 값이 축적되어야 한다.






/* 문제12: 게임 캐릭터 클래스 만들기
다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
주어진 소스 코드를 수정해선 안됩니다.
*/
//**데이터**
//<여기에 class를 작성하세요.>

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

//**출력**
//545 210 10
//파이어볼

// 풀이)

// 우선 클래스를 선언하는게 무엇인지 알아야 한다.
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();