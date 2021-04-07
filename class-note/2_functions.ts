
//함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

// sum(10, 20);


//함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

//js에서는 함수에 선언된 인자 이상으로 호출해도 됐지만,
//ts에서는 다음과 같이 "Expected 2 arguments, but got 5"라고 에러가 난다.
// sum(10, 20, 30, 40, 50);


//함수의 옵셔널(선택적) 파라미터
//파라미터에 물음표를 넣으면..옵셔널로 인식하여 호출 시 없어도 처리된다.
function log(a: string, b?: string) {

}
//이런식으로 인자가 상황에 따라 다르게 출력하고 싶다면
log('hello world');
log('hello world', 'abc');
