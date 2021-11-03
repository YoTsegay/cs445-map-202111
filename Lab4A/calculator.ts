const num1: HTMLElement | null = document.getElementById("num1");
const num2: HTMLElement | null = document.getElementById("num2");
const sum: HTMLElement | null = document.getElementById("sum");
const addButton: HTMLElement | null = document.getElementById("add");

addButton.addEventListener("click", function() {
    sum.setAttribute("value",
        (parseFloat((<HTMLInputElement>num1).value) + 
        parseFloat((<HTMLInputElement>num2).value)).toString()
    );
});