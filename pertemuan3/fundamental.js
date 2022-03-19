// var

// var name = "danbo";

// console.log(name);

// console.log(name);

// let name = "Danbo";

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

// const name = "dandi";
// name = "danbo";

// console.log(typeof "ini adalah string");
// console.log(typeof 12);
// console.log(typeof true, typeof false);
// console.log(typeof [1, "mhs", true]);
// console.log(typeof { key: 2 });
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(Symbol(23) === Symbol(23));

// let date = 99;
// let day = "";

// switch (date) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     default:
//         day = "Days";
//         break;
// }

// console.log(day);

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 6;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// const arr = [1, "mhs", true, 10, "contoh"];
// const string = "mahasiswa";

// for (const value of string) {
//     console.log(value);
// }

// const obj = {
//     nama: "dandi",
//     kelas: "PTIK A",
//     angkatan: 2017,
// };

// for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`);
// }

// NOTE: Function Declaration
// function myFunction() {
//     console.log("Hello JS");
// }

// NOTE: ANONYMOUS FUNCTION
// const myFunction = function () {
//     console.log("Hello JS");
// };

// NOTE: ARROW FUNCTION
// const myFunction = () => console.log("Hello JS");

// NOTE: Immediately Invoked Function Expression (IIFE)
// (function () {
//     console.log("Hello JS");
// })();

// NOTE: Parameter dan Argumen
// const myFunction = function (nama) {
//     console.log("Hello ", nama);
// };

// myFunction("sule");

// NOTE: RETURN
const myFunction = function (nama) {
    return `hello ${nama}`;
};

// const hello = myFunction("sule");
console.log(myFunction());
