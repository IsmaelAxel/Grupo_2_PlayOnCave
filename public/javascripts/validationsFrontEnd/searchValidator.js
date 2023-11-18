const form_search = document.getElementById('form_search')
window.onload = function () {
const search = document.getElementById('input_search')
    form_search.addEventListener('submit', function(e){
        if(search.value === ""){
            e.preventDefault()
        }
    })
}