// Button click interaction
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


// // auto call//
// // Check if the browser supports the Web Speech API
// // Check if the browser supports the Web Speech API
// if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();

//     recognition.continuous = true; // Keep recognizing even if the user pauses
//     recognition.interimResults = false; // Don't capture partial results
//     recognition.lang = 'hi-GB'; // Set language

//     // Start the speech recognition
//     recognition.start();

//     // Event handler for when speech is recognized
//     recognition.onresult = function (event) {
//         const transcript = event.results[event.results.length - 1][0].transcript.trim();
//         console.log("Recognized: ", transcript);

//         // Define the wake-up phrase
//         const wakeUpPhrase = "a";

//         // Check if the spoken phrase matches the wake-up phrase
//         if (transcript.toLowerCase() === wakeUpPhrase.toLowerCase()) {
//             // Trigger the button click event
//             document.getElementById("btn").click();
//         }
//     };

//     // Event handler for errors
//     recognition.onerror = function (event) {
//         console.error("Speech recognition error: ", event.error);
//     };

//     // Event handler for when speech recognition ends
//     recognition.onend = function () {
//         // Restart recognition to ensure it continues listening
//         recognition.start();
//     };

//     // Function to process the button action
//     function processAction() {
//         alert("Processing action...");
//         // Simulate some processing work
//         setTimeout(() => {
//             alert("Processing done. Ready for next command.");
//         }, 3000); // Simulates a 3-second processing time
//     }
// } else {
//     alert("Sorry, your browser doesn't support the Web Speech API.");
// }



//button//

let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("hii, Good Morning,  I'm vertual assistance, developed by sarthak sir")
        }
        else if(hours>=12 && hours <16){
            speak("hii, Good afternoon, I'm vertual assistance, developed by sarthak sir")
        }
        else{
            speak("hii, Good Evening, I'm vertual assistance, developed by sarthak sir")
        }
        }
        window.addEventListener("load",()=>{
           wishMe()
        })
    let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition =new speechRecognition()
     recognition.onresult=(event)=>{
        let currentIndex=event.resultIndex
        let transcript=event.results[currentIndex][0].transcript
       // content.innerText=transcript
       takeCommand(transcript.toLowerCase())
    }
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
if(message.includes("hello")){
    speak("hello dear, how can i help you")
}
else if(message.includes("tum kaun ho")){
    speak("I am virtual assistance, created by sarthak sir")
}
else if(message.includes("hu r u")){
    speak("I am virtual assistance, created by sarthak sir")
}
else if(message.includes("your name")){
    speak("my name is Astronix")
}
else if(message.includes("where are you from")){
    speak("sorry, its a secret")
}
else if(message.includes("how are you")){
        speak("I'm good")
}
else if(message.includes("how r u")){
    speak("I'm good")
}
/*link pages*/

else if(message.includes("open youtube")){
    speak("opening youtube")
    window.open("https://www.youtube.com")
}

else if(message.includes("open chat gpt")){
    speak("opening Chat GPT")
    window.open("https://chatgpt.com")
}

else if(message.includes("open google")){
    speak("opening google")
    window.open("https://www.google.com")
}

else if(message.includes("open instagram")){
    speak("opening Instagram")
    window.open("https://www.instagram.com")
}

else if(message.includes("open wikipedia")){
    speak("opening Wikipedia")
    window.open("https://www.wikipedia.org")
}

else if(message.includes("open facebook")){
    speak("opening Facebook")
    window.open("https://www.facebook.com")
}

else if(message.includes("open calculator")){
    speak("opening calculator..")
    window.open("calculator://")
}

else if(message.includes("open figma")){
    speak("opening Figma..")
    window.open("Figma://")
}

else if(message.includes("open calendar")){
    speak("opening Calendar..")
    window.open("Calendar://")
}
else if(message.includes("open spotify")){
    speak("opening spotify..")
    window.open("spotify://")
}
else if(message.includes("open figma")){
    speak("opening Figma..")
    window.open("Figma://")
}

else if(message.includes("play song")){
    speak("playing song")
    window.open("https://open.spotify.com/track/7xWuWeREbqbLnxBG5qFt08")
}


else{
    speak(`this is what i found on internet regarding ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
}}

