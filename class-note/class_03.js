function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new PermissionStatus('캡틴', 100);

class Person {
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30);
console.log(seho);
