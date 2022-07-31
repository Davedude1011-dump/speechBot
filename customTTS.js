let speech = new SpeechSynthesisUtterance()
speech.lang = "en-GB"
speech.rate = 0.7
speech.pitch = 0.6
speech.volume = 1

var output = "..."
var name = "thomas"
var text = ""
var speakIsOn = true
var textIsOn = true
var searchBarOn = false
var simonSaysOn = false

var searchBar = document.getElementById("SearchBarOuter")
var searchBarInput = document.querySelector(".searchBar")
var searchBarTitle = document.querySelector(".searchBarTitle")
var inp = document.querySelector(".inputArea")
var clock = document.getElementById("clock")

var today = new Date()
var hour = today.getHours()
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurdsay", "Friday",
  "Saturday" ]

function refresh() {
    text = (document.querySelector(".inputArea").value).toLowerCase()
    searchText = (document.querySelector(".searchBar").value).toLowerCase()
}

function searchBarOpen() {
    output = "Opening search bar"
    searchBarOn = true
    searchBar.style.display = "block"
}
function searchBarClose() {
    output = "Closing search bar"
    if (speakIsOn === true) {
        speech.text = output
        window.speechSynthesis.speak(speech)
    }
    if (textIsOn === true) {
        document.querySelector(".speechText").innerHTML = output
    }
    searchBarOn = false
    simonSaysOn = false
    searchBar.style.display = "none"
    
}
function searchBarQuietClose() {
    searchBarOn = false
    searchBar.style.display = "none"
}
function searchBarSearch() {
    refresh()
    output = "Searching"
    if (speakIsOn === true) {
        speech.text = output
        window.speechSynthesis.speak(speech)
    }
    if (textIsOn === true) {
        document.querySelector(".speechText").innerHTML = output
    }
    window.open(`https://www.google.com/search?q=${searchText}`)
    searchBarQuietClose()
}

function clockOpen() {
    clock.style.display = "block"
}
function clockClose() {
    clock.style.display = "none"
}

function simonSaysOpen() {
    output = "Opening simonSays"
    simonSaysOn = true
    searchBar.style.display = "block"
    searchBarTitle.innerHTML = "Simon Says"
}

function speak() {
    refresh()
    if (text === "hello" || text === "hi") {
        output = "Hello"
    }

    else if (text === "good morning") {
        if (hour < 12) {
            output = "Morning to you too"
          }
        else if (hour < 18) {
            output = "It is currently the afternoon"
          }
        else {
            output = "It's a bit late for that"
          }
    }
    else if (text === "good afternoon") {
        if (hour < 12) {
            output = "Not yet"
          }
        else if (hour < 18) {
            output = "Afternoon to you too"
          }
        else {
            output = "It's a bit late for that"
          }
    }
    else if (text === "good night") {
        if (hour < 12) {
            output = "It is currently the morning"
          }
        else if (hour < 18) {
            output = "It is currently the afternoon"
          }
        else {
            output = "Good Night to you too"
          }
    }

    else if (text === "open youtube") {
        output = "Opening youtube"
        window.open("https://www.youtube.com");
    }
    else if (text === "open github" || text === "open git hub") {
        output = "Opening github"
        window.open("https://github.com");
    }
    else if (text === "open chess" || text === "open chess.com" || text === "play chess" || text === "play chess.com") {
        output = "Opening chess"
        window.open("https://www.chess.com/home");
    }
    else if (text === "open chess computer" || text === "open chess against computer" || text === "play chess computer" || text === "play chess against computer") {
        output = "I'm ready"
        window.open("https://www.chess.com/play/computer");
    }
    else if (text === "open photo editor" || text === "open pixlr") {
        output = "Opening photo editor"
        window.open("https://pixlr.com/x/");
    }
    else if (text === "open google" || text === "open browser") {
        output = "Opening google"
        window.open("https://www.google.com");
    }

    else if (text === "search" || text === "google") {
        searchBarOpen()
    }

    else if (text === "clock" || text === "open clock") {
        clockOpen()
        output = "Opening clock"
    }
    else if (text === "what's the time" || text === "what time is it" || text === "time" || text === "date") {
        clockOpen()
        if (hour < 12) {
            output = `the time is ${today.getMinutes()} past ${today.getHours()}`
        }
        else {
            output = `the time is ${today.getMinutes()} past ${(today.getHours()) - 12}`
        }
    }
    else if (text === "close clock") {
        clockClose()
        output = "Closing clock"
    }
    else if (text === "what day is it" || text === "what day is it today" || text === "day") {
        output = `Today is ${dayNames[(today.getDay())]}`
    }
    else if (text === "month" || text === "what month is it") {
        output = `We are currently in ${monthNames[(today.getMonth()) - 1]}`
    }
    else if (text === "year" || text === "what year is it") {
        output = `We are in ${today.getFullYear()}`
    }

    else if (text === "breathe air") {
        output = "listen here you subaquatic air breathing fish swimming monkey flying pelican chewing land eater. WHAT COLOR IS YOU'R BUGATTI???"
    }

    else if (text === "simon says") {
        simonSaysOpen()
    }

    else if (text === "0") {
        document.querySelector(".outer").style.display = "none"
        output = "All toys have been destroyed"
    }

    else if (text === "summon tank" || text === "spawn a tank" || text === "summon a tank") {
        document.getElementById("tankToy").style.display = "block"
        output = "Tank summoned"
    }
    else if (text === "destroy tank") {
        document.getElementById("tankToy").style.display = "none"
        output = "Tank destroyed"
    }

    else if (text === "summon balloon" || text === "summon balloons" || text === "spawn a balloon" || text === "spawn balloons") {
        document.getElementById("balloonToy").style.display = "block"
        output = "Balloons summoned"
    }
    else if (text === "destroy balloon" || text === "destroy balloons") {
        document.getElementById("balloonToy").style.display = "none"
        output = "Balloons destroyed"
    }

    else if (text === "summon cat" || text === "summon adam" || text === "spawn adam" || text === "spawn a cat") {
        document.getElementById("catToy").style.display = "block"
        output = "Mooly summoned"
    }
    else if (text === "destroy cat" || text === "destroy adam" || text === "destroy the cat") {
        document.getElementById("catToy").style.display = "none"
        output = "Mooly destroyed"
    }

    else if (text === "show command list" || text === "open command list" || text === "open commands" || text === "show commands") {
        window.location.href = 'commandList.html';
        output = "Opening Command Data"
    }

    else if (text === "rps" || text === "rock paper scissors") {
        var RPSnum = Math.floor(Math.random() * 10) + 1;
        if (RPSnum <= 3) {
            output = "Rock"
        }
        else if (RPSnum <= 6 && RPSnum > 3) {
            output = "Paper"
        }
        else {
            output = "Scissors"
        }
    }
    

    else if (text === "") {
        output = ""
    }
    else {
        output = "i'm sorry, i don't understand"
    }
    window.speechSynthesis.cancel()
    if (speakIsOn === true) {
        speech.text = output
        window.speechSynthesis.speak(speech)
    }
    if (textIsOn === true) {
        document.querySelector(".speechText").innerHTML = output
    }
    // inp.value = ""
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        searchFunction()
    }
})
function searchFunction() {
    if (searchBarOn === true) {
        searchBarSearch()
    }
    else if (simonSaysOn === true) {
        output = searchBarInput.value
        speech.text = output
        window.speechSynthesis.speak(speech)
    }
    else {
        speak()
    }
}

// speech to text (had to be moved here to use speech() function)

// transcript = text given


function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
        // new speech recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
    
        // This runs when the speech recognition service starts
        recognition.onstart = function() {
            action.innerHTML = "<small>listening, please speak...</small>";
        };
        
        recognition.onspeechend = function() {
            action.innerHTML = "<small>stopped listening, hope you are done...</small>";
            recognition.stop();
        }
      
        // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
            document.querySelector(".inputArea").value = transcript
            speak()
            console.log(confidence)
        };
      
         // start recognition
         recognition.start();
  }