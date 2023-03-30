let btns = document.querySelectorAll(".btn");

let display = document.querySelector(".display");
console.log(display);

let clear = document.querySelector(".btnClr");
let del = document.querySelector(".btnDlt");

let equal = document.querySelector(".btnEql");

console.log(display.value);

for (const key of btns) {
  key.addEventListener("click", () => {
    display.value += key.value;
  });
}

equal.addEventListener("click", () => {
  display.value = eval(display.value);
});

clear.addEventListener("click", () => {
  display.value = "";
});

del.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
