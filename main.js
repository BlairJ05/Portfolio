document.addEventListener("DOMContentLoaded", function () {
    function changeBackgroundColor() {
        const background = document.querySelector(".background");
        background.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; 
    }

    const changeColorButton = document.querySelector("#changeColorButton");
    changeColorButton.addEventListener("click", changeBackgroundColor);
});