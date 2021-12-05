var inputText = document.querySelector('#inputText');
var btnTranslate = document.querySelector('#btn-translate');
var outputText = document.querySelector('#outputText');

var url = `https://api.funtranslations.com/translate/minion.json`;

function translationURL(text) {
    return url + '?text=' + text;
}

function errorHandler(error) {
    console.log('Error =', error);
}

function clickHandler() {
    fetch(translationURL(inputText.value))
        .then((response) => response.json())
        .then((json) => {
            console.log(json.contents.translated);
            outputText.innerText = json.contents.translated;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickHandler);
