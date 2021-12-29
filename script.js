let entryForm;
let inputs;

let regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const validarVacio = (item) => {
   
    switch (item.name) {
        case 'firstName':
            if(item.value === '') {
                item.classList.add('invalid')
            } else {
                item.classList.remove('invalid')
            }
            break;
            
        case 'lastName':    
            if(item.value === '') {
                item.classList.add('invalid')
            } else {
                item.classList.remove('invalid')
            }
            break;

        case 'emailAddress':    
            if(item.value === '') {
                item.classList.add('invalid')
            } else if (!item.value.match(regExp)) {
                item.classList.add('invalid');
                document.getElementById('validationError').innerHTML = 'Please provide a valid email.';
            } else {
                item.classList.remove('invalid')
            }
            break;

        case 'password':    
            if(item.value === '') {
                item.classList.add('invalid')
            } else {
                item.classList.remove('invalid')
            }
            break;
    
        default:
            break;
    }
}

function toDoSubmit() {

    inputs = document.querySelectorAll('#subscriptionForm input');
    entryForm = document.getElementById('subscriptionForm');

    inputs.forEach((entry) => {
        validarVacio(entry);
    });

    if(document.querySelectorAll('.invalid').length == 0 ) {
        alert('Sent');
        // Para enviar el formulario:
        // entryForm.submit();
    }

}
