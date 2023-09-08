function validation (datos) {
// verifica q esto si sea un correo\\
const regexEmail = /^[\w\.-]+@[\w\.-]+\.\w+$/; 

//verifica usuario no este vacio y nombre del usuario no puede tener mas de 35 caracteres\\
const expresionRegular = /^(?=.{1,35}$).*\S.*$/; 

//verifica contraseña tiene que tener al menos un número\\
const regexPassword = /^(?=.*\d).{6,10}$/;


    const error = {}

    if(!regexEmail.test(datos.email)) error.email = 'Debes ingresar un Email'

    if(!expresionRegular.test(datos.email)) error.email = 'La longitud no mayor a 35 caracteres'

    if(!regexPassword.test(datos.password)) error.password = 'Contraseña con almenos un numero y entre 6 a 10 caracteres'

    return error;
}

export default validation;