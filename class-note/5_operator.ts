// function logMessage(value: string) {
//   console.log(value);
// }

// logMessage('hello');
//error) Argument of type 'number' is not assignable to parameter of type 'string'
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
  console.log(value);

  //any는 typeof에서도 any로 나오기 때문에 이렇게 처리를 할 수 없다.
  if (typeof value === 'number') {
    value.toLocaleString();
  } else if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeon_union(someone: Developer | Person) {
  someone.name;
  //Union Type을 정의되었기 때문에 Developer | Person 두 객체의 필드에 접근할 수 있다고 생각했는데 안된다.
  //실제로는 공통 속성만 접근할 수 있다.
  // 둘 중 하나에 따라 달라지는 필드이기 때문에 검증을 못한다.
  // someone.skill;
  // someone.age;
}
askSomeon_union({ name: '디벨로퍼', skill: '웹개발' });
askSomeon_union({ name: '디벨로퍼', age: 100 });

// var seho: string | number | boolean;
// var capt: string & number & boolean;

//askSomeon_union에서 필드에 접근하지 못한 문제를 &(인터섹션)을 통해서 해결 가능
//의미는 두 객체이 필드를 모두 사용하겠다는 의미
function askSomeon_intersection(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeon_intersection({ name: '디벨로퍼', skill: '웹개발', age: 100 });
