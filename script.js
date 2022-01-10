const inputText = document.querySelector('#inputText');
const btnTranslate = document.querySelector('#btn-translate');
const outputText = document.querySelector('#outputText');

const url = `https://api.funtranslations.com/translate/minion.json`;

// const url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yda.json';

const translationURL = (text) => {
    return url + '?text=' + text;
};

const errorHandler = (error) => {
    console.log('Error =', error);
    // console.error;
};

const clickHandler = () => {
    fetch(translationURL(inputText.value))
        .then((response) => {
            console.log(response.status);
            // if (response.status === 404) document.write('Page not available');

            console.log(response.type); // cors
            console.log(response.url); // url

            return response.json();
        })
        .then((data) => {
            console.log(data.contents.translated);
            outputText.innerText = data.contents.translated;
        })
        .catch(errorHandler);

    // fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => console.log(data.contents.translated))
    //     .catch((error) => console.log(error));
};

btnTranslate.addEventListener('click', clickHandler);
