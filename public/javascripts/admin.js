document.addEventListener('DOMContentLoaded', function () {
                       
    const productsTableHeight = document.querySelector('.products-tab table').clientHeight;

    const categoriesTab = document.querySelector('#profile');
    categoriesTab.style.marginBottom = `${productsTableHeight}px`;

    const usersTab = document.querySelector('#contact');
    usersTab.style.marginBottom = `${productsTableHeight}px`;
});