function sum(a, b) {
  return a + b;
}

//js에서는 함수에서 정의한 인자 개수를 초과해서 호출해도 에러가 발생되지는 않는다.
//함수에서 2개의 인자만 정의했으니...10, 20만 인식해서 30이 출력된다.
console.log(sum(10, 20, 30, 40, 50));
