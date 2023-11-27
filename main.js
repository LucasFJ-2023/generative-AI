const button = document.querySelector('button');
const input = document.querySelector('input');
const pTag = document.querySelector('p');

button.addEventListener("click", () => {
    getGeneratedText(`Give me a list of 8 exercises matching: ${input.value}`)
        .then(getGeneratedText => {
            pTag.innerText = getGeneratedText;
        })
})