const main = document.querySelector('main');
const submit = document.querySelector('.submit'); //submit button
const buttons = document.querySelectorAll('.rating-button'); //rating buttons

//Section for new page
const post = document.createElement('section');
post.className = 'thanksSection';

//Ilustration
const img = document.createElement('img');
img.setAttribute('src', 'images/illustration-thank-you.svg')

//Rating selection section
    let selection = document.createElement('p'); //Where the text with the selected rating will be
    buttons.forEach(button => {
        let selectedRating = 0;
        button.addEventListener('click', function () {
            selectedRating = parseInt(button.value);
            if(!button.classList.contains('focused')){
                button.classList.toggle('focused');
            } else {
                button.classList.toggle('focused');
            }
            /* alert(`You selected ${selectedRating} out of 5`) */
            /* button.removeEventListener('click', this.function()); */
            message(selectedRating);
        });
    });

    //Function that receives value of the button and creates the phrase
    function message(value) {
        let p = document.createElement('p')
        p.innerText = `You selected ${value} out of 5`;
        selection.innerText = p.innerText;
    }

    const selDiv = document.createElement('section');
    selDiv.append(selection);
    selDiv.className = 'sel';
    //En este momento el div de selection tiene la frase con lo escogido

const thanks = document.createElement('h1');
thanks.append("Thank you!")
//final message
const finalMessage = document.createElement('p');
finalMessage.className = 'finalMsg';
finalMessage.append("We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!")

//antes de presionar submit, el programa debe leer el boton de rating que se presiona.

//lo que puedo pasar puede ser simplemente un numero, se evalua con un case y ese es el que se retorna. Cuando tengo el numero lo paso a la impresion del rating

//al final probablemente toque separar la creacion de cada uno de los elementos del thank you.

//Crear funcion que reciba el valor del boton que se presiona, luego de que se reciba, pasarselo a variable y ese pasarselo al submit.

//funcion que recibe el botón que se presiona y llama a otra funcion, mientras le entrega el rating

/* function addElement(contenedor, elemento) {
    contenedor.appendChild(elemento); // Agregar el elemento como hijo del contenedor
} */

//remove and place the color background for each button
/* function focus (){
    buttons.forEach(button => button.classList.remove('focused'))
    button.classList.add('focused');
}; */

function clean() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

submit.addEventListener('click', function (){
    clean();

    post.append(img, selDiv, thanks, finalMessage);
    main.append(post);
})
