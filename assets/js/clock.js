const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); // Date를 불러오면 현재 날짜랑 시간을 가져오는 것
  const hours = String(date.getHours()).padStart(2, "0"); // String() -> 문자열로 형 변환
  const minutes = String(date.getMinutes()).padStart(2, "0"); // padStart(2, "0") -> 만약 문자열의 길이가 2보다 작으면 앞에 0을 채워줌
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = date.getDate();
  clock.innerText = `현재 시간 :  ${hours}:${minutes}`;
}

// setInterval(sayHello, 5000); // setInterval() 인터벌 설정
// setTimeout(sayHello, 5000); //setTimeout() sayHello 함수를 5초 뒤에 실행

getClock();
setInterval(getClock, 1000);
