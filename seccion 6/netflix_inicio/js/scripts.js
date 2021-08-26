//validar el formulario
const inputs = document.querySelectorAll('form .campo input');

//Listener a los inputs
inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});

inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});

function validarInput(e) {
    const estado = ['valido', 'no valido'];

    let clase;
    if (e.target.value.length === 0) {
        clase = estado[1];
    } else {
        clase = estado[0];
    }

    e.target.classList.remove(...estado);
    e.target.nextElementSibling.classList.remove(...estado);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    //div con el error dinamico
    if (clase === 'no-valido') {
        //construir mensaje de error
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            //insertar el error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        //limpiar mensaje de error si existe
        (e.target.parentElement.nextElementSibling.classList[0] === 'alerta')
        e.target.parentElement.nextElementSibling.remove();
    }
}

//Mostrar y ocultar password
const mostrarPasswordBtn = document.querySelector('form .campo span');
mostrarPasswordBtn.addEventListener('click',e=>{
    const passwordInput = document.querySelector('#password');

    if (e.target.classList.contains('mostrar')){
        //mostrar texto
        e.target.classList.remove('mostrar');
        //cambiar el texto
        e.target.textContent='Ocultar';
        //Cambiar a password
        passwordInput.type = 'text';
    }else{
        //mostrar el password
        e.target.classList.add('mostrar');
        //cambiar el texto
        e.target.textContent='Mostrar';
        //Cambiar a password
        passwordInput.type = 'password';
    }
})