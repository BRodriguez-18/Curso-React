//Eventos del dom - Inputs

const inputNombre = document.querySelector('#nombre')
inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value.length)
})

const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword)

console.log(password)

function functionPassword(){
    const password = inputPassword.value;

    
    if (password.length > 1) {
        inputPassword.type = 'text';
        const maskedPassword = '*'.repeat(password.length - 1) + password.slice(-1);
        inputPassword.value = maskedPassword;
        
        setTimeout(() => {
            inputPassword.type = 'password';
            inputPassword.value = password;
        }, 300);
    }
}