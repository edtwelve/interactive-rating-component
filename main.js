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