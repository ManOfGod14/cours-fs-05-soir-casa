/**
 * webkitSpeechRecognition
 */

const transcritpion = document.querySelector('#transcritpion');
const startBtn = document.querySelector('#startId');
const stopBtn = document.querySelector('#stopId');

if('webkitSpeechRecognition' in window) {
    let recognition = new webkitSpeechRecognition();
    // console.log(recognition)

    recognition.continuous = true;
    recognition.lang = 'fr-FR';
    recognition.interimResults = true;
    // console.log(recognition)

    let previousWord = "";

    startBtn.addEventListener('click', () => {
        recognition.start();
        transcritpion.value = "";
        transcritpion.placeholder = "Vous pouvez parler maintenant !";
        startBtn.setAttribute('disabled', '');
        stopBtn.removeAttribute('disabled');
    });

    stopBtn.addEventListener('click', () => {
        recognition.stop();
        transcritpion.placeholder = "Cliquez sur Enregistrer !";
        stopBtn.setAttribute('disabled', '');
        startBtn.removeAttribute('disabled');
    });

    recognition.onresult = (evt) => {
        // console.log(evt);
        // const eventResultIndex = evt.resultIndex;
        // const eventResults = evt.results;
        // console.log(eventResults[eventResultIndex][eventResultIndex].transcript);

        const currentWord = evt.results[0][0].transcript;
        if(currentWord !== previousWord) {
            transcritpion.value += currentWord + " ";
            previousWord = currentWord;
        }
    };
} else {
    transcritpion.placeholder = "Votre navigateur ne prend pas en charge l'enregistrement vocal !";
    startBtn.setAttribute('disabled', '');
}