// interface Person {
//   name: string;
//   age: number;
// }

// var seho: Person = {};
// var seho: Person = {
//   name: '세호',
//   age: 30,
// };

type Person = {
  name: string;
  age: number;
};

var seho: Person = {
  name: '세호',
  age: 30,
};

type Mystring = string;
var str: Mystring = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo({ todo: Todo }) {}
