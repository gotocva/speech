const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const text_speak = new SpeechSynthesisUtterance();

let emailListening = false;

recognition.onend = () => {
    console.log('Speech recognition ended.');
    // Check if it's due to user stopping or an error
    if (recognition.error) {
      console.error('Speech recognition error:', recognition.error);
      recognition.start();
    }
};

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    commandToJarvis(transcript.toLowerCase());
};

window.addEventListener('load', () => {
    // 
    
});

function listenForEmail() {
    emailListening = true;
    recognition.start();
}

/**
 * 
 * @param {*} text 
 * @returns 
 */
function speakJarvis(text) {

    
    /**
     * specs configurations
     */
    text_speak.text = text;
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    const speachObj = window.speechSynthesis.speak(text_speak);

    console.log(window.speechSynthesis);
    console.log({speachObj});

    return speachObj;
}

/**
 * 
 * @param {*} command 
 */
function commandToJarvis(command) {
    console.log(`command received : ${command}`);

    if (emailListening == true) {
        speakJarvis(`You entered email is ${command}`)
        document.getElementById("email").value = command;
    }
    
}