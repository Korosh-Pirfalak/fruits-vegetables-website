// variable
const input = document.querySelectorAll(".numberInput");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

const max = 10;
const min = 1;

// اضافه کردن و کم کردن عدد اینپوت با مثتب و منفی
input.forEach((input, index) => {

  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");

    let value = Number(input.value);

    if (value > max) {
      input.value = max;
    }
  });

  plus[index].addEventListener("click", () => {
    let value = Number(input.value) || 0;

    if (value < max) {
      input.value = value + 1;
    }
  });

  minus[index].addEventListener("click", () => {
    let value = Number(input.value) || 0;

    if (value > min) {
      input.value = value - 1;
    }
  });

});
