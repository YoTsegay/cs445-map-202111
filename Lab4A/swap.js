var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var swapButton = document.getElementById("swap");
swapButton.addEventListener("click", function () {
    var tmp = img2.getAttribute("src");
    img2.setAttribute("src", img1.getAttribute("src"));
    img1.setAttribute("src", tmp);
});
