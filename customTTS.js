let speech = new SpeechSynthesisUtterance()
speech.lang = "en"

var output = "..."
var name = "thomas"
var text = ""
var speakIsOn = true
var textIsOn = true

function refresh() {
    text = document.querySelector(".inputArea").value
}

function speak() {
    refresh()
    switch (text.toLowerCase()) {
        case "hello":
        case "hello gideon":
        case "hello, gideon":
        case "hi":
        case "hi gideon":
        case "hi, gideon":
            output = "hello, thomas"
            break;
        
        default:
            output = "..."
      }
    if (speakIsOn === true) {
        speech.text = output
        window.speechSynthesis.speak(speech)
    }
    if (textIsOn === true) {
        document.querySelector(".speechText").innerHTML = output
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        speak()
    }
})