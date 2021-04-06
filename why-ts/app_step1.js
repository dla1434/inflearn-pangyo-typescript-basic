// api url
var url = "https://jsonplaceholder.typicode.com/users/1";
// var url = "https://jsonplaceholder.typicode.com/users/";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      // console.log(response);
      user = response.data;
      console.log("user", user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;

      //정상 처리 부분
      // address.innerText = user[0].address.street;

      //객체의 위치나 필드명을 잘 못 기입하여 에러 발생
      //[object Object] or undefined 같은 처리에서 type script가 필요하다
      //즉 코드에서 확인이 아닌 화면에 출력되야 에러가 발생된 것을 알 수 있다.
      // address.innerText = user[0].address;

      //타입스크립트로 처리 가능
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
