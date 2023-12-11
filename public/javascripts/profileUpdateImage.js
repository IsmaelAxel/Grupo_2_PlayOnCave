const inputMainImage = document.getElementById('avatar')
const mainImage = document.getElementById('mainImage')
inputMainImage.addEventListener('change', (event) => {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => mainImage.src = reader.result
})