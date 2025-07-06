const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const confirmarContrasena = document.getElementById('confirmarContrasena');
const edad = document.getElementById('edad');
const enviarBtn = document.getElementById('enviarBtn');

const errorNombre = document.getElementById('errorNombre');
const errorCorreo = document.getElementById('errorCorreo');
const errorContrasena = document.getElementById('errorContrasena');
const errorConfirmarContrasena = document.getElementById('errorConfirmarContrasena');
const errorEdad = document.getElementById('errorEdad');

function validarNombre() {
    if (nombre.value.length >= 3) {
        errorNombre.textContent = '';
        return true;
    } else {
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.';
        return false;
    }
}

function validarCorreo() {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexCorreo.test(correo.value)) {
        errorCorreo.textContent = '';
        return true;
    } else {
        errorCorreo.textContent = 'Correo no válido.';
        return false;
    }
}

function validarContrasena() {
    const regexContrasena = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (regexContrasena.test(contrasena.value)) {
        errorContrasena.textContent = '';
        return true;
    } else {
        errorContrasena.textContent = 'Mínimo 8 caracteres, un número y un símbolo.';
        return false;
    }
}

function validarConfirmarContrasena() {
    if (contrasena.value === confirmarContrasena.value && confirmarContrasena.value !== '') {
        errorConfirmarContrasena.textContent = '';
        return true;
    } else {
        errorConfirmarContrasena.textContent = 'Las contraseñas no coinciden.';
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        errorEdad.textContent = '';
        return true;
    } else {
        errorEdad.textContent = 'Debes tener al menos 18 años.';
        return false;
    }
}

function validarFormulario() {
    if (validarNombre() && validarCorreo() && validarContrasena() && validarConfirmarContrasena() && validarEdad()) {
        enviarBtn.disabled = false;
    } else {
        enviarBtn.disabled = true;
    }
}

nombre.addEventListener('input', () => { validarNombre(); validarFormulario(); });
correo.addEventListener('input', () => { validarCorreo(); validarFormulario(); });
contrasena.addEventListener('input', () => { validarContrasena(); validarFormulario(); });
confirmarContrasena.addEventListener('input', () => { validarConfirmarContrasena(); validarFormulario(); });
edad.addEventListener('input', () => { validarEdad(); validarFormulario(); });

document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado correctamente 🎉');
});
