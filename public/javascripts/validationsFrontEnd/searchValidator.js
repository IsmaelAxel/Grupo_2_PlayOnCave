document.addEventListener('DOMContentLoaded', function () {
    const form_search = document.getElementById('form_search');
    const search = document.getElementById('input_search');

    function handleFormSubmit(e) {
        if (search.value === "") {
            e.preventDefault();
        }
    }

    search.addEventListener('input', handleFormSubmit);

    form_search.addEventListener('submit', function (e) {
        handleFormSubmit(e);
    });
});
