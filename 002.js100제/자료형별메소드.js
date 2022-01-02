/* 

문자(string)
charAt(index): 지정된 index값의 문자 찾기

indexOf(string): 지정된 문자의 위치를 왼쪽부터 찾기

lastIndexOf(string): 지정된 문자의 위치를 오른쪽부터 찾기

substring(index1, index2): 지정된 위치에 있는 문자열 리턴

toLowerCase(): 소문자로 변환

toUpperCase(): 대문자로 변환

concat(string): 두 문자열을 합치기

slice(start_index, end_index): 문자열의 일부를 추출

split([분리자]): 문자열을 분리해내고, 배열로 만들어 줌

substr(start_index, length): 문자열을 length만큼 잘라내기

replace('before', 'after'): 일부 또는 모든 부분이 교체된 새로운 문자열을 반환

match(/[a-e]/g): 문자열이 매치되는 부분을 검색하여 일치하는 값을 배열로 반환

search(/a/g): 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 를 반환

valueOf(): toString()과 같다. 본래의 값을 출력함.


****************숫자(number)************************************
parseInt(string): 문자열에 포함된 숫자 부분을 정수로 출력

isFinite(number): 정상적인 유한수가 맞는지 검사하여, '불리언'값으로 출력

isInteger(number): 정수임을 검사하여, '불리언'값으로 출력

isNaN(number): NaN임을 검사하여, '불리언'값으로 출력

isSafeInteger(number): 안전한 정수{-(253 ~ 1) || 253 ~ 1 사이의 값}를 검사하여, '불리언'값으로 출력

prototype.toFixed(number): 소숫점자리를 반올림하여, '문자(string)'값으로 출력

prototype.toPrecision(number): 지정된 자리까지 나머지 소수점자리를 반올림하여, '문자(string)'값으로 출력

prototype.toString(number): 숫자열(number)을 문자열(string)로 출력


**************************배열(array)******************************
pop(): 배열 뒷부분의 값을 삭제

push(): 배열 뒷부분에 값을 삽입

unshift(): 배열 앞부분에 값을 삽입

shift(): 배열 앞부분의 값을 삭제

splice(index, 제거할 요소 개수, 배열에 추가될 요소): 배열의 특정위치에 요소를 추가하거나 삭제

slice(startIndex, endIndex): 배열의 startIndex부터 endIndex전까지(endIndex 미포함) 새로운 배열 객체로 반환

concat(array): 다수의 배열을 합치고 병합된 배열의 사본을 반환

every: 배열의 모든 요소가 제공한 함수로 구현된 테스트를 통과하는지를 테스트

some: 지정된 함수의 결과가 true일 때까지 배열의 각 원소를 반복

forEach: 배열의 각 원소별로 지정된 함수를 실행한다.

map: 배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환한다.

filter: 지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환한다.

reverse: 배열의 원소 순서를 거꾸로 바꾼다.

sort: 모든 원소를 문자열로 취급해 사전식 정렬

toString: 배열을 문자열로 바꾸어 반환한다

valueOf: toString과 비슷, 그러나 배열을 반환

join: 배열 원소 전부를 하나의 문자열로 합친다.


**************************객체(Object)*******************************
entries(obj): [key, value] 쌍에 해당하는 배열을 반환

keys(obj): [key, value] 쌍에서 [key]를 문자열 배열로 반환

values(obj): [key, value] 쌍에서 [value]를 배열로 반환

freeze(obj): 객체를 동결시킨다. 동결된 객체는 더 이상 변경될 수 없다.
*/