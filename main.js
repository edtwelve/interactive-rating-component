const submit = document.querySelector('.submit');
const main = document.querySelector('main');

function clean() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

submit.addEventListener('click', function (){
    clean();
    //Container
    const post = document.createElement('div');
    post.className = 'thanksSection';
    //Ilustration
    const img = document.createElement('img');
    img.setAttribute('src', 'images/illustration-thank-you.svg')

    //section that contains the info of selection
    const selection = document.createElement('p');
    const selDiv = document.createElement('section');
    selection.append("You've made a selection");
    //add class to section
    selDiv.appendChild(selection);
    selDiv.className = 'sel';
    //'Thank you' header
    const thanks = document.createElement('h1');
    thanks.append("Thank you!")
    //final message
    const finalMessage = document.createElement('p');
    finalMessage.className = 'finalMsg';
    finalMessage.append("We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!")

    post.append(img, selDiv, thanks, finalMessage);
    main.append(post);
})