# Frontend Mentor - Interactive rating component solution

Welcome. This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: [Here](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI/hub)
- Live Site URL: [Here](https://edtwelve.github.io/interactive-rating-component/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow


### What I learned

When handling elements, their nature and the goal must be kept in mind. I wanted to get the text content of a paragraph and assign it to other element, both HTMLParagraphElement's. I had to specify that the operations had to be made with their innerTexts.

```js
    function message(value) {
        let p = document.createElement('p')
        p.innerText = `You selected ${value} out of 5`;
        selection.innerText = p.innerText; //!
    }
```