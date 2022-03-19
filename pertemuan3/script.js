// NOTE: DOM SELECTOR

// const paragraphID = document.getElementById("test-1"); //return 1 element;
// const paragraphClass = document.getElementsByClassName("test-2")[0]; //return htmlcollections / array;
// const paragraphByTagName = document.getElementsByTagName("p"); // return htmlcollections / array;
// const paragraphByQuerySelector = document.querySelector("p"); //return 1 element;
// const paragraphByQuerySelectorAll = document.querySelectorAll("p"); //return NodeList / array;

// paragraphID.innerText = "Saya rubah teksnya menggunakan Javascipt";
// console.log(paragraphByQuerySelectorAll);

// paragraphByQuerySelectorAll.forEach(function (paragraph) {
//     paragraph.textContent = "Saya rubah teksnya menggunakan Javascipt";
// });

// paragraphByQuerySelector.innerText = "Saya rubah teksnya menggunakan Javascipt";

// for (let i = 0; i < paragraphByTagName.length; i++) {
//     paragraphByTagName[i].textContent =
//         "Saya rubah teksnya menggunakan Javascipt";
// }

const button = document.getElementById("btn");

button.addEventListener("click", () => {
    button.innerText = "sudah di click";
});
