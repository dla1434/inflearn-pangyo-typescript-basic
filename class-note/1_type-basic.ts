
//js 문자열 선언
// var str = 'hello';

//ts 문자열 선언
let str: string = 'hello';
let num: number = 10;

let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3]
let horoes: Array<string> = ['Capt', 'Thor']
//타입이 아닌 값이 들어가면 LINT에서 에러 발생 
// let horoes: Array<string> = ['Capt', 'Thor', 10]

//TS 튜플
// let address: string[] = ['gangnam', 'pangyo'];
//배열 위치마다 특정 타입을 받을 수도 있음
let address: [string, number] = ['gangnam', 100];

//TS 객체
let obj: object = {};

// let person: object = {
//   name: 'capt',
//   age: 100
// };
// PERSON 객체 형태가 위와 같다고 한다면 다음과 같이 객체 안의 필드 타입도 정의할 수 있다.
let person: { name: string, age: number } = {
  name: 'capt',
  age: 100
}

// TS 진위값
let show: boolean = true;
