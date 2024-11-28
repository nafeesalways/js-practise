let onBtn = document.querySelector(".onBtn");
let bulb = document.querySelector(".bulb");

function turnOnLight() {
  bulb.src = "./images/on.png";
}

onBtn.addEventListener("click", turnOnLight);

let offBtn = document.querySelector(".offBtn");

function turnOffLight() {
  bulb.src = "./images/off.png";
}

offBtn.addEventListener("click", turnOffLight);

let incrementBtn = document.querySelector(".incrementBtn");
let input = document.querySelector(".counter input");

function addition() {
  let newValue = 1 + Number(input.value);
  input.value = newValue;
}

incrementBtn.addEventListener("click", addition);

let decrementBtn = document.querySelector(".counter .decrementBtn");

function subtract() {
  if (input.value > 1) {
    let newValue = Number(input.value) - 1;
    input.value = newValue;
  } else {
    alert("Min qty have to be 1");
  }
}

decrementBtn.addEventListener("click", subtract);

function valuePositive() {
  input.value = Math.abs(input.value);
}

input.addEventListener("keyup", valuePositive);

let eyeBtn = document.querySelector(".eyeBtn");
let passwordInput = document.querySelector(".password input");
function showHidePassword() {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    eyeBtn.innerHTML = '<i class="bi bi-eye"></i>';
  } else {
    passwordInput.type = "password";
    eyeBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
  }
}

eyeBtn.addEventListener("click", showHidePassword);
