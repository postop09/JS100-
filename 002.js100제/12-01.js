// 문제 1: 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
let nums = [100, 200, 300, 400, 500];


// 방법 1: .pop()으로 하나씩 삭제
nums.pop();
nums.pop();
num

// 방법 2: .splice(startIndex, 제거할 요소 개수, 대입할 요소, ...)로 범위 지정하여 삭제
nums.splice(3, 2);
nums
// 이것을 이용해 [100, 200, 300]만 뽑아낸 값을 변수로 선언할 수도 있겠다.
let numSplice = nums.splice(0, 3);

// 방법 3: .slice(startIndex, endIndex) 'endIndex'를 미포함한 범위를 지정하여 뽑아냄
// nums의 값으로 바로 할당되는 것이 아니고, 뽑아낸 배열을 보여줌.
nums.slice(3,5);
nums // 값은 그대로 [100, 200, 300, 400, 500]
// 그러므로, 400, 500 값이 삭제된 배열을 만드는 것이 적당하겠다.
let numSlice = nums.slice(0,3);






//문제 2: 배열의 내장함수
//<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.


//**데이터**
var arr = [200, 100, 300];
//pass
console.log(arr);

//**출력**
[200, 100, 10000, 300]

// 방법 1: .splice

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);






// 문제 3: 변수의 타입
//다음 출력 값으로 올바른 것은?


let arr = [100, 200, 300];
console.log(typeof(arr));


// 1)  undefined
// 2)  string
// 3)  number
// 4)  object