const $ = id => document.getElementById(id);

window.onload = function () {
    $('name').addEventListener('focus', function() {
        $('msgError-name').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
                $('msgError-name').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                $('msgError-name').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('surname').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-surname').innerHTML = "El apellido es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
                $('msgError-surname').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                $('msgError-surname').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-surname').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('surname').addEventListener('focus', function() {
        $('msgError-surname').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('email').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = "El email es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value) :
                $('msgError-email').innerHTML = "El email es inválido";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-email').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('email').addEventListener('focus', function() {
        $('msgError-email').innerHTML = null;
        this.classList.remove("is-invalid");
    });

    $('email').addEventListener('change', async function(e) {

        try {
            const response = await fetch(`/api/check-email?email=${this.value}`);
            const result = await response.json();
    
            if(result.data){
                $('msgError-email').innerHTML = "El email ya se encuentra registrado";
                this.classList.add("is-invalid");    
            }

        } catch (error) {
            console.error();
        }
    });

    $('password').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = "La contraseña es obligatoria";
                this.classList.add("is-invalid");
                break;
            case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(this.value) :
                $('msgError-password').innerHTML = "La contraseña debe tener un número, una mayúscula y un caracter especial";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-password').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    })

    $('password').addEventListener('focus', function() {
        $('msgError-password').innerHTML = null;
        this.classList.remove("is-invalid");
    })

    $('button-eye').addEventListener('click', function(e) {

        $('msgError-password').innerHTML = null;
        $('password').classList.remove("is-invalid");
        
        this.classList.toggle('fa-eye')
        this.classList.toggle('fa')

        this.classList.toggle('fa-solid')
        this.classList.toggle('fa-eye-slash')

        $('password').type = $('password').type === "password" ? "text" : "password"

    });

    $('password2').addEventListener('focus', function() {
        $('msgError-password2').innerHTML = null;
        this.classList.remove("is-invalid");
    });

        $('password2').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-password2').innerHTML = "Debes confirmar tu contraseña";
                this.classList.add("is-invalid");
                break;
            case this.value.trim() !== $('password').value.trim() :
                $('msgError-password2').innerHTML = "Las contraseñas no coinciden";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-password2').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    })

    $('formAdd').addEventListener('submit', function(e){
        e.preventDefault();

        const elementsForm = $('formAdd').elements;
        let error = false

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(!elementsForm[i].value.trim() || elementsForm[i].classList.contains('is-invalid')){
                elementsForm[i].classList.add('is-invalid')
                $('msgError-empty').innerHTML = "Hay errores en la carga de datos"
                error = true
            }
        }

        !error && this.submit()
    

    })

}