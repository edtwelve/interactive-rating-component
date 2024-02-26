const submit = document.querySelector('.submit');
const main = document.querySelector('main');

function clean() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

submit.addEventListener('click', function (){
    clean();

    const botones = document.querySelector('.rating');
    const post = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', 'images/illustration-thank-you.svg')
    post.appendChild(img);

    const selection = document.createElement('p');
    const message = document.createTextNode("You've made a selection");
    selection.append(message);


    const thanks = document.createElement('h1');
    thanks.append("Thank you!")

    const finalMessage = document.createElement('p');
    finalMessage.append("We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!")

    main.append(post,selection,thanks, finalMessage);
})