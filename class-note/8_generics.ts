// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('하이');
// logText(true);

/*
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

//T로 제네릭을 선언하게 되면
//함수를 호출하는 시점에 타입을 넘겨서 처리할 수 있다.
logText<string>('하이');
*/

/*
function logText(text) {
  console.log(text);
  return text;
}
//타입을 별도로 지정하지 않았기 때문에
//기본으로 any 타입이 지정되고 이건 모든 타입을 받을 수 있다.
logText(10);
logText('하이');
logText(true);
*/

/*
function logText(text: string) {
  console.log(text);
  text.split('').reverse().join('');
  return text;
}

function logNumber(num: number): any {
  console.log(num);
  return num;
}

logText('하이');
const num = logNumber(10);
*/

/*
function logText(text: string | number) {
  console.log(text);
  text.split('').reverse().join('');
  return text;
}

logText('하이');
logText(10);
*/

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('하이');
str.split('');

const login = logText<boolean>(true);

//인터페이스에 제네릭 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {
//   value: 'abc',
//   selected: false,
// };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };

//제네릭의 타입 제한
/*
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(['hi', 'abc']);
*/

//제네릭의 타입 제한2 - 정의된 타입 이용하기
/*
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength(10);
logTextLength({ length: 10 });
*/

interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('a');
// logTextLength(10); number는 없으므로 에러 발생
logTextLength({ length: 10 });

//제네릭 타입 제한3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption('a');
getShoppingItemOption('name');
