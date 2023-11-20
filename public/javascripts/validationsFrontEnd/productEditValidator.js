const $ = (id) => document.getElementById(id);
function validarCampo(inputElement, errorMsgElement) {
  switch (true) {
    case !inputElement.value.trim():
      errorMsgElement.innerHTML = "El campo es obligatorio";
      inputElement.classList.add("is-invalid");
      break;
    case !/^[a-zA-Z0-9\s/(),|-]+$/.test(inputElement.value):
      errorMsgElement.innerHTML =
        "El campo solo acepta estos caracteres especiales: ' / ', ' | ', ' - ', ' ( ) ' y ' , '";
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
      case !/^[a-zA-Z0-9\s]+$/.test(this.value):
        $("msgError-title").innerHTML =
          "El campo debe contener letras, números y espacios";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-title").innerHTML = "Mínimo dos caracteres";
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

  const checkboxes = document.getElementsByName("sectionId");
  function updateCheckboxValidation() {
    const atLeastOneChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );
  
    if (!atLeastOneChecked) {
      $("msgError-sectionId").innerHTML = "Debes seleccionar al menos una opción";
      checkboxes.forEach((checkbox) => checkbox.classList.add("is-invalid"));
    } else {
      $("msgError-sectionId").innerHTML = null;
      checkboxes.forEach((checkbox) => checkbox.classList.remove("is-invalid"));
    }
  
    return atLeastOneChecked; // Devuelve true si al menos una casilla está marcada
  }
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      updateCheckboxValidation();
    });
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
      case !/^[a-zA-Z0-9\s\/(),|\-.áéíóúÁÉÍÓÚ]+$/u.test(this.value):
        $("msgError-description").innerHTML =
          "El campo solo acepta estos caracteres especiales: ' , ', ' / ', ' | ', ' - ', ' ( ) ' , ' . ' , y tíldes";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length > 20 && this.value.trim().length < 500:
        $("msgError-description").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
      default:
        $("msgError-description").innerHTML =
          "Mínimo 20 y maximo 500 caracteres";
        this.classList.add("is-invalid");
        break;
    }
  });

  $("description").addEventListener("focus", function () {
    $("msgError-minMemory").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("mainImage").addEventListener("change", function () {
    if (!$("mainImage").files || $("mainImage").files.length === 0) {
        $("msgError-mainImage").innerHTML = "Debes seleccionar una imagen principal";
        $("mainImageLabel").classList.remove("btn-secondary");
        $("mainImageLabel").classList.add("btn-danger");
      }else {
          $("msgError-mainImage").innerHTML = null;
          $("mainImageLabel").classList.remove("btn-danger");
          $("mainImageLabel").classList.add("btn-secondary");
      }
  });

 

  $("formAdd").addEventListener("submit", function (e) {
    e.preventDefault();
    
    

    
   

    // Resto de la validación del formulario
    const elementsForm = document.querySelectorAll('#formAdd input, #formAdd select, #formAdd textarea');
    let errors = [];
  
    // Restablecer mensajes de error y clases de validación
    for (const element of elementsForm) {
      element.classList.remove('is-invalid');
    }
    $('msgError-empty').innerHTML = "";
  
    for (const element of elementsForm) {
      if (!element.value.trim() || element.classList.contains('is-invalid')) {
        errors.push(element);
      }
    }
  
    if (errors.length > 0 || !checkboxesValid) {
      // Aplicar clases de error y mostrar mensaje de error general
      for (const errorElement of errors) {
        errorElement.classList.add('is-invalid');
      }
      $('msgError-empty').innerHTML = "Hay errores en la carga de datos";
    } else {
      // Si no hay errores, enviar el formulario
      this.submit();
    }
  });
};
