//변수를 활용한 인터페이스
var seho = {
  age: 33,
  name: '세호',
};
//함수에 인터페이스 활용
function getUser(user) {
  console.log(user);
}
var capt = {
  age: 36,
  name: '캡틴',
};
getUser(capt);
var sum;
sum = function (a, b) {
  return a + b;
};
