// 문제31 : 자바스크립트 자료형의 복잡도
// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

// 1)  arr[i]
// 2)  arr.push(5)
// 3)  arr.slice()
// 4)  arr.pop()
// 5)  arr.includes(5)

// 풀이)
// '빅 오 1', 0(1)에서 1은 단계수를 나타낸다. 즉, 컴퓨터가 연산에 한 단계만을 거치는 것을
// 찾아내는 문제다.


// 문제32 : 문자열 만들기
// 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다.
// 열심히 자기소개서를 작성하던 도중
// 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 
// 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

// **입출력**

// 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
// 출력 : 5

// 풀이)
let input = prompt('글을 쓰면 단어수를 알려줍니다.').split(' ');

console.log(input.length);



// 문제33 : 거꾸로 출력하기
//한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// **입출력**

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// 풀이) 'reverse()' : 배열을 뒤집어 준다.
let number = prompt('1 2 3 과 같이 숫자를 입력해주세요').split(' ');

console.log(number.reverse())

