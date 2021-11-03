const img1: HTMLElement | null = document.getElementById("img1");
const img2: HTMLElement | null = document.getElementById("img2");

const swapButton: HTMLElement | null = document.getElementById("swap");

swapButton.addEventListener("click", function() {
    let tmp: string = img2.getAttribute("src");
    img2.setAttribute("src", img1.getAttribute("src"));
    img1.setAttribute("src", tmp);
});


