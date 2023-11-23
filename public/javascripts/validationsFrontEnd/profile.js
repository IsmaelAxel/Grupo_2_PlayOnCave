const $ = (id) => document.getElementById(id);
const urlBase = "https://apis.datos.gob.ar/georef/api";

window.onload = async function (e) {
  $("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $("msgError-name").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-name").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-name").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("surname").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msgError-surname").innerHTML = "El apellido es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $("msgError-surname").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msgError-surname").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-surname").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("birthday").addEventListener("blur", function (e) {
    const birthDate = moment(this.value);
    const currentDate = moment();
    const minDate = moment().subtract(120, "years");

    switch (true) {
      case !this.value.trim():
        $("msgError-birthday").innerHTML = "La fecha es obligatoria";
        this.classList.add("is-invalid");
        break;
      case birthDate.isAfter(currentDate):
        $("msgError-birthday").innerHTML = "La fecha debe ser anterior a la actual";
        this.classList.add("is-invalid");
        break;
      case birthDate.isBefore(minDate):
        $("msgError-birthday").innerHTML = "Tan viejo/a sos??";
        this.classList.add("is-invalid");
        break;
      default:
        $("msgError-birthday").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  try {
    const response = await fetch(urlBase + "/provincias");
    const result = await response.json();
  
    result.provincias
      .sort((a, b) => (a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0))
      .forEach(({ nombre }) => {
        $("province").innerHTML += `<option value="${nombre}">${nombre}</option>`;
      });
  } catch (error) {
    console.error(error); 
  }


    $('province').addEventListener('change', async function(e) {
        try {
            const response = await fetch(`${urlBase}/localidades?provincia=${this.value}&max=1000`);
            const result = await response.json();

            $("city").innerHTML = null;

            result.localidades
            .sort((a, b) => (a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0))
            .forEach(({ nombre }) => {
                $("city").innerHTML += `<option value="${nombre}">${nombre}</option>`;
            });

        } catch (error) {
            console.error(error); 
        }
     
    })
    function validateAvatar() {
      const avatarInput = $('avatar');
      const allowedExtensions = ["jpg", "png", "webp"];
    
      const fileName = avatarInput.files[0].name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
    
      if (!allowedExtensions.includes(fileExtension)) {
        avatarInput.classList.add("is-invalid");
        $('msgError-avatar').innerHTML = "Tipo de archivo inválido. Las extensiones permitidas son: jpg, png, webp";
        $("avatarLabel").classList.remove("btn-secondary");
        $("avatarLabel").classList.add("btn-danger");
        return false; // No es válida
      }
    
      avatarInput.classList.remove("is-invalid");
      $('msgError-avatar').innerHTML = ""; // Limpiar el mensaje si se ha seleccionado una imagen
      $("avatarLabel").classList.remove("btn-danger");
      $("avatarLabel").classList.add("btn-secondary");
      return true; // Es válida
    }
    
    $("avatar").addEventListener("change", function () {
      validateAvatar();
    });

    $('formProfile').addEventListener('submit', function(e){
      e.preventDefault();

      const elementsForm = $('formProfile').elements;
      let error = false

      for (let i = 0; i < elementsForm.length - 2; i++) {
          
          if( elementsForm[i].classList.contains('is-invalid')){
              elementsForm[i].classList.add('is-invalid')
              $('msgError-empty').innerHTML = "Hay errores en la carga de datos"
              error = true
          }
      }
      !error && this.submit()
  })    
};
