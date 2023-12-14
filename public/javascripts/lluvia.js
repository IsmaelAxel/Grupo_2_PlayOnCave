document.addEventListener("DOMContentLoaded", function () {
    let lluviaActive = sessionStorage.getItem("lluviaActive") === "true"; // Recupera el estado de la nieve del sessionStorage
    const lluviaBtn = document.querySelector(".lluvia-btn");
    const lluviaContainer = document.querySelector(".tpl-lluvia");

    function toggleLluvia() {
        lluviaActive = !lluviaActive;
        lluviaContainer.style.display = lluviaActive ? "block" : "none";
        sessionStorage.setItem("lluviaActive", lluviaActive); // Guarda el estado de la nieve en el sessionStorage
    }

    lluviaBtn.addEventListener("click", function () {
        toggleLluvia();
    });

    // Aplica el estado almacenado al cargar la página
    lluviaContainer.style.display = lluviaActive ? "block" : "none";
});