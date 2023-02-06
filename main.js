//! Arrayda m herfi ile biten sozleri cixardin.
//* method1
// let arr = prompt("enter words with spaces").toLowerCase().split(" ");
// function endsWithM() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].endsWith("m") == true) {
//       console.log(arr[i]);
//     }
//   }
// }
// endsWithM();

//* method2
// let arr = prompt("enter words with spaces").toLowerCase().split(" ");
// let endsWithM = arr.filter((item) => {
//   if (item.endsWith("m") === true);
//   return item;
// });
// console.log(endsWithM);

//! Arrayda sozde butun herfleri boyuk olub olmadigina baxin
// let a = prompt("enter words with space").split(" ");
// function checkUppercase() {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == a[i].toUpperCase()) {
//       console.log(`${a[i]}`);
//     }
//   }
// }
// checkUppercase();

//! Array icerisinde 0-9 kimi reqemler var, hansisa 1 reqem yoxdur onu tapin
// let a = prompt("enter numbers 0-9, except one of them")
//   .split(" ")
//   .sort(function (a, b) {
//     return a - b;
//   });
// function findAbsent() {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] != i) {
//       return console.log(`${i}`);
//     }
//   }
// }
// findAbsent();

//! Arrayda guzgu ededleri tapsin
// let a = prompt("enter numbers with spaces").split(" ");
// let polindrome = a.filter((item) => {
//   if (item == item.split("").reverse().join("")) return item;
// });
// console.log(polindrome);

//! Istifadeci 0 daxil edenedek ededleri arrayda goster (while)
// let a = [];
// function showTillZero() {
//   let i = 0;
//   while (true) {
//     a[i] = prompt("enter a number");
//     if (a[i] == 0) {
//       return console.log(`${a}`);
//     }
//     i++;
//   }
// }
// showTillZero();

//! Arrayin icindeki ededlerin cemi cutdurse --true, tekdirse --false ekrana gostersin
let a = prompt("enter numbers with space").split(" ");
let sum = 0;
function isSumEven() {
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  sum % 2 == 0 ? console.log(true) : console.log(false);
}
isSumEven();
