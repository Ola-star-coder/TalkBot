let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');
let button = document.querySelector('button');
let textarea = document.querySelector('textarea');

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear previous options
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
    // Set default voice
    if (voices.length > 0) {
        speech.voice = voices[0];
        voiceSelect.value = 0;
    }
}

populateVoices();
window.speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

button.addEventListener('click', () => {
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
});
