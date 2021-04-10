//숫자형 이넘
//숫자는 값이 지정되지 않으면 0부터 증가
//만약 숫자를 첫번째값을 10이고..나머지를 지정하지 않으면 10부터 증가한다.
//즉 10, 11, 12로 지정된다.
enum Shoes {
  Nike,
  Adidas,
  Sth,
}

var myShoes = Shoes.Nike;
console.log(myShoes); //출력) 0

//문자열 이넘
enum ShoesStr {
  Nike = '나이키',
  Adidas = '아디다스',
}
var myShoe = ShoesStr.Nike;
console.log(myShoe); //출력) 나이키
