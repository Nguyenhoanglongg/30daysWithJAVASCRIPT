let hr = document.querySelector("#hours");
let mn = document.querySelector("#min");
let sc = document.querySelector("#sec");

setInterval(() => {
  var day = new Date();
  var hh = day.getHours() * 30;
  var mm = day.getMinutes() * 6;
  var ss = day.getSeconds() * 6;
  console.log(mm);

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  //Digital Clock Code
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  var am = h >= 12 ? "PM" : "AM";
  //-------Extra---------
  // Convert 24Hrs Clock to 12Hrs Clock
  // if (h > 12) {
  //   h = h - 12;
  // }
  // Add Zero Before Single Digit Nimber
  // h = h < 10 ? "0" + h : h;
  // m = m < 10 ? "0" + m : m;
  // s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});
