const inputMainImage = document.getElementById('mainImage')
const mainImage = document.getElementById('mainImagePreview')
const inputImages = document.getElementById('images')
const boxImagesPreview = document.getElementById('boxImagesPreview')
inputMainImage.addEventListener('change', (event) => {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => mainImage.src = reader.result
})
inputImages.addEventListener('change', function(event){
    function readAndPreview(file){
        let reader = new FileReader()
        boxImagesPreview.innerHTML = null
        reader.readAsDataURL(file)
        reader.onload = function(){
            let image = new Image()
            image.src = this.result
            boxImagesPreview.appendChild(image)
        }
    }
    [].forEach.call(this.files, readAndPreview)
})