
function add(a: number, b: number): number {
  return a + b;
}

var result = add(10, 20);
result.toLocaleString();

//문자열로 잘 못 입력된 경우도 다음처럼 출력하기 전에 에러가 발생된다.
// add(10, "20");
