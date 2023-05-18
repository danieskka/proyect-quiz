// FORMULARIO

// seleccionamos el formulario y evitamos el refresco de la pagina

const form = document.querySelector('.container');

form.addEventListener("submit", function(event){
    event.preventDefault();


// obtener datos de formulario: respuestas del usuario, lo almacenamos todo en un array

const options = form.querySelectorAll('input[type="radio"]:checked');
let checkedOption = [];

options.forEach(function(option) {
    checkedOption.push(option.value)
});

// almacenamos las respuestas en variables, creamos un objeto

const responses = {
    director: "spielberg",
    grossing: "avatar",
    tarantino: "snatch",
    saga: "harry",
    disney: "ralph",
    moviescene1: "alien1",
    moviescene2: "blade",
    moviescene3: "obiwanright",
    moviescene4: "poetas",
    moviescene5: "azkaban"
}

// comparamos nuestro objeto con las respuestas correctas y las recogidas por el usuario

const questionBox = document.getElementsByClassName('box');
let counter = 0;

Object.keys(responses).forEach(function(question, index) {
    Swal.fire({
        title: '¡Gracias por haber completado el Quiz!',
        width: 600,
        padding: '3em',
        color: '#566E27',
        background: '#fff url(https://media.tenor.com/bK1qpWGyQKkAAAAM/kitty.gif)',
      })
    
    const box = questionBox[index];  
    
    if (checkedOption.includes(responses[question])) {
        box.style.backgroundColor = 'green';
        counter++;
    } else {
        box.style.backgroundColor = 'red';
    }
})
});
