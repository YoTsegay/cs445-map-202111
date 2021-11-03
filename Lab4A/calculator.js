let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum = document.getElementById("sum");
let addButton = document.getElementById("add");
addButton.addEventListener("click", function () {
    sum.setAttribute("value", (parseFloat(num1.value) +
        parseFloat(num2.value)).toString());
});
