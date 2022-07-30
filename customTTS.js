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

var searchBar = document.getElementById("SearchBarOuter")
var inp = document.querySelector(".inputArea")
var clock = document.getElementById("clock")

var today = new Date()
var hour = today.getHours()
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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
    else if (text === "good evening") {
        if (hour < 12) {
            output = "It is currently the morning"
          }
        else if (hour < 18) {
            output = "It is currently the afternoon"
          }
        else {
            output = "Evening to you too"
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
    else if (text === "what is the time" || text === "whats the time" || text === "time" || text === "date" || text === "day" || text === "what day is it") {
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
    else if (text === "month" || text === "what month is it") {
        output = `We are currently in ${monthNames[today.getMonth()]}`
    }
    else if (text === "year" || text === "what year is it") {
        output = `We are in ${today.getFullYear()}`
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
    inp.value = ""
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
    else {
        speak()
    }
}