const $ = id => document.getElementById(id);

window.onload = function () {
    $('email').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-email').innerHTML = "El email es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
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

    $('email').addEventListener('focus', function () {
        $('msgError-email').innerHTML = null;
        this.classList.remove("is-invalid");
    });


    $('password').addEventListener('blur', function (e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-password').innerHTML = "La contraseña es obligatoria";
                this.classList.add("is-invalid");
                break;
            default:
                $('msgError-password').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    })

    $('password').addEventListener('focus', function () {
        $('msgError-password').innerHTML = null;
        this.classList.remove("is-invalid");
    })

    $('button-eye').addEventListener('click', function (e) {

        $('msgError-password').innerHTML = null;
        $('password').classList.remove("is-invalid");

        this.classList.toggle('fa-eye')
        this.classList.toggle('fa')

        this.classList.toggle('fa-solid')
        this.classList.toggle('fa-eye-slash')

        $('password').type = $('password').type === "password" ? "text" : "password"

    });
}