const $ = (id) => document.getElementById(id);
function validarCampo(inputElement, errorMsgElement) {
  switch (true) {
    case !inputElement.value.trim():
      errorMsgElement.innerHTML = "El campo es obligatorio";
      inputElement.classList.add("is-invalid");
      break;
    case !/^[a-zA-Z0-9\s/(),|.|-]+$/.test(inputElement.value):
      errorMsgElement.innerHTML =
        "El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ', ' . ' y ' , '";
      inputElement.classList.add("is-invalid");
      break;
    case inputElement.value.trim().length > 2 &&
      inputElement.value.trim().length < 100:
      errorMsgElement.innerHTML = null;
      inputElement.classList.remove("is-invalid");
      inputElement.classList.add("is-valid");
      break;
    default:
      errorMsgElement.innerHTML = "Mínimo 2 y máximo 100 caracteres";
      inputElement.classList.add("is-invalid");
      break;
  }
}

window.onload = function () {
  $("title").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-title").innerHTML = "El titulo es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9\s:'Δ]+$/ .test(this.value):
        $("msgError-title").innerHTML =
          "El campo debe contener letras, números y espacios";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 4:
        $("msgError-title").innerHTML = "Mínimo cuatro caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-title").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });
  $("title").addEventListener("focus", function () {
    $("msgError-title").innerHTML = null;
    this.classList.remove("is-invalid");
  });
  $("categoryId").addEventListener("change", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-categoryId").innerHTML = "La categoria es obligatorio";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-categoryId").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });
  $("categoryId").addEventListener("focus", function () {
    $("msgError-title").innerHTML = null;
    this.classList.remove("is-invalid");
  });
  $("price").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-price").innerHTML = "El precio es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[1-9]\d*$/.test(this.value):
        $("msgError-price").innerHTML =
          "El campo debe contener solo numeros positivos";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-price").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });
  $("price").addEventListener("focus", function () {
    $("msgError-price").innerHTML = null;
    this.classList.remove("is-invalid");
  });
  $("discount").addEventListener("blur", function (e) {
    switch (true) {
      case !/^[0-9]\d*$/.test(this.value):
        $("msgError-discount").innerHTML =
          "El campo debe contener solo numeros positivos";
        this.classList.add("is-invalid");
        break;
      case this.value == 100:
        $("msgError-discount").innerHTML = "El descuento debe ser menor a 100";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-discount").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });
  $("discount").addEventListener("focus", function () {
    $("msgError-discount").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  // Validaciones de requisitos minimos

  $("minOs").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-minOs"));
  });

  $("minOs").addEventListener("focus", function () {
    $("msgError-minOs").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("minProcessor").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-minProcessor"));
  });

  $("minProcessor").addEventListener("focus", function () {
    $("msgError-minProcessor").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("minMemory").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-minMemory"));
  });

  $("minMemory").addEventListener("focus", function () {
    $("msgError-minMemory").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("minGraphicsCard").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-minGraphicsCard"));
  });

  $("minGraphicsCard").addEventListener("focus", function () {
    $("msgError-minGraphicsCard").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("minDisk").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-minDisk"));
  });

  $("minDisk").addEventListener("focus", function () {
    $("msgError-minMemory").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  // Validaciones para requisitos recomendados

  $("recommendedOs").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-recommendedOs"));
  });

  $("recommendedOs").addEventListener("focus", function () {
    $("msgError-recommendedOs").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("recommendedProcessor").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-recommendedProcessor"));
  });

  $("recommendedProcessor").addEventListener("focus", function () {
    $("msgError-minMemory").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("recommendedMemory").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-recommendedMemory"));
  });

  $("recommendedMemory").addEventListener("focus", function () {
    $("msgError-minMemory").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("recommendedGraphicsCard").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-recommendedGraphicsCard"));
  });

  $("recommendedGraphicsCard").addEventListener("focus", function () {
    $("msgError-minMemory").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("recommendedDisk").addEventListener("blur", function (e) {
    validarCampo(this, $("msgError-recommendedDisk"));
  });

  $("recommendedDisk").addEventListener("focus", function () {
    $("msgError-minMemory").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("description").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-description").innerHTML = "El campo es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9\s\/(),|\-.áéíóúÁÉÍÓÚñÑ':]+$/u.test(this.value):
        $("msgError-description").innerHTML =
          "El campo solo acepta estos caracteres especiales: ' , ', ' / ', ' | ', ' - ', ' ( ) ' , ' . ' , y tíldes";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length > 20 && this.value.trim().length < 1000:
        $("msgError-description").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
      default:
        $("msgError-description").innerHTML =
          "Mínimo 20 y maximo 1000 caracteres";
        this.classList.add("is-invalid");
        break;
    }
  });

  $("description").addEventListener("focus", function () {
    $("msgError-minMemory").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  const checkboxes = document.querySelectorAll('[name="sectionId"]');

  function validateCheckboxes() {
    let checkboxesChecked = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkboxesChecked = true;
      }
    });

    if (!checkboxesChecked) {
      checkboxes.forEach((checkbox) => {
        checkbox.classList.add("is-invalid");
      });
      $("msgError-sectionId").innerHTML =
        "Se tiene que seleccionar una plataforma";
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.classList.remove("is-invalid");
      });
      $("msgError-sectionId").innerHTML = null;
    }
  }
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      validateCheckboxes();
    });
  });

  function validateMainImage() {
    const mainImageInput = $('mainImage');
    const allowedExtensions = ["jpg", "jpeg", "png", "webp"];
  
    // Validar imagen principal
    if (!mainImageInput.files.length) {
      mainImageInput.classList.add("is-invalid");
      $('msgError-mainImage').innerHTML = "Debe seleccionar una imagen principal";
      $("mainImageLabel").classList.remove("btn-secondary");
      $("mainImageLabel").classList.add("btn-danger");
      $("mainImagePreviewColor").classList.remove("mainImagePreview-color");
      $("mainImagePreviewColor").classList.add("mainImagePreview-isInvalid");
      return false; // No es válida
    }
  
    const fileName = mainImageInput.files[0].name;
    const fileExtension = fileName.split('.').pop().toLowerCase();
  
    if (!allowedExtensions.includes(fileExtension)) {
      mainImageInput.classList.add("is-invalid");
      $('msgError-mainImage').innerHTML = "Tipo de archivo inválido. Las extensiones permitidas son: jpg/jpeg, png, webp";
      $("mainImageLabel").classList.remove("btn-secondary");
      $("mainImageLabel").classList.add("btn-danger");
      $("mainImagePreviewColor").classList.remove("mainImagePreview-color");
      $("mainImagePreviewColor").classList.add("mainImagePreview-isInvalid");
      return false; // No es válida
    }
  
    mainImageInput.classList.remove("is-invalid");
    $('msgError-mainImage').innerHTML = ""; // Limpiar el mensaje si se ha seleccionado una imagen
    $("mainImageLabel").classList.remove("btn-danger");
    $("mainImageLabel").classList.add("btn-secondary");
    $("mainImagePreviewColor").classList.add("mainImagePreview-color");
    $("mainImagePreviewColor").classList.remove("mainImagePreview-isInvalid");
    return true; // Es válida
  }
  
  $("mainImage").addEventListener("change", function () {
    validateMainImage();
  });

  function validateImages() {
    const imagesInput = $('images');
    const allowedExtensions = ["jpg", "jpeg", "png", "webp"];
    
    // Validar imágenes
    if (imagesInput.files.length !== 5) {
      imagesInput.classList.add("is-invalid");
      $('msgError-images').innerHTML = "Debe seleccionar exactamente 5 imágenes";
      $("imagesLabel").classList.remove("btn-secondary");
      $("imagesLabel").classList.add("btn-danger");
      $("boxImagesPreview").classList.remove("mainImagePreview-color");
      $("boxImagesPreview").classList.add("mainImagePreview-isInvalid");
      return false; 
    }
  
    for (let i = 0; i < imagesInput.files.length; i++) {
      const fileName = imagesInput.files[i].name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
  
      if (!allowedExtensions.includes(fileExtension)) {
        imagesInput.classList.add("is-invalid");
        $('msgError-images').innerHTML = "Tipo de archivo inválido. Las extensiones permitidas son: jpg/jpeg, png, webp";
        $("imagesLabel").classList.remove("btn-secondary");
        $("imagesLabel").classList.add("btn-danger");
        $("boxImagesPreview").classList.remove("mainImagePreview-color");
      $("boxImagesPreview").classList.add("mainImagePreview-isInvalid");
        return false; // No es válida
      }
    }
  
    imagesInput.classList.remove("is-invalid");
    $('msgError-images').innerHTML = "";
    $("imagesLabel").classList.remove("btn-danger");
    $("imagesLabel").classList.add("btn-secondary");
    $("boxImagesPreview").classList.add("mainImagePreview-color");
    $("boxImagesPreview").classList.remove("mainImagePreview-isInvalid");
    return true; // Es válida
  }
  
  $("images").addEventListener("change", function () {
    validateImages();
  });


  $("")

  $("formAdd").addEventListener("submit", function (e) {
    e.preventDefault();
    const elementsForm = $("formAdd").elements;
    let error = false;
    validateCheckboxes();
    if (!validateMainImage()) {
      error = true;
    }
    if (!validateImages()) {
      error = true;
    }
    for (let i = 0; i < elementsForm.length - 4; i++) {
      if (
        !elementsForm[i].value.trim() ||
        elementsForm[i].classList.contains("is-invalid")
      ) {
        elementsForm[i].classList.add("is-invalid");
        $("msgError-empty").innerHTML = "Hay errores en la carga de datos";
        console.log(
          elementsForm[i].classList.contains("is-invalid"),
          elementsForm[i]
        );
        error = true;
      }
    }

    !error && this.submit();
  });
};
