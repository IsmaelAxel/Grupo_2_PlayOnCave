
document.addEventListener("DOMContentLoaded", function () {
    let snowActive2 = sessionStorage.getItem("snowActive2") === "true"; // Recupera el estado de la nieve del sessionStorage
    const snowBtn2 = document.querySelector(".snow-btn2");
    const snowContainer2 = document.querySelector(".tpl-snow2");

    function toggleSnow() {
        snowActive2 = !snowActive2;
        snowContainer2.style.display = snowActive2 ? "block" : "none";
        sessionStorage.setItem("snowActive2", snowActive2); // Guarda el estado de la nieve en el sessionStorage
    }

    snowBtn2.addEventListener("click", function () {
        toggleSnow();
    });

    // Aplica el estado almacenado al cargar la página
    snowContainer2.style.display = snowActive2 ? "block" : "none";
});
