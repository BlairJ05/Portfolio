document.addEventListener("DOMContentLoaded", function () {

    function changeBackgroundColor() {
        const background = document.querySelector(".background");
        background.classList.toggle('white') 
    }

    const changeColorButton = document.querySelector("#changeColorButton");
    
    changeColorButton.addEventListener("click", changeBackgroundColor);
    console.log("Button clicked");

});