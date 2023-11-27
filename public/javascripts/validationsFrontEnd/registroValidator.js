const $ = id => document.getElementById(id);

window.onload = function () {
    $('name').addEventListener('focus', function () {
        $('msgError-name').innerHTML = null;
        this.classList.remove("is-invalid");

        let inputElement = document.getElementById('name');
        let container = inputElement.closest('.cambiarColor');
        container.classList.remove('inputRojo', 'inputVerde');
    });

    $('name').addEventListener('blur', function (e) {
        let inputElement = document.getElementById('name');
        let container = inputElement.closest('.cambiarColor');

        switch (true) {
            case !inputElement.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            case !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/u.test(inputElement.value):
                $('msgError-name').innerHTML = "Solo caracteres alfabéticos";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            case inputElement.value.trim().length < 3:
                $('msgError-name').innerHTML = "Mínimo tres caracteres";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            default:
                $('msgError-name').innerHTML = null;
                inputElement.classList.remove("is-invalid");
                inputElement.classList.add("is-valid");
                container.classList.remove('inputRojo');
                container.classList.add('inputVerde');
                break;
        }
    });


    document.getElementById('surname').addEventListener('focus', function () {
        document.getElementById('msgError-surname').innerHTML = null;
        this.classList.remove("is-invalid");

        let inputElement = this;
        let container = inputElement.closest('.cambiarColor');
        container.classList.remove('inputRojo', 'inputVerde');
    });

    document.getElementById('surname').addEventListener('blur', function (e) {
        let inputElement = this;
        let container = inputElement.closest('.cambiarColor');

        switch (true) {
            case !inputElement.value.trim():
                document.getElementById('msgError-surname').innerHTML = "El apellido es obligatorio";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            case !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/u.test(inputElement.value):
                document.getElementById('msgError-surname').innerHTML = "Solo caracteres alfabéticos";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            case inputElement.value.trim().length < 3:
                document.getElementById('msgError-surname').innerHTML = "Mínimo tres caracteres";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            default:
                document.getElementById('msgError-surname').innerHTML = null;
                inputElement.classList.remove("is-invalid");
                inputElement.classList.add("is-valid");
                container.classList.remove('inputRojo');
                container.classList.add('inputVerde');
                break;
        }
    });

    document.getElementById('email').addEventListener('blur', async function (e) {
        let inputElement = this;
        let container = inputElement.closest('.cambiarColor');

        switch (true) {
            case !inputElement.value.trim():
                document.getElementById('msgError-email').innerHTML = "El email es obligatorio";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputElement.value):
                document.getElementById('msgError-email').innerHTML = "El email es inválido";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            default:
                document.getElementById('msgError-email').innerHTML = null;
                inputElement.classList.remove("is-invalid");
                inputElement.classList.add("is-valid");
                container.classList.remove('inputRojo');
                container.classList.add('inputVerde');
                break;
        }
    });

    document.getElementById('email').addEventListener('blur', async function (e) {
        try {
            const response = await fetch(`/api/users/check-email?email=${this.value}`);
            const result = await response.json();
            let inputElement = this;
            let container = inputElement.closest('.cambiarColor');
            if (result.data) {
                document.getElementById('msgError-email').innerHTML = "El email ya se encuentra registrado";
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                
                this.classList.add("is-invalid");
                
            }
        } catch (error) {
            console.error(error);
        }
    });

    document.getElementById('email').addEventListener('change', function () {
        document.getElementById('msgError-email').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    document.getElementById('password').addEventListener('blur', function (e) {
        let inputElement = this;
        let container = inputElement.closest('.cambiarColor');

        switch (true) {
            case !inputElement.value.trim():
                document.getElementById('msgError-password').innerHTML = "La contraseña es obligatoria";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(inputElement.value):
                document.getElementById('msgError-password').innerHTML = "Es necesario una mayúscula, un número y un caracter especial";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            default:
                document.getElementById('msgError-password').innerHTML = null;
                inputElement.classList.remove("is-invalid");
                inputElement.classList.add("is-valid");
                container.classList.remove('inputRojo');
                container.classList.add('inputVerde');
                break;
        }
    });

    document.getElementById('password').addEventListener('focus', function () {
        document.getElementById('msgError-password').innerHTML = null;
        this.classList.remove("is-invalid");
        let inputElement = this;
        let container = inputElement.closest('.cambiarColor');
        container.classList.remove('inputRojo', 'inputVerde');
    });

    document.getElementById('button-eye').addEventListener('click', function (e) {
        document.getElementById('msgError-password').innerHTML = null;
        document.getElementById('password').classList.remove("is-invalid");
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa');
        this.classList.toggle('fa-solid');
        this.classList.toggle('fa-eye-slash');
        document.getElementById('password').type = document.getElementById('password').type === "password" ? "text" : "password";
    });


    document.getElementById('password2').addEventListener('focus', function () {
        document.getElementById('msgError-password2').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    document.getElementById('password2').addEventListener('blur', function (e) {
        let inputElement = this;
        let container = inputElement.closest('.cambiarColor');

        switch (true) {
            case !inputElement.value.trim():
                document.getElementById('msgError-password2').innerHTML = "Debes confirmar tu contraseña";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            case inputElement.value.trim() !== document.getElementById('password').value.trim():
                document.getElementById('msgError-password2').innerHTML = "Las contraseñas no coinciden";
                inputElement.classList.add("is-invalid");
                container.classList.add('inputRojo');
                container.classList.remove('inputVerde');
                break;
            default:
                document.getElementById('msgError-password2').innerHTML = null;
                inputElement.classList.remove("is-invalid");
                inputElement.classList.add("is-valid");
                container.classList.remove('inputRojo');
                container.classList.add('inputVerde');
                break;
        }
    });

    function validateMainImage() {
        const mainImageInput = $('image');
        const allowedExtensions = ["jpg", "jpeg", "png", "webp"];

        if (mainImageInput.files[0]) {
            const fileName = mainImageInput.files[0].name;
            const fileExtension = fileName.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(fileExtension)) {
                mainImageInput.classList.add("is-invalid");
                $('msgError-image').innerHTML = "Las extensiones permitidas son: jpg/jpeg, png, webp";
                return false; // No es válida
            }
            mainImageInput.classList.remove("is-invalid");
            $('msgError-image').innerHTML = ""; // Limpiar el mensaje si se ha seleccionado una imagen
            return true; // Es válida
        }
        return true; // Es válida

    }

    $("image").addEventListener("change", function () {
        validateMainImage();
    });

    $('form-register').addEventListener('submit', function (e) {
        e.preventDefault();
        const elementsForm = $('form-register').elements;
        let error = false;

        if (!validateMainImage()) {
            error = true;
        }
        for (let i = 0; i < elementsForm.length - 2; i++) {

            if (!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')) {
                elementsForm[i].classList.add('is-invalid')
                $('msgError-empty').innerHTML = "Hay errores en la carga de datos"
                console.log(
                    elementsForm[i].classList.contains("is-invalid"),
                    elementsForm[i]
                );
                error = true
            }
        }
        !error && this.submit()
    })

}