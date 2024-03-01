document.addEventListener("DOMContentLoaded", function () {
    function changeBackgroundColor() {
        const background = document.querySelector(".background");
        background.classList.toggle('white');
        
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
        
        // Change button text based on mode
        const buttonText = document.getElementById("darkmode");
        if (document.body.classList.contains('dark-mode')) {
            buttonText.textContent = "Dark Mode";
        } else {
            buttonText.textContent = "Light Mode";
        }
    }

    const changeColorButton = document.querySelector("#changeColorButton");

    changeColorButton.addEventListener("click", changeBackgroundColor);
});