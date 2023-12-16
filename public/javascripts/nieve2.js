
document.addEventListener("DOMContentLoaded", function () {
    let snowActive = sessionStorage.getItem("snowActive") === "true"; // Recupera el estado de la nieve del sessionStorage
    const snowBtn = document.querySelector(".snow-btn2");
    const snowContainer = document.querySelector(".tpl-snow2");

    function toggleSnow() {
        snowActive = !snowActive;
        snowContainer.style.display = snowActive ? "block" : "none";
        sessionStorage.setItem("snowActive", snowActive); // Guarda el estado de la nieve en el sessionStorage
    }

    snowBtn.addEventListener("click", function () {
        toggleSnow();
    });

    // Aplica el estado almacenado al cargar la página
    snowContainer.style.display = snowActive ? "block" : "none";
});
